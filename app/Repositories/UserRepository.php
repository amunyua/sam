<?php

namespace App\Repositories;

use App\Models\User;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class UserRepository
 * @package App\Repositories
 * @version October 6, 2017, 10:33 am UTC
 *
 * @method User findWithoutFail($id, $columns = ['*'])
 * @method User find($id, $columns = ['*'])
 * @method User first($columns = ['*'])
*/
class UserRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
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
     * Configure the Model
     **/
    public function model()
    {
        return User::class;
    }
}
