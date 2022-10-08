<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;



class ModulesController extends Controller
{


    public function Start(Request $request)
    {


            if (Auth::check()) {



                return view('game');


            }elseif(!Auth::check()) {



                $users = DB::table('users')->get();








                //return view("game");
                return view('login');
                //return view("data");
                //return view("Carater");
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


            /*
             * switch case to get url modules
             * to be improved to OOP
             */

            switch ($module) {
                case 'Homepagelogin';

                    return $this->Login($request, 'Login Teste', 10);


                    break;
                case 'Homepageregister';
                    return $this->Register($request, 'resgister Moduler', 200);
                    break;

                case 'Homepagesocial';

                    echo 'facebook Login Register';
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













    public function Login(Request $request, $msg = null, $code = null)
    {


        // The user is logged in...

        $users = DB::table('users')->get();

        foreach ($users as $user) {
            //var_dump($user->email);
        }


        if (Auth::check()) {

        }

        //abort(404);


        /*
         * login function in order to log in the user
         * this is a test maybe to be improved
         */

        // working checking credentials

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'pass' => ['required'],
        ]);


        return RenderController::Render($request, $msg, $code);

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


    public function outputdatajson($data)
    {

        return response($data, 200)
            ->header('Content-Type:', 'application/json');
    }
}
