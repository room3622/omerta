<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class GameControler extends Controller
{


    /*
     * This Is the Game Version
     */
        public static function GameVersion(){
            $version = '5.8.0.5';
            Return $version;
        }




        public static function ServerGameInfo(){

            /*
             * ?module=Homepage.Reset&action=hof
             */

            $data = [
                "hof" => [
                ],
                "release_date" => "2025-03-04 12:00:00",
                "extension" => "uk",
                "stats" => [
                    "total" => 305,
                    "alive" => 233,
                    "dead" => 72,
                    "online" => 1
                ],
                "title" => "PARABÉNS <br/>AOS VENCEDORES!",
                "subtitle" => "do último round"
            ];

            Return $data;

        }








}
