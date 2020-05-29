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
        return response()->json(['products' => $products], 200);        
    }
}
