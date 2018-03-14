<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Sms
 * @package App\Models
 * @version March 14, 2018, 10:41 am UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property string message_id
 * @property string recipient
 * @property string sender
 * @property string message
 * @property boolean sent
 * @property boolean delivered
 * @property integer store_id
 */
class Sms extends Model
{

    public $table = 'sms';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'message_id',
        'recipient',
        'sender',
        'message',
        'sent',
        'delivered',
        'store_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'message_id' => 'string',
        'recipient' => 'string',
        'sender' => 'string',
        'message' => 'string',
        'sent' => 'boolean',
        'delivered' => 'boolean',
        'store_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
