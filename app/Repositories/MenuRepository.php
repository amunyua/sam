<?php

namespace App\Repositories;

use App\Models\Menu;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class MenuRepository
 * @package App\Repositories
 * @version September 20, 2017, 4:35 pm UTC
 *
 * @method Menu findWithoutFail($id, $columns = ['*'])
 * @method Menu find($id, $columns = ['*'])
 * @method Menu first($columns = ['*'])
*/
class MenuRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'menu_name',
        'parent_menu',
        'route_id',
        'sequence',
        'menu_status'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Menu::class;
    }
}
