<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Product;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    //products.index
    public function testCanIConnectToDBandListAllItems()
    {        
        //adding three products
        factory(Product::class,3)->create();

        $this->get(route('products.index'))
            ->assertStatus(200);

        $content = $this->get(route('products.index'))->getContent();
        $json_arr = json_decode($content,true);
        $this->assertCount(3, $json_arr);
    }

    //products.show
    public function testShowASpecificItem()
    {
        //store some data
        factory(Product::class,1)->create();       
        //select first registry
        $product = Product::select(['id','name'])
            ->where('status','A')
            ->orderBy('name','ASC')
            ->first();
        $this->get(route('products.show',$product->id))
                ->assertStatus(200)
                ->assertJsonFragment(['id' => $product->id, 'name' => $product->name]);        
    }

    //products.store
    public function testCanIStoreData()
    {
        //validate data and try to store it
        $invalidProducts = ['name' => 'Dummy name', 'description' => 'some stuff','price' => 'invalid text price', 'pic' => 'dummy-pic.jpg' ];
        $validProducts = ['name' => 'Dummy name', 'description' => 'some stuff','price' => 1.99, 'pic' => 'dummy-pic.jpg' ];

        $this->post(route('products.store',$invalidProducts))
            ->assertStatus(302);

        $invalidProducts['name'] = 'A string bigger than fifty characters should not be recorded.';
        $this->post(route('products.store',$invalidProducts))
            ->assertStatus(302);
                
        $this->post(route('products.store',$validProducts))
            ->assertStatus(201);        
    }

    //products.update
    public function testCanIUpdateAnItem()
    {
        factory(Product::class,1)->create();
        $product = Product::where('status','A')
            ->orderBy('name','ASC')
            ->first();

        $updateProductArr = ['id' => $product->id, 'name' => 'Mortadela','status' => $product->status,'price' => $product->price];
        $response = $this->json('PUT', '/api/produtos/' . $product->id, $updateProductArr)
            ->assertStatus(200)
            ->assertJson([ 
                'id' => $product->id, 
                'name' => 'Mortadela' 
            ]);
        //try to update an item that doesn't exist
        $response = $this->json('PUT', '/api/produtos/999', $updateProductArr)
            ->assertStatus(404);
    }
    
    //products.delete
    public function testCanIDeleteData()
    {
        factory(Product::class,1)->create();
        $product = Product::where('status','A')
            ->orderBy('name','ASC')
            ->first();
        $response = $this->json('DELETE', '/api/produtos/' . $product->id)
            ->assertStatus(204); 
        //try to delete an item that doesn't exist
        $response = $this->json('DELETE', '/api/produtos/999')
            ->assertStatus(404);     
    }

    public function testCanISearchByName()
    {
        factory(Product::class,1)->create(['name' => 'Pão de metro']);
        factory(Product::class,1)->create(['name' => 'Pão de mel']);
        factory(Product::class,1)->create(['name' => 'Pão de queijo']);
        factory(Product::class,1)->create(['name' => 'broa']);

        $data = ['productName' => "Broa"];
        $content = $this->json('POST', '/api/produtos/buscar/',$data)
            ->getContent();        
        $json_arr = json_decode($content,true);
        $this->assertCount(1, $json_arr);

        $data['productName'] = 'pão';
        $content = $this->json('POST', '/api/produtos/buscar/',$data)
            ->getContent();
        $json_arr = json_decode($content,true);        
        $this->assertCount(3, $json_arr);

        $data['productName'] = 'café';
        $content = $this->json('POST', '/api/produtos/buscar/',$data)
            ->getContent();
        $json_arr = json_decode($content,true);        
        $this->assertCount(0, $json_arr);

        $data['productName'] = '';
        $content = $this->json('POST', '/api/produtos/buscar/',$data)
            ->getContent();
        $json_arr = json_decode($content,true);        
        $this->assertCount(4, $json_arr);
    }
    
}
