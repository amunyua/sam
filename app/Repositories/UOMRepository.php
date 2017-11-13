<?php

namespace App\Repositories;

use App\Models\UOM;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class UOMRepository
 * @package App\Repositories
 * @version November 13, 2017, 10:24 am UTC
 *
 * @method UOM findWithoutFail($id, $columns = ['*'])
 * @method UOM find($id, $columns = ['*'])
 * @method UOM first($columns = ['*'])
*/
class UOMRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'created_by',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return UOM::class;
    }
}
