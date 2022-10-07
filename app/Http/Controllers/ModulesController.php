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
        $module = $request->module;


        if (isset($module)) {

            // URL  modules lowercase only the first carecter is uper case
            // removed all  . and withe spaces
            // need to implemente auto
            // need to transform to OOP
            $module = str_replace('.', '', $module);
            $module = Str::lower($module);
            $module = ucfirst($module);


            /*
             * switch case to get url modules
             * to be improve to OOP
             */

            switch ($module) {
                case 'Homepagelogin';
                    return $this->Login($request, 'llogin teste ', 200);
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


        } else {


            if (Auth::check()) {


                return view('game');


            } else {


                //return view("game");
                return view('login');
                //return view("data");
                //return view("Carater");
            }


        }


    }


    public function Login(Request $request, $msg = null, $code = null)
    {


        // The user is logged in...

        $users = DB::table('users')->get();

        foreach ($users as $user) {
            // var_dump($user->email);
        }


        if (Auth::check()) {

        }

        //abort(404);


        /*
         * login funtion in order to login the user
         * this is a teste mabye to be improve
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
             * preper statment im place
             * show the error msg
             */

            $msg = 'This Email Is Already Registered!';


        } else {
            /*
             * procide to Register the account
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
