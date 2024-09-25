<?php

namespace App\Console\Commands;

use Faker\Factory as Faker;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GenerateFakeData extends Command
{
    protected $signature = 'fake:generate {count=50}';
    protected $description = 'Generate fake data for CTV marketing agency';

    public function handle()
    {
        $faker = Faker::create();
        $count = $this->argument('count');

        $data = [
            'campaigns' => [],
            'clients' => [],
            'analytics' => []
        ];

        for ($i = 0; $i < $count; $i++) {
            $data['campaigns'][] = [
                'id' => $faker->unique()->randomNumber(5),
                'name' => $faker->catchPhrase,
                'client' => $faker->company,
                'budget' => $faker->numberBetween(5000, 100000),
                'start_date' => $faker->date(),
                'end_date' => $faker->date(),
                'status' => $faker->randomElement(['active', 'pending', 'completed']),
            ];

            $data['clients'][] = [
                'id' => $faker->unique()->randomNumber(5),
                'name' => $faker->company,
                'contact_person' => $faker->name,
                'email' => $faker->companyEmail,
                'phone' => $faker->phoneNumber,
            ];

            $data['analytics'][] = [
                'campaign_id' => $faker->randomElement($data['campaigns'])['id'],
                'impressions' => $faker->numberBetween(1000, 1000000),
                'clicks' => $faker->numberBetween(100, 10000),
                'conversions' => $faker->numberBetween(10, 1000),
                'revenue' => $faker->randomFloat(2, 1000, 50000),
            ];
        }

        $jsonData = json_encode($data, JSON_PRETTY_PRINT);
        File::put(public_path('fake_data.json'), $jsonData);

        $this->info('Fake data generated successfully!');
    }
}
