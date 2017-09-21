<?php

namespace App\Repositories;

use App\Models\Role;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class RoleRepository
 * @package App\Repositories
 * @version September 20, 2017, 3:00 pm UTC
 *
 * @method Role findWithoutFail($id, $columns = ['*'])
 * @method Role find($id, $columns = ['*'])
 * @method Role first($columns = ['*'])
*/
class RoleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'role_code',
        'role_name',
        'role_status'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Role::class;
    }
}
