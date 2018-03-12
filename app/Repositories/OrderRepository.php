<?php

namespace App\Repositories;

use App\Models\Order;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class OrderRepository
 * @package App\Repositories
 * @version March 12, 2018, 1:35 pm UTC
 *
 * @method Order findWithoutFail($id, $columns = ['*'])
 * @method Order find($id, $columns = ['*'])
 * @method Order first($columns = ['*'])
*/
class OrderRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'sender_name',
        'sender_email',
        'sender_number',
        'receiver_name',
        'receiver_email',
        'receiver_phone',
        'store_id',
        'total',
        'amount_paid',
        'payment_method',
        'refCode',
        'paid',
        'valid',
        'collected',
        'ip'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Order::class;
    }
}
