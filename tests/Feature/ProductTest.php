<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Product;

class ProductTest extends TestCase
{
    use RefreshDatabase;


    public function testNeedToConnectToDBandListAllItems()
    {        
        //adding three products
        factory(Product::class,3)->create();

        $this->get(route('products.index'))
            ->assertStatus(200);

        $content = $this->get(route('products.index'))->getContent();
        $json_arr = json_decode($content,true);
        $this->assertCount(3, $json_arr);
    }

    public function testValidateData()
    {
        //validate the fields
        //test valid and invalid data
        $this->assertTrue(true);
    }

    public function testCanIStoreData()
    {
        //validate the fields
        //store some data
        $this->assertTrue(true);
    }


    
}
