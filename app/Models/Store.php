<?php

namespace App\Models;

//use Eloquent as Model;
use Illuminate\Database\Eloquent\Model;
/**
 * Class Store
 * @package App\Models
 * @version September 26, 2017, 12:30 pm UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection menus
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property string store_name
 * @property string location
 * @property boolean status
 */
class Store extends Model
{

    public $table = 'stores';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'store_name',
        'location',
        'status',
        'created_by'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'store_name' => 'string',
        'location' => 'string',
        'status' => 'boolean',
        'created_by'=>'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'store_name'=>'required',
//        'created_by'=>'required'
    ];

    
}
