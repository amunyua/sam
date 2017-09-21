<?php

namespace App\Repositories;

use App\Models\Route;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class RouteRepository
 * @package App\Repositories
 * @version September 20, 2017, 4:03 pm UTC
 *
 * @method Route findWithoutFail($id, $columns = ['*'])
 * @method Route find($id, $columns = ['*'])
 * @method Route first($columns = ['*'])
*/
class RouteRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'route_name',
        'url',
        'route_status',
        'parent_route'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Route::class;
    }
}
