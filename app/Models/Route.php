<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Route
 * @package App\Models
 * @version September 18, 2017, 10:36 am UTC
 *
 * @property string route_name
 */
class Route extends Model
{
    use SoftDeletes;

    public $table = 'routes';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'route_name'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'route_name' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
