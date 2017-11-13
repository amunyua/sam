<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class UOM
 * @package App\Models
 * @version November 13, 2017, 10:24 am UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection ProductMenu
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property string name
 * @property integer created_by
 * @property integer store_id
 */
class UOM extends Model
{

    public $table = 'uoms';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'name',
        'created_by',
        'store_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'created_by' => 'integer',
        'store_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function productMenus()
    {
        return $this->hasMany(\App\Models\ProductMenu::class);
    }
}
