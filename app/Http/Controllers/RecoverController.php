<?php

namespace App\Http\Controllers;

use App\Http\Controllers\RenderController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\MailGunController;
use Carbon\Carbon;


class RecoverController extends Controller
{

    public static function RecoverPassword(Request $request){



        /*
         * if check if the user existes
         *
         */
        if (DB::table('users')->where('email', $request->email)->exists()) {

            //$password_GEN = RegisterController::Passgen();

            //$2y$10$KfZ12wWi5nC7wCKRD6YJR.UO1gfR5FrgvB08zTaR/McJcemfaah/a

            //$newUser = User::updateOrCreate(['email' => $request->email],[
            //    'password'=>Hash::make($password_GEN),

            //]);


            //Create Password Reset Token
            $token = RegisterController::Passgen(60);

            $clientIP = request()->ip();

            /*
             * check if reset link as ever ben Generates
             * if yes lets Delete and Create a new one
             */
            if(DB::table('password_resets')->where('email', $request->email)->exists()){

                /*
                 * Deleting token if existes
                 */
                DB::table('password_resets')->where('email', $request->email)->delete();


            }



            self::CreateData($request,$token);

            if(MailGunController::RecoverPassword($request->email,$token,$clientIP)){



                return RenderController::Render($request,'Por favor verifique o seu email para mais informações.', 10);
            }

















        }else{

            return RenderController::Render($request,'Por favor verifique o seu email para mais informações.', 10);
        }


    }




    public static function FinalReset($request){
        $token = $request->id;

        $data  = DB::table('password_resets')->where('token', $token)->first();

        if ($data){

            $password_GEN = RegisterController::Passgen(8);


            //print_r($data);


            $user = DB::table('users')->where('email', $data->email)->first();
            /*
             * todo
             * need to finish
             * delete the token recovery
             * update user new pass
             * send the email
             * return the message
             *
             */





            exit();

        }


    }















    public static function CreateData($request,$token){
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

}
