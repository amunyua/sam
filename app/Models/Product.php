<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Product
 * @package App\Models
 * @version October 17, 2017, 2:18 pm UTC
 *
 * @property \App\Models\ProductCategory productCategory
 * @property \App\Models\Store store
 * @property \Illuminate\Database\Eloquent\Collection menus
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property string name
 * @property integer product_category
 * @property integer store_id
 * @property integer created_by
 */
class Product extends Model
{

    public $table = 'products';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'name',
        'product_category',
        'store_id',
        'created_by'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'product_category' => 'integer',
        'store_id' => 'integer',
        'created_by' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'product_category'=>'required',
        'name'=>'required'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function productCategory()
    {
        return $this->belongsTo(\App\Models\ProductCategory::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function store()
    {
        return $this->belongsTo(\App\Models\Store::class);
    }
}
