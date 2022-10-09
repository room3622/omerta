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
        /*
         * Geting Cliant
         * Token Sent to email
         * To Validate
         */
        $token = $request->id;

        /*
         * Getin User ip adresse
         */
        $clientIP = request()->ip();


        /*
         * Generating a password
         * and living standing by
         */
        $password_GEN = RegisterController::Passgen(8);


        /*
         * Query the databese for token
         * @data will hold the object if existes
         *
         */
        $data  = DB::table('password_resets')->where('token', $token)->first();

        /*
         * if the data existes
         * lets work on it
         */
        if ($data){




            /*
             * Quering the user By the token
             * @data holds infot from the token
             * it will return the email of the
             * user that generated the token
             *==========================================================
             *
             * Quering the user from the token puting it on
             * placeholder @user
             *
             * @user now has all information from thi token
             *
             */
            $user = DB::table('users')->where('email', $data->email)->first();



            /*
             * Sending the email
             * todo
             * the viwe file is not finish
             */
            MailGunController::RecoverypasswordFinal($user->email,"A tua informação de login do Omerta",$clientIP,$password_GEN);

            /*
             * using the data from the user
             * seting the new password
             */
            $user->password = $password_GEN;

            /*
             * Deleting the token
             * is no needet no more
             *
             *
             */
            DB::table('password_resets')->where('email', $user->email)->delete();



            /*
             * Saving the user new password
             */
            $user->save();

            exit();





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
