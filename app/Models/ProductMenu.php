<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class ProductMenu
 * @package App\Models
 * @version November 6, 2017, 8:46 pm UTC
 *
 * @property \App\Models\Store store
 * @property \App\Models\Product product
 * @property \App\Models\Uom uom
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property integer product_id
 * @property integer uom
 * @property string description
 * @property float price
 * @property boolean status
 * @property integer created_by
 * @property integer store_id
 */
class ProductMenu extends Model
{

    public $table = 'product_menus';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'product_id',
        'uom',
        'description',
        'price',
        'status',
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
        'product_id' => 'integer',
        'uom' => 'integer',
        'description' => 'string',
        'price' => 'float',
        'status' => 'boolean',
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function store()
    {
        return $this->belongsTo(\App\Models\Store::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function product()
    {
        return $this->belongsTo(\App\Models\Product::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function uom()
    {
        return $this->belongsTo(\App\Models\Uom::class);
    }
}
