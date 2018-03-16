<?php

use Illuminate\Database\Seeder;

class BroadcastSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Broadcast::truncate();
        \App\Models\Broadcast::create([
            'action'=>'OrderConfirmation',
            'message' => 'Dear @receiver @sender has sent you a voucher from @store. Kindly visit the nearest @store and present @code to redeem, thanks.',
            'store_id' => 1
        ]);
    }
}
