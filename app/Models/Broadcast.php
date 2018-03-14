<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Broadcast
 * @package App\Models
 * @version March 14, 2018, 10:00 am UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property string action
 * @property string message
 * @property string status
 * @property integer store_id
 */
class Broadcast extends Model
{

    public $table = 'broadcasts';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'action',
        'message',
        'status',
        'store_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'action' => 'string',
        'message' => 'string',
        'status' => 'string',
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
