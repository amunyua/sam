<?php

namespace App\DataTables;

use App\Models\Store;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\EloquentDataTable;

class StoreDataTable extends DataTable
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

        return $dataTable
            ->editColumn('status',function(Store $store){
                if($store->status){
                    return '<label class="label label-success">Active</label>';
                }else{
                    return '<label class="label label-warning">Inactive</label>';
                }
            })
            ->editColumn('image',function(Store $document){

                return '<form method="post" action="'.url("download").'">
                <input type="hidden" name="_token" value="'.csrf_token().'">
                
                            <input type="hidden" name="path" value="'.$document->image.'">
                            <button type="submit" class="btn btn-success btn-xs">download</button>
</form>';
            })
            ->rawColumns(['status','action','image'])
            ->addColumn('action', 'stores.datatables_actions');
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Post $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Store $model)
    {
        return $model->newQuery();
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
            'store_name',
            'description'=>[
                'title'=>'Description'
            ],
            'location',
            'image',
            'status'
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'storesdatatable_' . time();
    }
}