<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Hash;




//FacebookController
class FacebookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToFacebook()
    {
        //echo "gg"; exit;
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleFacebookCallback()
    {
        try {

            $user = Socialite::driver('facebook')->user();

            //dd($user);

            $finduser = User::where('email', $user->email)->first();





            if($finduser){

                Auth::login($finduser);

                if(!$finduser->facebook_id){

                    $account =Auth::user();
                    $account->facebook_id = $user->id;
                    $account->save();
                }


                if(!$finduser->name){

                    $account =Auth::user();
                    $account->name = $user->name;
                    $account->save();
                }


                return redirect()->intended('/');

            }else{
                $newUser = User::updateOrCreate(['email' => $user->email],[
                        'name'=>$user->name,
                        'facebook_id'=> $user->id,
                        'email'=> $user->email,
                    'password'=>Hash::make(RegisterController::Passgen()),
                    ]);

                Auth::login($newUser);

                return redirect()->intended('/');
            }

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
