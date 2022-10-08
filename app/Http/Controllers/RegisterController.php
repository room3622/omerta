<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\MailGunController;
use App\Http\Controllers\RenderController;



class RegisterController extends Controller
{
    //




    public static function Register(Request $request){

        $password_GEN = RegisterController::Passgen(8);


        $newUser = User::updateOrCreate(['email' => $request->email],[
            'email'=> $request->mail,
            'password'=>Hash::make($password_GEN),
            'mailme'=>$request->mailme


        ]);




        $msg = "Registo efectuado com sucesso. Para activares a tua conta, por favor confirma o teu endere\u00e7o de email clicando no link que acab\u00e1mos de enviar para a tua caixa de correio";



        if (MailGunController::Register($request->mail,$password_GEN)) {

            return RenderController::Render($request, $msg, 0);
        }




    }


    public static function Passgen($num=8){
        $passGen = Str::random($num);
        return $passGen;
    }



}
