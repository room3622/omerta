<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Http\Controllers\MailGunController;
use League\Flysystem\Config;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RecoverController;
use Illuminate\Support\Carbon;

class ModulesController extends Controller
{


    public function Start(Request $request)
    {

        self::DeletePasswordResets();





            if (Auth::check()) {



                return view('game');
                //return view("Carater");


            }elseif(!Auth::check()) {



                $users = DB::table('users')->get();




                //MailGunController::Sendmail("room3622@gmail.com");

                //MailGunController::Register('room3622@gmail.com');



                //$data   = DB::table('password_resets')->get();










                //return view("game");
                return view('login');
                //return view("data");

            }





    }




    public function Modules(Request $request){

        if (isset($request->module)) {

            $module = $request->module;

            // URL  modules lowercase only the first character is upper case
            // removed all  . and withe spaces
            // need to implement auto
            // need to transform to OOP
            $module = str_replace('.', '', $module);
            $module = Str::lower($module);
            $module = ucfirst($module);

            $action = $request->action;


            /*
             * switch case to get url modules
             * to be improved to OOP
             */

            switch ($module) {
                case 'Homepagelogin';

                if($request->action ==="Forgottenpassword"){

                    return RecoverController::RecoverPassword($request);

                }elseif($request->action ==="RecoverPassword"){



                  return RecoverController::FinalReset($request);

                }else{

                    return $this->Login($request);

                }



                    break;
                case 'Homepageregister';
                    return $this->Register($request, 'resgister Moduler', 200);
                    break;


                case 'Servicesaccount';

                    break;


                case 'Servicesmenu';

                    break;


                default:
                    return $this->Login($request, 'This module dont existes! ', 200);

            }


        }
    }













    public function Login(Request $request)
    {



        if (Auth::attempt(['email' => $request->email, 'password' => $request->pass])) {


            $request->session()->regenerate();



            $code = 0;
            return RenderController::Render($request, '', $code);
            return redirect()->intended('/');

        }else{

            $msg = "na na !";
            $code = 10;
            return RenderController::Render($request, $msg, $code);
        }





    }


    public function Register(Request $request, $msg, $code)
    {


        if (DB::table('users')->where('email', $request->mail)->exists()) {

            /*
             * this checks if the email is in the database
             * impute needs to be clen
             * prepare statement im place
             * show the error msg
             */

            $msg = 'This Email Is Already Registered!';


        } else {
            /*
             * provide to Register the account
             * need email validation to be sent to user
             * and generate a password
             * then insert data to the database
             *
             */


           return RegisterController::Register($request);
        }


        return RenderController::Render($request, $msg, $code);
    }


    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }


    public static function DeletePasswordResets($minuts=60){
        DB::table('password_resets')
            ->where('created_at', '<', Carbon::now()->subMinutes($minuts)->toDateTimeString())
            ->delete();

    }




    public function outputdatajson($data)
    {

        return response($data, 200)
            ->header('Content-Type:', 'application/json');
    }
}
