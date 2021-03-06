<?php

namespace App\DataTables;

use App\Models\User;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\EloquentDataTable;

class UserDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        $dataTable = new EloquentDataTable($query);

        return $dataTable->addColumn('action', 'users.datatables_actions')
//            ->addColumn('roles.role_name','roles.role_name')
            ->rawColumns(['action','status','password_updated'])
            ->editColumn('status',function(User $role){
                $btn = '<label class="label label-danger">Inactive</label>';
                if($role->status){
                    $btn = '<label class="label label-success">Active</label>';
                }
                return $btn;
            })
            ->editColumn('password_updated',function(User $role){
                $btn = '<label class="label label-danger">No</label>';
                if($role->password_updated){
                    $btn = '<label class="label label-success">Yes</label>';
                }
                return $btn;
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Post $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return User::query()
            ->select('*')
            ->leftJoin('stores','stores.id','=','users.store_id')
            ->leftJoin('role_user','role_user.user_id','=','users.id')
            ->leftJoin('roles','roles.id','=','role_user.role_id')
            ;
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
            ->columns($this->getColumns())
//            ->addColumn([
//                'defaultContent' => '',
//                'data'           => 'roles.role_name',
//                'name'           => 'roles.role_name',
//                'title'          => 'Role name',
//                'render'         => null,
//                'orderable'      => false,
//                'searchable'     => true,
//                'exportable'     => false,
//                'printable'      => false,
//                'footer'         => '',
//                'width' => '80px'
//            ])
            ->minifiedAjax()
            ->addAction(['width' => '80px'])
            ->parameters([
                'dom'     => 'Bfrtip',
                'order'   => [[0, 'desc']],
                'buttons' => [
//                    'create',
//                    'export',
//                    'print',
//                    'reset',
//                    'reload',
                ],
            ]);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            'name',
            'email',
            'phone_number',
            'store_name'=>[
                'title'=>'Store',
//                'data'=>'stores.store_name'
            ],
            'role_name'=>[
                'title'=>'Role'
            ],
            'status',
            'password_updated',
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'usersdatatable_' . time();
    }
}