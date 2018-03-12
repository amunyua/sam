<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class OrderLine
 * @package App\Models
 * @version March 12, 2018, 1:35 pm UTC
 *
 * @property \App\Models\Order order
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property integer order_id
 * @property integer product_id
 * @property float quantity
 * @property float price
 * @property integer store_id
 */
class OrderLine extends Model
{

    public $table = 'order_lines';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
        'store_id',
        'product_name',
        'uom'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'order_id' => 'integer',
        'product_id' => 'integer',
        'quantity' => 'float',
        'price' => 'float',
        'store_id' => 'integer',
        'product_name'=>'string',
        'uom'=>'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function order()
    {
        return $this->belongsTo(\App\Models\Order::class);
    }
}
