<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\MailGunController;
use App\Http\Controllers\RenderController;


class RecoverController extends Controller
{

    public static function RecoverPassword(Request $request){



        if (DB::table('users')->where('email', $request->email)->exists()) {

            //$password_GEN = RegisterController::Passgen();

            //$2y$10$KfZ12wWi5nC7wCKRD6YJR.UO1gfR5FrgvB08zTaR/McJcemfaah/a

            //$newUser = User::updateOrCreate(['email' => $request->email],[
            //    'password'=>Hash::make($password_GEN),

            //]);
















        }else{

            return RenderController::Render($request,'Por favor verifique o seu email para mais informações.', 10);
        }


    }

}
