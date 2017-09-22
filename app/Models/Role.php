<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

//use Eloquent as Model;

/**
 * Class Role
 * @package App\Models
 * @version September 20, 2017, 3:00 pm UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection menus
 * @property \Illuminate\Database\Eloquent\Collection RoleRoute
 * @property \Illuminate\Database\Eloquent\Collection RoleUser
 * @property string role_code
 * @property string role_name
 * @property boolean role_status
 */
class Role extends Model
{

    public $table = 'roles';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'role_code',
        'role_name',
        'role_status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'role_code' => 'string',
        'role_name' => 'string',
        'role_status' => 'boolean'
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
    public function roleRoutes()
    {
        return $this->hasMany(\App\Models\RoleRoute::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function roleUsers()
    {
        return $this->hasMany(\App\Models\RoleUser::class);
    }

    public function routes(){
        return $this->belongsToMany("App\Models\Route");
    }
}
