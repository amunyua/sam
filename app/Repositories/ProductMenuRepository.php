<?php

namespace App\Repositories;

use App\Models\ProductMenu;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ProductMenuRepository
 * @package App\Repositories
 * @version November 6, 2017, 8:46 pm UTC
 *
 * @method ProductMenu findWithoutFail($id, $columns = ['*'])
 * @method ProductMenu find($id, $columns = ['*'])
 * @method ProductMenu first($columns = ['*'])
*/
class ProductMenuRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'product_id',
        'uom',
        'description',
        'price',
        'status',
        'created_by',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ProductMenu::class;
    }
}
