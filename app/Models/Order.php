<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Order
 * @package App\Models
 * @version March 12, 2018, 1:35 pm UTC
 *
 * @property \App\Models\Store store
 * @property \Illuminate\Database\Eloquent\Collection OrderLine
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property string sender_name
 * @property string sender_email
 * @property string sender_number
 * @property string receiver_name
 * @property string receiver_email
 * @property string receiver_phone
 * @property integer store_id
 * @property float total
 * @property float amount_paid
 * @property string payment_method
 * @property string refCode
 * @property boolean paid
 * @property boolean valid
 * @property boolean collected
 * @property string ip
 */
class Order extends Model
{

    public $table = 'orders';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
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
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'sender_name' => 'string',
        'sender_email' => 'string',
        'sender_number' => 'string',
        'receiver_name' => 'string',
        'receiver_email' => 'string',
        'receiver_phone' => 'string',
        'store_id' => 'integer',
        'total' => 'float',
        'amount_paid' => 'float',
        'payment_method' => 'string',
        'refCode' => 'string',
        'paid' => 'boolean',
        'valid' => 'boolean',
        'collected' => 'boolean',
        'ip' => 'string'
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
    public function store()
    {
        return $this->belongsTo(\App\Models\Store::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function orderLines()
    {
        return $this->hasMany(\App\Models\OrderLine::class);
    }
}
