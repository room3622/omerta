<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Http\Controllers\MailGunController;
use Illuminate\View\View;
use League\Flysystem\Config;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RecoverController;
use Illuminate\Support\Carbon;
use ReCaptcha\RequestMethod\Post;
use App\Models\User;
use App\Models\Characters;
use function PHPUnit\Framework\isEmpty;

class ModulesController extends Controller
{
    /**
     * Constructor.
     */
    public function __construct()
    {
    }

    /**
     * Start method.
     *
     * @param Request $request
     * @return View
     */
    public function start(Request $request)
    {
        self::deletePasswordResets();

        if (Auth::check()) {
            $user = User::with('alive')->where('id', Auth::id())->first();

            if ($user->alive) {
                return view('game', compact('user'));
            } elseif (isEmpty($user->alive)) {
                return view("Carater");
            }
        } elseif (!Auth::check()) {
            return view('login');
        }
    }

    /**
     * Handle various module actions based on the request parameters.
     *
     * @param Request $request
     * @return Response
     */
    public function modules(Request $request)
    {
        if (isset($request->module)) {
            $module = $this->formatModule($request->module);
            $action = $request->action;

            return $this->handleModuleAction($module, $action, $request);
        }
    }

    /**
     * Format the module name.
     *
     * @param string $module
     * @return string
     */
    private function formatModule(string $module)
    {
        $module = str_replace('.', '', $module);
        $module = Str::lower($module);
        $module = ucfirst($module);

        return $module;
    }

    /**
     * Handle the module action.
     *
     * @param string $module
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleModuleAction(string $module, string $action, Request $request)
    {
        switch ($module) {
            case "Account":
                return $this->handleAccountAction($action, $request);
            case 'Services.Security':
                return $this->handleSecurityAction($action, $request);
            case 'Homepagelogin':
                return $this->handleLoginAction($action, $request);
            case 'Homepageregister':
                return $this->handleRegisterAction($request);
            case 'Servicesaccount':
                return $this->handleServicesAccountAction($request);
            case 'Account':
                return $this->handleAccountFooterAction($action, $request);
            case "Servicesmenu":
                return $this->handleServicesMenuAction($request);
            case 'Account':
                return $this->handleAliveUserAction($action, $request);
            case 'Homepage.Reset':
                return $this->handleResetAction($action, $request);
            case "Information":
                return view("information");
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the account action.
     *
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleAccountAction(string $action, Request $request)
    {
        switch ($action) {
            case "create":
                // Handle create action
                break;
            case "FooterEndpoint":
                $data = AccountController::AccountGameHistory();
                return response()->json($data)->send();
            case "AliveUserEndpoint":
                $data = Character::CharacterChecks();
                return response()->json($data)->send();
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the security action.
     *
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleSecurityAction(string $action, Request $request)
    {
        switch ($action) {
            case "check":
                $data2 = array(
                    'status' => 'OK',
                );

                $data = array(
                    'data' => $data2,
                    'code' => 0,
                    'time' => time(),
                    'debug' => array()
                );
                header('Content-Type: application/json; charset=utf-8');
                return response()->json($data);
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the login action.
     *
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleLoginAction(string $action, Request $request)
    {
        switch ($action) {
            case "Forgottenpassword":
                return RecoverController::RecoverPassword($request);
            case "RecoverPassword":
                return RecoverController::FinalReset($request);
            default:
                return $this->login($request);
        }
    }

    /**
     * Handle the register action.
     *
     * @param Request $request
     * @return Response
     */
    private function handleRegisterAction(Request $request)
    {
        return $this->register($request, 'resgister Moduler', 200);
    }

    /**
     * Handle the services account action.
     *
     * @param Request $request
     * @return Response
     */
    private function handleServicesAccountAction(Request $request)
    {
        $data = GameControler::ServicesAccounts();
        return response()->json($data)->send();
    }

    /**
     * Handle the account footer action.
     *
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleAccountFooterAction(string $action, Request $request)
    {
        switch ($action) {
            case "FooterEndpoint":
                $data = AccountController::AccountGameHistory();
                return response()->json($data)->send();
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the services menu action.
     *
     * @param Request $request
     * @return Response
     */
    private function handleServicesMenuAction(Request $request)
    {
        $data = GameControler::ServviceMenu();
        return response()->json($data)->send();
    }

    /**
     * Handle the alive user action.
     *
     * @param string $action
     * @param Request $request
     * @return Response
     */
    private function handleAliveUserAction(string $action, Request $request)
    {
        switch ($action) {
            case "AliveUserEndpoint":
                $data = Character::CharacterChecks();
                return response()->json($data)->send();
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the reset action.
     *
     * @param string $action
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    private function handleResetAction(string $action, Request $request)
    {
        switch ($action) {
            case "hof":
                $data = GameControler::ServerGameInfo();
                return response()->json($data)->send();
            default:
                return $this->handleDefaultAction($request);
        }
    }

    /**
     * Handle the default action.
     *
     * @param Request $request
     * @return Response
     */
    private function handleDefaultAction(Request $request)
    {
        return $this->login($request, 'This module dont existes! ', 200);
    }

    /**
     * Login method.
     *
     * @param Request $request
     * @param string $msg
     * @param int $code
     * @return Response
     */
    public function login(Request $request, string $msg = '', int $code = 0)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->pass])) {
            $request->session()->regenerate();

            return RenderController::Render($request, '', $code);
        } else {
            return RenderController::Render($request, $msg, $code);
        }
    }

    /**
     * Register method.
     *
     * @param Request $request
     * @param string $msg
     * @param int $code
     * @return Response
     */
    public function register(Request $request, string $msg, int $code)
    {
        if (DB::table('users')->where('email', $request->mail)->exists()) {
            $msg = 'This Email Is Already Registered!';
        } else {
            return RegisterController::Register($request);
        }

        return RenderController::Render($request, $msg, $code);
    }

    /**
     * Delete password resets method.
     *
     * @param int $minutes
     */
    public static function deletePasswordResets(int $minutes = 60)
    {
        DB::table('password_resets')
            ->where('created_at', '<', Carbon::now()->subMinutes($minutes)->toDateTimeString())
            ->delete();
    }
}
