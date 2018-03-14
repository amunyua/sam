<?php

namespace App\Repositories;

use App\Models\Broadcast;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class BroadcastRepository
 * @package App\Repositories
 * @version March 14, 2018, 10:00 am UTC
 *
 * @method Broadcast findWithoutFail($id, $columns = ['*'])
 * @method Broadcast find($id, $columns = ['*'])
 * @method Broadcast first($columns = ['*'])
*/
class BroadcastRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'action',
        'message',
        'status',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Broadcast::class;
    }
}
