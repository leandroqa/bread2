<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Faker\Provider\Image;

$factory->define(Product::class, function (Faker $faker) {
    $productNames = ["Pão francês",
                    "Pão caseirinho",
                    "Pão de leite",
                    "Broa de fubá",
                    "Broa de chocolate",
                    "Bolachinha de goiaba",
                    "Pão de leite integral",
                    "Leite 1L",
                    "Café 500g",
                    "Pudim de leite condensado",
                    "Margarina 250g"
];

    return [
        'name' => $productNames[array_rand($productNames,1)],
        'description' => $faker->text,
        'price' => (float) $result = rand(1,25).".".rand(0,9).rand(0,9),        
        'pic' => $faker->image(public_path('images'), "120", "85", "food", false)        
    ];
});
