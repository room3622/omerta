<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Mail;

class MailGunController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
        $user = User::find(1)->toArray();

        Mail::send('emails.mailEvent', $user, function($message) use ($user) {
            $message->to($user['email']);
            $message->subject('Testing Mailgun');
        });

        dd('Mail Send Successfully');
    }




    public static function RecoverPassword($to, $token,$ip){


        $data["ip"] = $ip;
        $data["email"] = $to;
        $data["token"] = $token;
        $data["title"] = "A tua informação de login do ".env('APP_NAME');

        Mail::send( 'emails.RecoverSetp1', $data, function($message)use($data) {

            $message->from(env('MAIL_FROM'),env('APP_NAME'));

            $message->to($data["email"], $data["email"])->subject($data["title"]);


        });
        return 1;

    }


    public static function Register($to, $pass){

        $data["email"] = $to;
        $data["title"] = "Bem-vindo ao Omerto";
        $data["body"] = "This is Demo";
        $data["pass"] = $pass;



        Mail::send( 'emails.Register', $data, function($message)use($data) {

            $message->from(env('MAIL_FROM'),env('APP_NAME'));

            $message->to($data["email"], $data["email"])->subject($data["title"]);


        });

        return 1;

    }


    public static function Sendmail($to,$subject='Testing Mailgun'){



        $data["email"] = $to;
        $data["title"] = $subject;
        $data["body"] = "This is Demo";






        Mail::send( 'emails.mailEvent', $data, function($message)use($data) {

            $message->from(env('MAIL_FROM'),env('APP_NAME'));

            $message->to($data["email"], $data["email"])->subject($data["title"]);


        });





    }
}
