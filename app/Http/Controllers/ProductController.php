<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;

class ProductController extends Controller
{

    public function index()
    {     
        $products = Product::where('status','A')
             ->orderBy('name','ASC')
             ->get();        
        return $products->toJson();
    }

    public function show(Product $product)
    {
        return response()->json($product,200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'max:50'],
            'price' => ['required','numeric']
        ]);
        $product = Product::create($request->all());
        return response()->json($product, 201);       
    }

    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'max:50'],
            'price' => ['required','numeric']
        ]);
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function delete(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
