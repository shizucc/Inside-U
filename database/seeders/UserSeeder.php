<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(100)->create();
        User::create([
            'username' => 'tes',
            'email' => 'tes@gmail.com',
            'password' => Hash::make('tesss123'),
            'role' => 'user',
        ]);
        User::create([
            'username' => 'tesadmin',
            'email' => 'tesadmin@gmail.com',
            'password' => Hash::make('tesss123'),
            'role' => 'admin',
        ]);
        User::create([
            'username' => 'tespakar',
            'email' => 'tespakar@gmail.com',
            'password' => Hash::make('tesss123'),
            'role' => 'pakar',
        ]);
    }
}
