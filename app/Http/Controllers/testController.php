<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class testController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
             

    }

    public function test()
    {
        
        return auth()->user();
    }

}