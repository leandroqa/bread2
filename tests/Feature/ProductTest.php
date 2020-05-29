<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Product;
use ProductSeeder;

class ProductTest extends TestCase
{
      
    public function testNeedToConnectToDBandListAllItems()
    {        
        //$content = $this->get(route('products.index'))->getContent();
        //$this->assertSame('',$content);
        //$this->assertEmpty($content);
        //$this->assertNull($content);

        //assert grab no items
        //delete all items
        // $content = $this->get(route('products.index'))
        //     ->assertStatus(200)
        //     ->assertJsonCount(0);
        //insert some stuff in the database
        $this->seed(ProductSeeder::class);
        $content = $this->get(route('products.index'))
            ->assertStatus(200)
            ->assertJsonCount(3);
    }
    
}
