<?php

namespace App\DataTables;

use App\Models\Product;
use App\Models\ProductCategory;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\EloquentDataTable;

class ProductDataTable extends DataTable
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
        return $dataTable->addColumn('action', 'products.datatables_actions')
            ->editColumn('product_category',function(Product $cat){
                return ProductCategory::find($cat->product_category)->category_name;
            })
//            ->editColumn('product_category',function(ProductCategory $category){
//
//                    $cat = ProductCategory::find($category->id)->category_name;
//                return $cat;
//            })
            ;
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Post $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Product $model)
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
                'processing'=>true,
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
            'product_category',
//            'store_id',
//            'created_by'
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'productsdatatable_' . time();
    }
}