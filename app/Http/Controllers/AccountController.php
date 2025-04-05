<?php

namespace App\Http\Controllers;

use App\Models\Account;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Controllers\ModulesController;
use App\Models\User;


class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){



        app(ModulesController::class)->Modules($request);
      return  app(ModulesController::class)->Start($request);



    }








    public static function AccountGameHistory()
    {


       $users =  User::with('CharactersHistory')->where('id', Auth::id())->get();



        $deceasedCharacters = array();
       foreach ($users[0]->CharactersHistory as $user):

           $json_decoded = json_decode($user->character_history );
           $deceasedCharacters[] = array('name' => $user->name,"cleanName"=>"" ,"killDate"=>"" , "rank" => "", "gender" => "", "version" => "", "isHallOfFame" => false);
       endforeach;




        // Organize the response structure
        $responseData = [
            "settings" => [],
            "dead" => $deceasedCharacters,
            "messages" => []
        ];

        return $responseData;

    }


























    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return $request->all();
        exit();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        /*
         * URL Modules post only
         *
         */


     return  app(ModulesController::class)->Modules($request);

    }

    /**
     * Display the specified resource.
     *
     * @param Account $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Account $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Account $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Account $account)
    {
        return $request->all();
        exit();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Account $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        //
    }
}
