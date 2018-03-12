<?php

namespace App\Repositories;

use App\Models\OrderLine;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class OrderLineRepository
 * @package App\Repositories
 * @version March 12, 2018, 1:35 pm UTC
 *
 * @method OrderLine findWithoutFail($id, $columns = ['*'])
 * @method OrderLine find($id, $columns = ['*'])
 * @method OrderLine first($columns = ['*'])
*/
class OrderLineRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrderLine::class;
    }
}
