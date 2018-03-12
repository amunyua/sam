<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Payment
 * @package App\Models
 * @version March 12, 2018, 5:39 pm UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property bigInteger order_id
 * @property string txn_code
 * @property string ipay_status
 * @property string status_meaning
 * @property string invoice_number
 * @property string registered_name
 * @property string registered_number
 * @property string channel
 * @property integer store_id
 * @property float amount_to_be_paid
 * @property float total_paid
 * @property float short
 * @property float excess
 * @property boolean complete
 */
class Payment extends Model
{

    public $table = 'payments';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'order_id',
        'txn_code',
        'ipay_status',
        'status_meaning',
        'invoice_number',
        'registered_name',
        'registered_number',
        'channel',
        'store_id',
        'amount_to_be_paid',
        'total_paid',
        'short',
        'excess',
        'complete'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'txn_code' => 'string',
        'ipay_status' => 'string',
        'status_meaning' => 'string',
        'invoice_number' => 'string',
        'registered_name' => 'string',
        'registered_number' => 'string',
        'channel' => 'string',
        'store_id' => 'integer',
        'amount_to_be_paid' => 'float',
        'total_paid' => 'float',
        'short' => 'float',
        'excess' => 'float',
        'complete' => 'boolean'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
