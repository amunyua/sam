<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

//use Eloquent as Model;


/**
 * Class ProductCategory
 * @package App\Models
 * @version October 16, 2017, 11:09 am UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection menus
 * @property \Illuminate\Database\Eloquent\Collection Product
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection roleUser
 * @property \Illuminate\Database\Eloquent\Collection users
 * @property integer parent_category
 * @property string category_name
 * @property integer created_by
 * @property integer store_id
 */
class ProductCategory extends Model
{

    public $table = 'product_categories';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'parent_category',
        'category_name',
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
        'parent_category' => 'integer',
        'category_name' => 'string',
        'created_by' => 'integer',
        'store_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
//        'parent_category'=>'required',
        'category_name'=>'required'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function products()
    {
        return $this->hasMany(\App\Models\Product::class);
    }
}
