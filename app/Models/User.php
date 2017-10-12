<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * @package App\Models
 * @version October 6, 2017, 10:33 am UTC
 *
 * @property \App\Models\Store store
 * @property \Illuminate\Database\Eloquent\Collection menus
 * @property \Illuminate\Database\Eloquent\Collection roleRoute
 * @property \Illuminate\Database\Eloquent\Collection RoleUser
 * @property string name
 * @property string email
 * @property string password
 * @property string remember_token
 * @property string phone_number
 * @property string id_number
 * @property boolean status
 * @property integer store_id
 * @property integer created_by
 * @property boolean password_updated
 */
class User extends Model
{

    public $table = 'users';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'name',
        'email',
        'password',
        'remember_token',
        'phone_number',
        'id_number',
        'status',
        'store_id',
        'created_by',
        'password_updated'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'email' => 'string',
        'password' => 'string',
        'remember_token' => 'string',
        'phone_number' => 'string',
        'id_number' => 'string',
        'status' => 'boolean',
        'store_id' => 'integer',
        'created_by' => 'integer',
        'password_updated' => 'boolean'
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
    public function roleUsers()
    {
        return $this->hasMany(\App\Models\RoleUser::class);
    }
    public function roles(){
        return $this->belongsToMany('App\Models\Role', 'role_user', 'user_id', 'role_id');
    }

    public function role(){
        return $this->hasOne('App\Models\Role');
    }
}
