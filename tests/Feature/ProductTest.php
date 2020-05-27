<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * Test if index content is not null
     *
     * @return void
     */
    public function testGetIndex()
    {
        $response = $this->get(route('products.index'));

        $response->assertStatus(200); 
        $this->assertSame('{"baseResponse":{"headers":{},"original":"List of Products!","exception":null}}', json_encode($response));                
    }

    
}
