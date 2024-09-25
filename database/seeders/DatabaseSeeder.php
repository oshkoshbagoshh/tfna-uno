<?php

namespace Database\Seeders;
//namespace



// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory()->create([
             'name' => 'admin',
             'email' => 'admin@admin.com',
             'zztest1' => 'zztest1@gmail.com',
            'zztest2' =>'zztest2@gmail.com'
         ]);

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//
//        ]);

//        User::factory(10)->create();



    }
}
