<?php

namespace App\Repositories;

use App\Models\Sms;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class SmsRepository
 * @package App\Repositories
 * @version March 14, 2018, 10:41 am UTC
 *
 * @method Sms findWithoutFail($id, $columns = ['*'])
 * @method Sms find($id, $columns = ['*'])
 * @method Sms first($columns = ['*'])
*/
class SmsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'message_id',
        'recipient',
        'sender',
        'message',
        'sent',
        'delivered',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Sms::class;
    }
}
