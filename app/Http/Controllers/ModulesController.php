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
use ReCaptcha\RequestMethod\Post;

class ModulesController extends Controller
{


    public function __construct()
    {
    }

    public function Start(Request $request)
    {

        self::DeletePasswordResets();





            if (Auth::check()) {



                //return view('game');
                return view("Carater");



            }elseif(!Auth::check()) {



                $users = DB::table('users')->get();




                //MailGunController::Sendmail("mail@gmail.com");

                //MailGunController::Register('mail@gmail.com');



                //$data   = DB::table('password_resets')->get();










                //return view("game");
                return view('login');
                //return view("data");

            }





    }


    /**
     * Handle various module-related actions based on the request.
     *
     * @param Request $request The HTTP request containing module and action information.
     * @return mixed
     */
    public function Modules(Request $request){

        if (isset($request->module)) {



            $module = $request->module;


            /*
             * this moduler  needs big fix
             * OOP need big improve maybe to a class on its alone
             */


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

              case "Account" and $action ==="create" ;



            


              break;


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

                case 'Account' and $action ==="FooterEndpoint" ;

                /*
                 * todo Repair nedet ASP
                 */

                    $deceasedCharacters = [
                        ["name" => "5.44Room", "cleanName" => "Room", "killDate" => "13/12/2022", "rank" => "Chief", "gender" => 1, "version" => 5.44, "isHallOfFame" => false],
                        ["name" => "5.29Room", "cleanName" => "Room", "killDate" => "22/03/2021", "rank" => "Pickpocket", "gender" => 1, "version" => 5.29, "isHallOfFame" => false],
                        ["name" => "5.19Game", "cleanName" => "Game", "killDate" => "07/01/2020", "rank" => "Chief", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.19Lm", "cleanName" => "Lm", "killDate" => "03/01/2020", "rank" => "Bruglione", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.19Alarm", "cleanName" => "Alarm", "killDate" => "02/01/2020", "rank" => "Bruglione", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.19Emp", "cleanName" => "Emp", "killDate" => "29/12/2019", "rank" => "Bruglione", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.19Caravan", "cleanName" => "Caravan", "killDate" => "27/12/2019", "rank" => "Chief", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.19Room", "cleanName" => "Room", "killDate" => "26/12/2019", "rank" => "Bruglione", "gender" => 1, "version" => 5.19, "isHallOfFame" => false],
                        ["name" => "5.3Lm", "cleanName" => "Lm", "killDate" => "01/01/1970", "rank" => "Empty-suit", "gender" => 1, "version" => 5.3, "isHallOfFame" => false],
                        ["name" => "5.43Room", "cleanName" => "Room", "killDate" => "01/01/1970", "rank" => "Pickpocket", "gender" => 1, "version" => 5.43, "isHallOfFame" => false]
                    ];

                    // Organize the response structure
                    $responseData = [
                        "settings" => [],
                        "dead" => $deceasedCharacters,
                        "messages" => []
                    ];

                    // Return the response in JSON format
                    return response()->json($responseData)->send();



                    break;














                case 'Account' and $action === "AliveUserEndpoint" ;


                    $data = [
                        "bLoading" => false,
                        "bNewUser" => true,
                    ];

                return   response()->json($data)->send();


                    break;



                case 'Homepage.Reset' and $action ==="hof" ;



                    $data = [
                        "hof" => [
                        ],
                        "release_date" => "2025-03-04 12:00:00",
                        "extension" => "com.pt",
                        "stats" => [
                            "total" => 305,
                            "alive" => 233,
                            "dead" => 72,
                            "online" => 1
                        ],
                        "title" => "PARABÉNS <br/>AOS VENCEDORES!",
                        "subtitle" => "do último round"
                    ];
                    return   response()->json($data)->send();

                    exit();

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
