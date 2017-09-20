<?php

namespace App\Repositories;

use App\Models\roles;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class rolesRepository
 * @package App\Repositories
 * @version September 18, 2017, 10:50 am UTC
 *
 * @method roles findWithoutFail($id, $columns = ['*'])
 * @method roles find($id, $columns = ['*'])
 * @method roles first($columns = ['*'])
*/
class rolesRepository extends BaseRepository
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
        return roles::class;
    }
}
