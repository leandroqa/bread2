<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;

class ProductController extends Controller
{

    // private $product;

    // public function __constructor()
    // {

    // }

    public function index()
    {     
        $products = Product::where('status','A')
             ->orderBy('name','ASC')
             ->get();        
        return $products->toJson();
    }

    //recieve a post array data
    public function store()
    {
        //need to validate fields
        //if valid store it
        return 1;
    }

}
