<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class GameVersionControler extends Controller
{


    /*
     * This Is the Game Version
     */
        public static function GameVersion(){

            $version = '5.8.0.5';


            Return $version;
        }








}
