<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class GameControler extends Controller
{


    /*
     * This Is the Game Version
     */
        public static function GameVersion(){
            $version = '5.8.0.5';
            Return $version;
        }




        public static function ServerGameInfo(){

            /*
             * ?module=Homepage.Reset&action=hof
             */

            $data = [
                "hof" => [
                ],
                "release_date" => "2025-03-04 12:00:00",
                "extension" => "uk",
                "stats" => [
                    "total" => 305,
                    "alive" => 233,
                    "dead" => 72,
                    "online" => 1
                ],
                "title" => "PARABÉNS <br/>AOS VENCEDORES!",
                "subtitle" => "do último round"
            ];

            Return $data;

        }







        public static function ServviceMenu(){


            $data = array(
                'menu' => array(
                    array(
                        'name' => 'mobile-omerta',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-mobile-omerta',
                        'icon' => 'icon_other',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'data-collapsed' => false,
                                'data-viewport' => 'mobile',
                                'class' => 'link'
                            ),
                            'text' => 'Omerta',
                            'html' => '<a href="#" data-viewport="mobile" class="link"><span class="icon icon_other">&nbsp;</span>Omerta</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'mobile-omerta-support',
                                'priority' => 10,
                                'parent' => 'mobile-omerta',
                                'selected' => false,
                                'item_class' => 'menu-item-mobile-omerta-support',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Donate.Methods',
                                        'icon' => false,
                                        'title' => 'Support Omerta',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'data-viewport' => 'mobile',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Support Omerta',
                                    'html' => '<a href="/?module=Donate.Methods" title="Support Omerta" target="main" data-viewport="mobile" class=" sublink">Support Omerta</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'mobile-omerta-ticket',
                                'priority' => 10,
                                'parent' => 'mobile-omerta',
                                'selected' => false,
                                'item_class' => 'menu-item-mobile-omerta-ticket',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/tickets/',
                                        'icon' => false,
                                        'title' => 'Need Help?',
                                        'confirm' => false,
                                        'target' => '_blank',
                                        'data-viewport' => 'mobile',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Help',
                                    'html' => '<a href="/tickets/" title="Need Help?" target="_blank" data-viewport="mobile" class=" sublink">Help</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'mobile-omerta-logout',
                                'priority' => 20,
                                'parent' => 'mobile-omerta',
                                'selected' => false,
                                'item_class' => 'menu-item-mobile-omerta-logout',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/logout.php',
                                        'icon' => false,
                                        'title' => 'Logout',
                                        'confirm' => false,
                                        'target' => '_top',
                                        'data-viewport' => 'mobile',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Logout',
                                    'html' => '<a href="/logout" title="Logout" target="_top" data-viewport="mobile" class=" sublink">Logout</a>'
                                ),
                                'children' => array()
                            )
                        )
                    ),
                    array(
                        'name' => 'account',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-account',
                        'icon' => 'icon_account',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'data-collapsed' => false,
                                'class' => 'link'
                            ),
                            'text' => 'Game',
                            'html' => '<a href="#" class="link"><span class="icon icon_account">&nbsp;</span>Game</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'account-launchpad',
                                'priority' => 10,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-launchpad',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/information.php',
                                        'icon' => false,
                                        'title' => 'Your \'starting point\' to everything in Omerta',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'A',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'My Account',
                                    'html' => '<a href="/?module=information" title="Your &#039;starting point&#039; to everything in Omerta" target="main" accesskey="A" class=" sublink">My Account</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-myprogress',
                                'priority' => 10,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-myprogress',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=RankRequirements',
                                        'icon' => false,
                                        'title' => 'Check your account progress',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'My Progress',
                                    'html' => '<a href="/?module=RankRequirements" title="Check your account progress" target="main" class=" sublink">My Progress</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-milestones',
                                'priority' => 12,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-milestones',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Milestone',
                                        'icon' => false,
                                        'title' => 'Redeem your milestones',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'M',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Milestones',
                                    'html' => '<a href="/?module=Milestone" title="Redeem your milestones" target="main" accesskey="M" class=" sublink">Milestones</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-settings',
                                'priority' => 30,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-settings',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/profile.php',
                                        'icon' => false,
                                        'title' => false,
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'My Settings',
                                    'html' => '<a href="/profile.php" target="main" class=" sublink">My Settings</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-chat-settings',
                                'priority' => 40,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-chat-settings',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=User.ChatSettings',
                                        'icon' => false,
                                        'title' => false,
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Chat Settings',
                                    'html' => '<a href="/?module=User.ChatSettings" target="main" class=" sublink">Chat Settings</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-overview',
                                'priority' => 50,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-overview',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Account',
                                        'icon' => false,
                                        'title' => false,
                                        'confirm' => false,
                                        'target' => '_top',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Account Overview',
                                    'html' => '<a href="/?module=Account" target="_top" class=" sublink">Account Overview</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'account-verification',
                                'priority' => 1000,
                                'parent' => 'account',
                                'selected' => false,
                                'item_class' => 'menu-item-account-verification',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Account.Verification',
                                        'icon' => false,
                                        'title' => false,
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Account Verification',
                                    'html' => '<a href="/?module=Account.Verification" target="main" class=" sublink">Account Verification</a>'
                                ),
                                'children' => array()
                            )
                        )
                    ),
                    array(
                        'name' => 'crimes',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-crimes',
                        'icon' => 'icon_crime',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'id' => 'menu_crime',
                                'data-collapsed' => false,
                                'class' => 'link'
                            ),
                            'text' => 'Crime',
                            'html' => '<a href="#" id="menu_crime" class="link"><span class="icon icon_crime">&nbsp;</span>Crime</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'crimes-crimes',
                                'priority' => 10,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-crimes',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Crimes',
                                        'icon' => false,
                                        'title' => 'Do a crime every 90 seconds to gain rank and money',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'C',
                                        'data-menu' => 'crime',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Crimes',
                                    'html' => '<a href="/?module=Crimes" title="Do a crime every 90 seconds to gain rank and money" target="main" accesskey="C" data-menu="crime" class=" sublink">Crimes</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-cars',
                                'priority' => 20,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-cars',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Cars',
                                        'icon' => false,
                                        'title' => 'Steal a car every 300 seconds to get some wheels',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'N',
                                        'data-menu' => 'car',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Nick a car',
                                    'html' => '<a href="/?module=Cars" title="Steal a car every 300 seconds to get some wheels" target="main" accesskey="N" data-menu="car" class=" sublink">Nick a car</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-lackeys',
                                'priority' => 30,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-lackeys',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Lackeys',
                                        'icon' => false,
                                        'title' => 'Hire lackeys to do your dirty work for you',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Lackeys',
                                    'html' => '<a href="/?module=Lackeys" title="Hire lackeys to do your dirty work for you" target="main" class=" sublink">Lackeys</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-jail',
                                'priority' => 40,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-jail',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/jail.php',
                                        'icon' => false,
                                        'title' => 'See who is spending time in jail and try to bust them out',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'J',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Jail',
                                    'html' => '<a href="/jail.php" title="See who is spending time in jail and try to bust them out" target="main" accesskey="J" class=" sublink">Jail</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-smuggling',
                                'priority' => 50,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-smuggling',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/smuggling.php',
                                        'icon' => false,
                                        'title' => 'Buy and sell booze and narcotics to gain lots of rank and money',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'S',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Smuggling',
                                    'html' => '<a href="/smuggling.php" title="Buy and sell booze and narcotics to gain lots of rank and money" target="main" accesskey="S" class=" sublink">Smuggling</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-travel',
                                'priority' => 60,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-travel',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Travel',
                                        'icon' => false,
                                        'title' => 'Travel to other cities',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'T',
                                        'data-menu' => 'travel',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Travel',
                                    'html' => '<a href="/?module=Travel" title="Travel to other cities" target="main" accesskey="T" data-menu="travel" class=" sublink">Travel</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-group',
                                'priority' => 70,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-group',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=GroupCrimes',
                                        'icon' => false,
                                        'title' => 'A collection of crimes you can do with other players',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'G',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Group Crimes',
                                    'html' => '<a href="/?module=GroupCrimes" title="A collection of crimes you can do with other players" target="main" accesskey="G" class=" sublink">Group Crimes</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'crimes-kill',
                                'priority' => 80,
                                'parent' => 'crimes',
                                'selected' => false,
                                'item_class' => 'menu-item-crimes-kill',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Detectives',
                                        'icon' => false,
                                        'title' => 'Kill other players and check who tried to kill you',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Kill',
                                    'html' => '<a href="/?module=Detectives" title="Kill other players and check who tried to kill you" target="main" class=" sublink">Kill</a>'
                                ),
                                'children' => array()
                            )
                        )
                    ),
                    array(
                        'name' => 'communication',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-communication',
                        'icon' => 'icon_communication',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'id' => 'menu_communication',
                                'data-collapsed' => false,
                                'class' => 'link'
                            ),
                            'text' => 'Communication',
                            'html' => '<a href="#" id="menu_communication" class="link"><span class="icon icon_communication">&nbsp;</span>Communication</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'communication-inbox',
                                'priority' => 10,
                                'parent' => 'communication',
                                'selected' => false,
                                'item_class' => 'menu-item-communication-inbox',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Mail&action=inbox',
                                        'icon' => false,
                                        'title' => 'Read your mail, send messages to other players',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'M',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Mail',
                                    'html' => '<a href="/?module=Mail&amp;action=inbox" title="Read your mail, send messages to other players" target="main" accesskey="M" class=" sublink">Mail</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'communication-chat',
                                'priority' => 20,
                                'parent' => 'communication',
                                'selected' => false,
                                'item_class' => 'menu-item-communication-chat',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Chat',
                                        'icon' => false,
                                        'title' => 'Enables you to chat on IRC if you don\'t have your own IRC client installed. IRC is important to communicate with other players and make new friends',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Chat',
                                    'html' => '<a href="/?module=Chat" title="Enables you to chat on IRC if you don&#039;t have your own IRC client installed. IRC is important to communicate with other players and make new friends" target="main" class=" sublink">Chat</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'communication-forum',
                                'priority' => 30,
                                'parent' => 'communication',
                                'selected' => false,
                                'item_class' => 'menu-item-communication-forum',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/forums/index.php',
                                        'icon' => false,
                                        'title' => 'A forum to communicate with other players',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Forum',
                                    'html' => '<a href="/forums/index.php" title="A forum to communicate with other players" target="main" class=" sublink">Forum</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'communication-sms',
                                'priority' => 40,
                                'parent' => 'communication',
                                'selected' => false,
                                'item_class' => 'menu-item-communication-sms',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/sms.php',
                                        'icon' => false,
                                        'title' => 'Send SMS, set up SMS alerts',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'SMS Messaging',
                                    'html' => '<a href="/sms.php" title="Send SMS, set up SMS alerts" target="main" class=" sublink">SMS Messaging</a>'
                                ),
                                'children' => array(
                                    array(
                                        'name' => 'sms-send',
                                        'priority' => 100,
                                        'parent' => 'communication-sms',
                                        'selected' => false,
                                        'item_class' => 'menu-item-sms-send',
                                        'icon' => false,
                                        'element' => array(
                                            'attributes' => array(
                                                'href' => '/sms/send.php',
                                                'icon' => false,
                                                'title' => false,
                                                'confirm' => false,
                                                'target' => 'main',
                                                'class' => ' sublink'
                                            ),
                                            'text' => 'Send SMS',
                                            'html' => '<a href="/sms/send.php" target="main" class=" sublink">Send SMS</a>'
                                        ),
                                        'children' => array()
                                    ),
                                    array(
                                        'name' => 'sms-settings',
                                        'priority' => 100,
                                        'parent' => 'communication-sms',
                                        'selected' => false,
                                        'item_class' => 'menu-item-sms-settings',
                                        'icon' => false,
                                        'element' => array(
                                            'attributes' => array(
                                                'href' => '/sms/options.php',
                                                'icon' => false,
                                                'title' => false,
                                                'confirm' => false,
                                                'target' => 'main',
                                                'class' => ' sublink'
                                            ),
                                            'text' => 'SMS Settings',
                                            'html' => '<a href="/sms/options.php" target="main" class=" sublink">SMS Settings</a>'
                                        ),
                                        'children' => array()
                                    ),
                                    array(
                                        'name' => 'sms-credits',
                                        'priority' => 100,
                                        'parent' => 'communication-sms',
                                        'selected' => false,
                                        'item_class' => 'menu-item-sms-credits',
                                        'icon' => false,
                                        'element' => array(
                                            'attributes' => array(
                                                'href' => '/sms/credits.php',
                                                'icon' => false,
                                                'title' => false,
                                                'confirm' => false,
                                                'target' => 'main',
                                                'class' => ' sublink'
                                            ),
                                            'text' => 'SMS Credits',
                                            'html' => '<a href="/sms/credits.php" target="main" class=" sublink">SMS Credits</a>'
                                        ),
                                        'children' => array()
                                    )
                                )
                            )
                        )
                    ),
                    array(
                        'name' => 'city',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-city',
                        'icon' => 'icon_city',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'id' => 'travel_cityname',
                                'data-collapsed' => false,
                                'class' => 'link'
                            ),
                            'text' => '<span id="travel_city_text">Philadelphia</span>',
                            'html' => '<a href="#" id="travel_cityname" class="link"><span class="icon icon_city">&nbsp;</span><span id="travel_city_text">Philadelphia</span></a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'city-map',
                                'priority' => 10,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-map',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=City',
                                        'icon' => false,
                                        'title' => 'See city map',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'City Map',
                                    'html' => '<a href="/?module=City" title="See city map" target="main" class=" sublink">City Map</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-house',
                                'priority' => 20,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-house',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=House&action=mine',
                                        'icon' => false,
                                        'title' => 'See my accomodation in this city',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Accomodation',
                                    'html' => '<a href="/?module=House&amp;action=mine" title="See my accomodation in this city" target="main" class=" sublink">Accomodation</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-bank',
                                'priority' => 30,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-bank',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/bank.php',
                                        'icon' => false,
                                        'title' => 'Send and receive money, gain interest',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Bank',
                                    'html' => '<a href="/bank.php" title="Send and receive money, gain interest" target="main" class=" sublink">Bank</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-hospital',
                                'priority' => 40,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-hospital',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Bloodbank',
                                        'icon' => false,
                                        'title' => 'Buy blood and recover your health',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Hospital',
                                    'html' => '<a href="/?module=Bloodbank" title="Buy blood and recover your health" target="main" class=" sublink">Hospital</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-market',
                                'priority' => 50,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-market',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Shop&action=display_section&id=0',
                                        'icon' => false,
                                        'title' => 'Buy and sell items, blood & bodyguards',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Market',
                                    'html' => '<a href="/?module=Shop&amp;action=display_section&amp;id=0" title="Buy and sell items, blood &amp; bodyguards" target="main" class=" sublink">Market</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-bulletfactory',
                                'priority' => 60,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-bulletfactory',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/bullets2.php',
                                        'icon' => false,
                                        'title' => 'Buy bullets',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'accesskey' => 'B',
                                        'data-menu' => 'bullets',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Bullets',
                                    'html' => '<a href="/bullets2.php" title="Buy bullets" target="main" accesskey="B" data-menu="bullets" class=" sublink">Bullets</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-garage',
                                'priority' => 60,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-garage',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/garage.php',
                                        'icon' => false,
                                        'title' => 'All the cars you own',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Garage',
                                    'html' => '<a href="/garage.php" title="All the cars you own" target="main" class=" sublink">Garage</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-gamble',
                                'priority' => 70,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-gamble',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/gambling/gambling.php',
                                        'icon' => false,
                                        'title' => 'Play casino games, the lottery or scratchcards',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Gambling',
                                    'html' => '<a href="/gambling/gambling.php" title="Play casino games, the lottery or scratchcards" target="main" class=" sublink">Gambling</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-races',
                                'priority' => 80,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-races',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/races.php',
                                        'icon' => false,
                                        'title' => 'Race your cars against other players',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Car races',
                                    'html' => '<a href="/races.php" title="Race your cars against other players" target="main" class=" sublink">Car races</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'city-obay',
                                'priority' => 90,
                                'parent' => 'city',
                                'selected' => false,
                                'item_class' => 'menu-item-city-obay',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Obay',
                                        'icon' => false,
                                        'title' => 'Buy and sell things from other players via auctions',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Obay',
                                    'html' => '<a href="/?module=Obay" title="Buy and sell things from other players via auctions" target="main" class=" sublink">Obay</a>'
                                ),
                                'children' => array()
                            )
                        )
                    ),
                    array(
                        'name' => 'family',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-family',
                        'icon' => 'icon_family',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'id' => 'menu_family',
                                'class' => 'link'
                            ),
                            'text' => 'Family',
                            'html' => '<a href="#" id="menu_family" class="link"><span class="icon icon_family">&nbsp;</span>Family</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'family-recruit',
                                'priority' => 10,
                                'parent' => 'family',
                                'selected' => false,
                                'item_class' => 'menu-item-family-recruit',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/family_recruitment.php',
                                        'icon' => false,
                                        'title' => 'A list of families with openings for new members',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Recruitment Centre',
                                    'html' => '<a href="/family_recruitment.php" title="A list of families with openings for new members" target="main" class=" sublink">Recruitment Centre</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'family-create',
                                'priority' => 20,
                                'parent' => 'family',
                                'selected' => false,
                                'item_class' => 'menu-item-family-create',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Family&action=create',
                                        'icon' => false,
                                        'title' => 'Create a Family',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Family Creation',
                                    'html' => '<a href="/?module=Family&amp;action=create" title="Create a Family" target="main" class=" sublink">Family Creation</a>'
                                ),
                                'children' => array()
                            )
                        )
                    ),
                    array(
                        'name' => 'other',
                        'priority' => 100,
                        'parent' => false,
                        'selected' => false,
                        'item_class' => 'menu-item-other',
                        'icon' => 'icon_other',
                        'element' => array(
                            'attributes' => array(
                                'href' => '#',
                                'title' => false,
                                'confirm' => false,
                                'id' => 'menu_other',
                                'data-collapsed' => false,
                                'class' => 'link'
                            ),
                            'text' => 'Other',
                            'html' => '<a href="#" id="menu_other" class="link"><span class="icon icon_other">&nbsp;</span>Other</a>'
                        ),
                        'children' => array(
                            array(
                                'name' => 'other-networking',
                                'priority' => 10,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-networking',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/honorpoints.php',
                                        'icon' => false,
                                        'title' => 'Show your respect for other players, and join up with friends to become more powerful',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Networking',
                                    'html' => '<a href="/honorpoints.php" title="Show your respect for other players, and join up with friends to become more powerful" target="main" class=" sublink">Networking</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-lawyer',
                                'priority' => 20,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-lawyer',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/wedding/index.php',
                                        'icon' => false,
                                        'title' => 'Marry or divorce other players',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Matrimonial',
                                    'html' => '<a href="/wedding/index.php" title="Marry or divorce other players" target="main" class=" sublink">Matrimonial</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-hitlist',
                                'priority' => 30,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-hitlist',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Hitlist&action=list',
                                        'icon' => false,
                                        'title' => 'Shows you players with a price on their head',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Hitlist',
                                    'html' => '<a href="/?module=Hitlist&amp;action=list" title="Shows you players with a price on their head" target="main" class=" sublink">Hitlist</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-pillory',
                                'priority' => 40,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-pillory',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Pillory',
                                        'icon' => false,
                                        'title' => 'Cheaters and other scum are placed on pillory. You can throw tomatoes at them until they die',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Pillory',
                                    'html' => '<a href="/?module=Pillory" title="Cheaters and other scum are placed on pillory. You can throw tomatoes at them until they die" target="main" class=" sublink">Pillory</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-arcade',
                                'priority' => 50,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-arcade',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/arcade.php',
                                        'icon' => false,
                                        'title' => 'Some fun games to play',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Arcade',
                                    'html' => '<a href="/arcade.php" title="Some fun games to play" target="main" class=" sublink">Arcade</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-statistics',
                                'priority' => 60,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-statistics',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => '/?module=Statistics&action=global_stats',
                                        'icon' => false,
                                        'title' => 'Various statistics and information about the world of Omerta',
                                        'confirm' => false,
                                        'target' => 'main',
                                        'class' => ' sublink'
                                    ),
                                    'text' => 'Statistics',
                                    'html' => '<a href="/?module=Statistics&amp;action=global_stats" title="Various statistics and information about the world of Omerta" target="main" class=" sublink">Statistics</a>'
                                ),
                                'children' => array()
                            ),
                            array(
                                'name' => 'other-quicklook',
                                'priority' => 1000,
                                'parent' => 'other',
                                'selected' => false,
                                'item_class' => 'menu-item-other-quicklook',
                                'icon' => false,
                                'element' => array(
                                    'attributes' => array(
                                        'href' => false,
                                        'icon' => false,
                                        'title' => false,
                                        'confirm' => false,
                                        'isHtml' => true,
                                        'class' => ' sublink'
                                    ),
                                    'text' => '<div class=quicklook><span>Quick lookup</span><br/>
    <form action="./user.php" method="GET" onsubmit="" target="_self">
        <input name="page" type="hidden" value="user"/>
        <input name="nick" size="15" type="text" />
    </form>
</div>',
                                    'html' => '<div class=quicklook><span>Quick lookup</span><br/>
    <form action="./user.php" method="GET" onsubmit="" target="_self">
        <input name="page" type="hidden" value="user"/>
        <input name="nick" size="15" type="text" />
    </form>
</div>'
                                ),
                                'children' => array()
                            )
                        )
                    )
                ),
                'name' => 'menu'
            );




            return $data;

        }





        public static function ServicesAccounts(){
            $data = array(
                'data' => array(
                    'user_status' => 2,
                    'version' => '5.8.0.5',
                    'release' => '3573 days ago',
                    'city' => array(
                        'id' => '5',
                        'name' => 'Philadelphia'
                    ),
                    'family' => '0',
                    'extra' => array(
                        'mail' => false
                    ),
                    'cooldowns' => array(
                        'crime' => 0,
                        'car' => 0,
                        'travel' => 0,
                        'bullets' => 0,
                        'hospital' => 0
                    ),
                    'progressbars' => array(
                        'rankprogress' => 0,
                        'health' => '100',
                        'killskill' => '0.00',
                        'bustskill' => 0,
                        'raceform' => 0,
                        'honorpoints' => '0'
                    ),
                    'messages' => array(
                        'inbox' => array(),
                        'alert' => array(),
                        'admin' => array(),
                        'news' => array(
                            array(
                                'date' => '1743740097',
                                'format_date' => '18 hours ago',
                                'date_string' => '04/04',
                                'link' => '/forums/view-topic.php?id=396671',
                                'sbj' => '#Changes'
                            ),
                            array(
                                'date' => '1743740097',
                                'format_date' => '18 hours ago',
                                'date_string' => '04/04',
                                'link' => '/forums/view-topic.php?id=396671',
                                'sbj' => '#Changes'
                            )
                        ),
                        'counter' => array(
                            'inbox' => 0,
                            'alert' => 0,
                            'admin' => 0
                        )
                    ),
                    'money' => '500',
                    'bank' => '0',
                    'bullets' => '0',
                    'rankname' => 'Empty-suit',
                    'tickets' => array(),
                    'bugs' => array(),
                    'widgets' => array(
                        'eog' => false
                    ),
                    'users' => array(
                        array(
                            'id' => '7',
                            'name' => 'Fahr',
                            'level' => '12000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '171209',
                            'name' => 'Patryk',
                            'level' => '12000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '237064',
                            'name' => 'Kcode',
                            'level' => '12000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '962698',
                            'name' => 'Ian',
                            'level' => '15000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-491b97a2b3770b551be77b138e471c4c08756853.png?ts=1742773697',
                            'rank' => 'Picciotto',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '966605',
                            'name' => 'Brando',
                            'level' => '14000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Delivery Boy',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '966633',
                            'name' => 'Bonkers',
                            'level' => '7000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '966657',
                            'name' => 'Mjws',
                            'level' => '10500',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '966866',
                            'name' => 'Life',
                            'level' => '11000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '966886',
                            'name' => 'Theexorcist',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '966899',
                            'name' => 'Dark',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Bruglione',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '966994',
                            'name' => 'Lilybidd',
                            'level' => '7000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '968813',
                            'name' => 'Paul',
                            'level' => '12000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '969639',
                            'name' => 'Hyperborean',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Picciotto',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '970199',
                            'name' => 'Orion',
                            'level' => '11000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Delivery Boy',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '970758',
                            'name' => 'Navarra',
                            'level' => '9000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-4611ffc1f2e2c52405e4ac50cd8b24f39276b33d.png?ts=1743605640',
                            'rank' => 'Shoplifter',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '970776',
                            'name' => 'Killerchic',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Delivery Girl',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '971912',
                            'name' => 'Exploit',
                            'level' => '6000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '971922',
                            'name' => 'Maniacc',
                            'level' => '7000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '977938',
                            'name' => 'Greenmaster',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-3fb413c7d39f26d02843ed939de543ad926f25cb.png?ts=1742773845',
                            'rank' => 'Thief',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '983590',
                            'name' => 'Nyx',
                            'level' => '7000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '987528',
                            'name' => 'Znau',
                            'level' => '6000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-19a6b9f0ba11d58af5095f1c0efec379e5c1aeae.png?ts=1743200234',
                            'rank' => 'Delivery Boy',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '988152',
                            'name' => 'Dessy',
                            'level' => '5000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '989537',
                            'name' => 'Pokemon',
                            'level' => '6000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b1866070c97754c0675c75e4b4a243975921f9b8.png?ts=1742774643',
                            'rank' => 'Shoplifter',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '990279',
                            'name' => 'Tinkywinky',
                            'level' => '6000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '990779',
                            'name' => 'Jenn',
                            'level' => '6000',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-1c39aaa186339a37f6b642cdbdfb43d0291ecada.png?ts=1742773599',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '992820',
                            'name' => 'Donna',
                            'level' => '10000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '993766',
                            'name' => 'Roland',
                            'level' => '3000',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994072',
                            'name' => 'Benito',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994075',
                            'name' => 'Newversion',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-593820d0501a79b6b1f79f583f7983a94da517e6.png?ts=1743160442',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '8',
                                'name' => 'The boys',
                                'avatar' => '/family_image.php?family=8&size=medium',
                                'city_id' => '7',
                                'city' => 'Corleone',
                                'role' => 'Member',
                                'capo_name' => 'Numb',
                                'capo_id' => '994566',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994077',
                            'name' => 'Frox',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994079',
                            'name' => 'Salt',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-46975b571ec979b2d1bac385f8f4630bff0a544a.png?ts=1742817972',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994081',
                            'name' => 'Adamim',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994082',
                            'name' => 'Crayton',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994088',
                            'name' => 'Spoon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c3bf386b585c1b57157ec46d9f3646908a26cca4.png?ts=1742813501',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994089',
                            'name' => 'Fork',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-e2c448c2da778eb9740ee08b0cc63b3501cc15f5.png?ts=1742813492',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994090',
                            'name' => 'Knife',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-3a6d51fc2dd00fd5be5297841a177dfc76ed7f53.png?ts=1742812989',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994092',
                            'name' => 'Potato',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c86b38bd8b80eadea38762931dbf466d8f792787.png?ts=1742813496',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994093',
                            'name' => 'Candle',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-2b5fad747748fef2582ce4daf5a92b1d3ffe1e6f.png?ts=1742813498',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994095',
                            'name' => 'Chicken',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-be78d995e656cbe8b81c1c999dd0185f6ae69ddb.png?ts=1742812991',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994096',
                            'name' => 'Wine',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-2993e8c112be20e110ef8e269ba565879bf3c7c2.png?ts=1742812994',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994098',
                            'name' => 'Ee',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994099',
                            'name' => 'Av',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-da7071916a96422bcc442a98cfc1cce951323027.png?ts=1742852353',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994100',
                            'name' => 'Ivar',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-0fda3ecf7acf816805cd23c289b983699fcdd7ac.png?ts=1742800642',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994103',
                            'name' => 'Drogba',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-8c8a12ed17f0f926c49380cfb4db1d6b5e9a8df5.png?ts=1743498313',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994104',
                            'name' => 'Mihmandar',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994106',
                            'name' => 'Guler',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-51aa103de2354965865b704e67e216cba5e9282c.png?ts=1742963474',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994107',
                            'name' => 'Fusion',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-dc6f0d7205fe888fe3c734b09309c746571c9d19.png?ts=1743364923',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Leia',
                                'capo_id' => '994217',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994112',
                            'name' => 'Jazeem',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-fd7fa5fe21d219c68c0ad5feb50a379978f2d05b.png?ts=1742800655',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994119',
                            'name' => 'Tenhadainler',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994120',
                            'name' => 'Perdition',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-803df82109c923d92858a295637329e0a570bbe7.png?ts=1742800651',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994123',
                            'name' => 'Animafia',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-f4aebde4d77c61ce1b7a8806ff565a41dd5302c8.png?ts=1743505946',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994124',
                            'name' => 'Sushi',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994130',
                            'name' => 'Win',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-11701de2dbc9e0a062c8b27c8d9e513c9a747eff.png?ts=1742885325',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994138',
                            'name' => 'Angus',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-91be3f16187cb0bf3ee6eab8de5b3b5ac5b33d81.png?ts=1742791450',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Harnham',
                                'capo_id' => '994590',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994139',
                            'name' => 'Burrito',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-406c46462305412ba907d2b8793b2635e0d51b53.png?ts=1743502054',
                            'rank' => 'Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Consiglieri',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994142',
                            'name' => 'Slimshady',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994153',
                            'name' => 'Samy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-32c669c401f8cef086d0ecf028ea52d82c9e2fb7.png?ts=1743023742',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994154',
                            'name' => 'Qua',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994155',
                            'name' => 'Kenny',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994160',
                            'name' => 'Alparslan',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-4827f8d79144ca8af029c5bec778df50b4303bde.png?ts=1743090280',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994162',
                            'name' => 'Lobster',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994163',
                            'name' => 'Bacon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994165',
                            'name' => 'Dass',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994167',
                            'name' => 'Protesto',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-634523361dea1113882dde77bde219f727e4ec57.png?ts=1742830277',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Hayalet',
                                'capo_id' => '994677',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994170',
                            'name' => 'Byzas',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-fcc8f3419a4edb72a97eb6065a27d45d803e68cd.png?ts=1742802768',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Hayalet',
                                'capo_id' => '994677',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994171',
                            'name' => 'Abyss',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994175',
                            'name' => 'Samurai',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994176',
                            'name' => 'Zana',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-999fe415c518eb8fb61ccafb3e474b73f3eebf57.png?ts=1743479052',
                            'rank' => 'Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994179',
                            'name' => 'Dv',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-db76517bc23b818964dece78b34526a36896e244.png?ts=1742773816',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Sottocapo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994181',
                            'name' => 'Havoc',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-10d1a056c0bf804b251fe56b80eefe8a8dc8acc2.png?ts=1743062088',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994184',
                            'name' => 'Beef',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994189',
                            'name' => 'Toxic',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Felix',
                                'capo_id' => '994367',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994191',
                            'name' => 'Brusca',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994193',
                            'name' => 'Mewtwo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-ba4f298b9dfcd268f6bc24807f0bf74607120a60.png?ts=1742831006',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Ivar',
                                'capo_id' => '994100',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994194',
                            'name' => 'Thern',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '11',
                                'name' => 'Lidl',
                                'avatar' => '/family_image.php?family=11&size=medium',
                                'city_id' => '2',
                                'city' => 'Palermo',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '660033'
                            )
                        ),
                        array(
                            'id' => '994195',
                            'name' => 'Bombardini',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-806f3f50f9c0eee0fe70e64df7875a8c58c18a6c.png?ts=1743181064',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994196',
                            'name' => 'Bad',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994203',
                            'name' => 'Qball',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-d1d9d01fe12f1fce745b436b6ed0c4d8da7ed028.png?ts=1742819361',
                            'rank' => 'Swindler',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Typical',
                                'capo_id' => '994610',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994205',
                            'name' => 'Pablito',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994206',
                            'name' => 'Lux',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994210',
                            'name' => 'Brutus',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-e771bda95e219a687b3cf079cd0b04fbf83ede17.png?ts=1743633877',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994211',
                            'name' => 'Baryosa',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-05cdc2d6f9b3f38c517376605831bbd56de4cece.png?ts=1742844139',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994212',
                            'name' => 'Janey',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Shoplifter',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994215',
                            'name' => 'Donk',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Ivar',
                                'capo_id' => '994100',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994217',
                            'name' => 'Leia',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-4cbd1ed673efabbc6e0dd46292deff6efba22b94.png?ts=1743498315',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994219',
                            'name' => 'Beowulf',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-6d6b0b5a5cba99221b9a4e6f7524d2fa49b86da6.png?ts=1742884591',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Typical',
                                'capo_id' => '994610',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994220',
                            'name' => 'Arthur',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-5858a3cbfc17594baf1045ceb16413a13d782054.png?ts=1742800644',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994221',
                            'name' => 'Mammon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-123c6128f2f54519df0848d659605f414840b6e8.png?ts=1743623549',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Sottocapo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994223',
                            'name' => 'Cuttlefish',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-cb1386cd4e676342656c828a6f940ccecc3fe0e4.png?ts=1742814128',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994224',
                            'name' => 'Aragon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994225',
                            'name' => 'Apocalypse',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '8',
                                'name' => 'The boys',
                                'avatar' => '/family_image.php?family=8&size=medium',
                                'city_id' => '7',
                                'city' => 'Corleone',
                                'role' => 'Member',
                                'capo_name' => 'Numb',
                                'capo_id' => '994566',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994226',
                            'name' => 'Stavnsborg',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-f8aaa42448ba870da56775fbb95d814448365736.png?ts=1743034484',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994228',
                            'name' => 'Extory',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-677061b4697156fdedae7d4c340d65e2f9cb34c4.png?ts=1742777985',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Consiglieri',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994231',
                            'name' => 'Mewa',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-3e52d2a3d42b3b47095909cd53e3fd9d483d7884.png?ts=1742786701',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994232',
                            'name' => 'Valliants',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Thief',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994233',
                            'name' => 'Pompaci',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-d3d6e3363a2bde8a0e738079b901fa337511051d.png?ts=1743598110',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994237',
                            'name' => 'Pesadelo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-27720a2e3fc3ddf91187442f1b6933cab13c22ce.png?ts=1743382723',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994238',
                            'name' => 'Bryan',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994245',
                            'name' => 'Pro',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Jiyan',
                                'capo_id' => '994628',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994246',
                            'name' => 'Mighty',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994254',
                            'name' => 'Yordam',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-de1ad08595c6796370ffa62279dbc6a7aaae9527.png?ts=1742882933',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994257',
                            'name' => 'Gojcha',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-8dfe352dd4de3610911ebc144691388c1846a6f6.png?ts=1742826179',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Harnham',
                                'capo_id' => '994590',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994258',
                            'name' => 'Blackwind',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994260',
                            'name' => 'Fin',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994262',
                            'name' => 'Amu',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994264',
                            'name' => 'Tank',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-ddf8e98e715b1220b2c999202408218eac99e32e.png?ts=1742803447',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Felix',
                                'capo_id' => '994367',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994266',
                            'name' => 'Pepperoni',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994268',
                            'name' => 'Cube',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994270',
                            'name' => 'Scsb',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-422091d024348c4d0e22ea0f4c48d85b057dba74.png?ts=1742779743',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994271',
                            'name' => 'End',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-d263f0cffe1163b8e12c7e4faa627e602cfd5f5b.png?ts=1742893012',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994272',
                            'name' => 'Misterdy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-49cd8e8a8a7f1fdac776806a11ee0227f844bafe.png?ts=1743292125',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994277',
                            'name' => 'Plate',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-e6d28e4914faa8d62ef7dc1e124558cdcd655078.png?ts=1742815652',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994280',
                            'name' => 'Maddemon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994281',
                            'name' => 'Maviduman',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-15cb82084af0e386047759af37d8432e5b60164b.png?ts=1743187568',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994282',
                            'name' => 'Freud',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-7a9bb6201307a01aa0e48a7167851c76cbda927b.png?ts=1743623547',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994285',
                            'name' => 'Dionisos',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994288',
                            'name' => 'Elessar',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994305',
                            'name' => 'Moon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Hayalet',
                                'capo_id' => '994677',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994329',
                            'name' => 'Trader',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c30dd20ec845b1addddb4187be7ed62d84a609be.png?ts=1743410580',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994332',
                            'name' => 'Vito',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994336',
                            'name' => 'Durin',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b312923c23809eeaf0309c92b62358160fd13258.png?ts=1742774205',
                            'rank' => 'Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994338',
                            'name' => 'Moss',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994339',
                            'name' => 'Diyarpala',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-63141f989ab668b76d96a69fd596fc6957bc8b6b.png?ts=1743062750',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Sottocapo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994340',
                            'name' => 'Tony',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994343',
                            'name' => 'Zifir',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-7e19386ed36cb9991625febd4f5681fd2406dc29.png?ts=1742864262',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994345',
                            'name' => 'Darda',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994347',
                            'name' => 'Sunflower',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994349',
                            'name' => 'Sansarsalvo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-0f425057ab69ddda83a63bf8f0a87bfc1011e874.png?ts=1742809658',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994350',
                            'name' => 'Lexo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-2248cb5a404f0d65ef3b5794fa42cc2c460bbd43.png?ts=1742809552',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994352',
                            'name' => 'Nostradamus',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-e4cacd2103f67f114f9da1c203e13dbef7b32ea2.png?ts=1743090282',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994353',
                            'name' => 'Geh',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-fbc0ab49cf0ab07d5d663091ac1b628f453b412b.png?ts=1742833783',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994354',
                            'name' => 'Rekkles',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994355',
                            'name' => 'Wrath',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994356',
                            'name' => 'Tears',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994358',
                            'name' => 'Lilith',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-45121e3d16581df732953d48aafc548f8c46595d.png?ts=1743793572',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994359',
                            'name' => 'White',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-df0bc35e6e056d50c628653def34a444ee1d42e3.png?ts=1743612676',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994361',
                            'name' => 'Kmz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-ce7f6c8b9d03bcdb79942565b650bc6651a6ceff.png?ts=1742794589',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994362',
                            'name' => 'Aaron',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994367',
                            'name' => 'Felix',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-a29eca5dd9d42d6d999e65cdfff116e6dfbb1b1f.png?ts=1743454350',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994369',
                            'name' => 'Escobar',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-9cdf7ee12d3dce7eac6970d85528a34db38daa15.png?ts=1742843139',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994377',
                            'name' => 'Furor',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-62c87d310dad968313757d308311908ee272a162.png?ts=1742864260',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994378',
                            'name' => 'Gimli',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-31742ea1b761765425949f7de549f1978b358cf4.png?ts=1743006215',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Sottocapo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994386',
                            'name' => 'Dada',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-caeeb33519e4e4f9d0a12dc4dad67c0b299140ce.png?ts=1742773853',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '8',
                                'name' => 'The boys',
                                'avatar' => '/family_image.php?family=8&size=medium',
                                'city_id' => '7',
                                'city' => 'Corleone',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994387',
                            'name' => 'Clary',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-efcfab99cc2b2a91f120fdc043fa3c5331104723.png?ts=1742804808',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994393',
                            'name' => 'Gufy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-7ef9b2bfd069255b8bdf27f204d4d267aad06889.png?ts=1742824758',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994395',
                            'name' => 'Intake',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '8',
                                'name' => 'The boys',
                                'avatar' => '/family_image.php?family=8&size=medium',
                                'city_id' => '7',
                                'city' => 'Corleone',
                                'role' => 'Member',
                                'capo_name' => 'Numb',
                                'capo_id' => '994566',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994396',
                            'name' => 'Atiba',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994397',
                            'name' => 'Doktor',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Sottocapo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994398',
                            'name' => 'Origi',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994407',
                            'name' => 'Std',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-543c5af728f6211e973073e10f156fc8665fe86b.png?ts=1743457941',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994408',
                            'name' => 'Borat',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-f4e031c00ea08e9f8fa5dcd4e6bbdc769639a8f8.png?ts=1742806292',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994409',
                            'name' => 'Xanka',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-43acc6ad59909f2d93dce9afb9d43380da577153.png?ts=1742818435',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994412',
                            'name' => 'Emilio',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-69a501f567ca031ba08ff1f5a212e65455e46b34.png?ts=1743207279',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994413',
                            'name' => 'Tatum',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-11494b1eb9363181612a1bcb4aa3375ec10bc3fe.png?ts=1743183978',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994414',
                            'name' => 'Jesus',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994417',
                            'name' => 'Mrshooter',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994420',
                            'name' => 'Allame',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-99faefe74b2583c2a7d2c212b2f3558354464f60.png?ts=1742850520',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994422',
                            'name' => 'Achilles',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-fbeb1eb821fd4c45388f578a57a6584048a5733f.png?ts=1742812992',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994425',
                            'name' => 'Alcapone',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994426',
                            'name' => 'Muhalif',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '12',
                                'name' => 'Gece',
                                'avatar' => '/family_image.php?family=12&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Nexsium',
                                'capo_id' => '994549',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994427',
                            'name' => 'Luciano',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b315a0ad670af064c943a924120662bbc209e0d8.png?ts=1743183611',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994429',
                            'name' => 'Artist',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '12',
                                'name' => 'Gece',
                                'avatar' => '/family_image.php?family=12&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Nexsium',
                                'capo_id' => '994549',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994434',
                            'name' => 'Who',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994436',
                            'name' => 'Massaka',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-3fa52cea43e59fde9bafd00ce330c3e76bed7729.png?ts=1743022684',
                            'rank' => 'Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994440',
                            'name' => 'Defkhan',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-a9f13eecadc1a57c58853db4b6ea4cd7a842f351.png?ts=1743287719',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Consiglieri',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994441',
                            'name' => 'Saian',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-90179512751b44d58ebb7d53dc45fe5ac4754165.png?ts=1742850522',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Consiglieri',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994458',
                            'name' => 'Akita',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994461',
                            'name' => 'Beagle',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Lexo',
                                'capo_id' => '994350',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994465',
                            'name' => 'Emmy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994467',
                            'name' => 'Rottweiler',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994484',
                            'name' => 'Testere',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994487',
                            'name' => 'Zia',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b6272b8ceb6869faf5f601b4487e67cdb462d33a.png?ts=1742913542',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994493',
                            'name' => 'Paptircem',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-0726235896bc1ab198fa9ed453fac065968fd757.png?ts=1742905117',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994495',
                            'name' => 'Gokboru',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994499',
                            'name' => 'Chivals',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994503',
                            'name' => 'Sol',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994504',
                            'name' => 'Hades',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-4c2bd7bc90b4dca45e71c69ffabd5d4d259850e7.png?ts=1743633882',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994507',
                            'name' => 'Gakkos',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994508',
                            'name' => 'Henkie',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Harnham',
                                'capo_id' => '994590',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994514',
                            'name' => 'Grok',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Banza',
                                'capo_id' => '994547',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994516',
                            'name' => 'Cupra',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b2c3685cf28f1788a84c3b781d74605a73d12a52.png?ts=1742773887',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994517',
                            'name' => 'Trio',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994518',
                            'name' => 'Sui',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994519',
                            'name' => 'Lessy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994520',
                            'name' => 'Samuel',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994521',
                            'name' => 'Garavel',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Sansarsalvo',
                                'capo_id' => '994349',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994528',
                            'name' => 'Wezzy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-6ffaa93a1873c1f24371b883b8427dbf470db1e6.png?ts=1743363776',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994534',
                            'name' => 'Cachal',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994539',
                            'name' => 'Luffy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-121671ba9ade1e800aa15f620e966ec35a5d1ef7.png?ts=1742943528',
                            'rank' => 'Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994542',
                            'name' => 'Excellent',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994544',
                            'name' => 'Chygrynskiy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-867526d51dc871a732da552669d428e0bae751ec.png?ts=1743594194',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994545',
                            'name' => 'Lemon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-4de1dab8f421fac28d5a8084a64dbac478383b72.png?ts=1743288163',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Pepper',
                                'capo_id' => '994087',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994549',
                            'name' => 'Nexsium',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '12',
                                'name' => 'Gece',
                                'avatar' => '/family_image.php?family=12&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994550',
                            'name' => 'Silvio',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '11',
                                'name' => 'Lidl',
                                'avatar' => '/family_image.php?family=11&size=medium',
                                'city_id' => '2',
                                'city' => 'Palermo',
                                'role' => 'Member',
                                'capo_name' => 'Thern',
                                'capo_id' => '994194',
                                'color' => '660033'
                            )
                        ),
                        array(
                            'id' => '994552',
                            'name' => 'Power',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Felix',
                                'capo_id' => '994367',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994553',
                            'name' => 'Deligucuk',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-110c68ed4cb51d20b5c5860d8e9941288c78d04b.png?ts=1743455486',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994554',
                            'name' => 'Cavus',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '12',
                                'name' => 'Gece',
                                'avatar' => '/family_image.php?family=12&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Nexsium',
                                'capo_id' => '994549',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994558',
                            'name' => 'Niobium',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994559',
                            'name' => 'Alessandro',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-10a73ad04222dd853a65dbd14cca2a338e4433b2.png?ts=1743498311',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994562',
                            'name' => 'Aleksi',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994563',
                            'name' => 'Tango',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994567',
                            'name' => 'Ghuh',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994568',
                            'name' => 'Poke',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994571',
                            'name' => 'Drow',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994573',
                            'name' => 'Yourdad',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Leia',
                                'capo_id' => '994217',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994574',
                            'name' => 'Pikacu',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994575',
                            'name' => 'Jon',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c597ac5707072ee0f7bb72d6721b8a9b1f1ba07a.png?ts=1743279182',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994581',
                            'name' => 'Adonai',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994582',
                            'name' => 'Flow',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Chicken',
                                'capo_id' => '994095',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994584',
                            'name' => 'Panic',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994586',
                            'name' => 'Markeloff',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-8c26f4c4c0e0df801efd5f78699c7b02bc96f9d6.png?ts=1743135912',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994588',
                            'name' => 'Tork',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994590',
                            'name' => 'Harnham',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Capo',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994591',
                            'name' => 'Alaskali',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Emilio',
                                'capo_id' => '994412',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994592',
                            'name' => 'Perez',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994594',
                            'name' => 'Blue',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994597',
                            'name' => 'Psoliogkos',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Zana',
                                'capo_id' => '994176',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994604',
                            'name' => 'Wenom',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994605',
                            'name' => 'Hain',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994606',
                            'name' => 'Eye',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994613',
                            'name' => 'Brisly',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994620',
                            'name' => 'Schukru',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-6fb030c9f44a524ed364e03809ae6e844f8af880.png?ts=1743526804',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994625',
                            'name' => 'Calao',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-ce13a8a664c8c55ece390b64aea7d6a4d63ebb58.png?ts=1742940389',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994626',
                            'name' => 'Orontes',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994627',
                            'name' => 'Dad',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Mihmandar',
                                'capo_id' => '994104',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994630',
                            'name' => 'Onex',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-10b12d606e7ac8ca6e48f3596bc0908aa47048af.png?ts=1742993989',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994631',
                            'name' => 'Ivan',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994637',
                            'name' => 'Mia',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994640',
                            'name' => 'Polo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994644',
                            'name' => 'Marks',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994649',
                            'name' => 'Deci',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994656',
                            'name' => 'Breakfast',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994671',
                            'name' => 'Victor',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994672',
                            'name' => 'Darkyalc',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-7f46bce1588055b9bd779ff0a8a9046a4db42657.png?ts=1743093865',
                            'rank' => 'Pickpocket',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994674',
                            'name' => 'Luxor',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-0d6c85bcda5e222264c1a38ec1e44771975c2429.png?ts=1743582980',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994676',
                            'name' => 'Hum',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994677',
                            'name' => 'Hayalet',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Don',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994685',
                            'name' => 'Noob',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-56c522f8e9ec24d1fb1054bc6e7a05cef3c94149.png?ts=1742905119',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '11',
                                'name' => 'Lidl',
                                'avatar' => '/family_image.php?family=11&size=medium',
                                'city_id' => '2',
                                'city' => 'Palermo',
                                'role' => 'Member',
                                'capo_name' => 'Thern',
                                'capo_id' => '994194',
                                'color' => '660033'
                            )
                        ),
                        array(
                            'id' => '994686',
                            'name' => 'Gog',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994688',
                            'name' => 'Forkas',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994693',
                            'name' => 'Hola',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994694',
                            'name' => 'Ruth',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Durin',
                                'capo_id' => '994336',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994695',
                            'name' => 'Kanka',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994696',
                            'name' => 'Clittler',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994697',
                            'name' => 'Nama',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994703',
                            'name' => 'Nora',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994712',
                            'name' => 'Mokali',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Massaka',
                                'capo_id' => '994436',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994717',
                            'name' => 'Jin',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994719',
                            'name' => 'Skatopsyxos',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Pickpocket',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994724',
                            'name' => 'Bigbabol',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-8f72a9031a98d8a49a1898313ee8c2da666bcf49.png?ts=1742789366',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994729',
                            'name' => 'As',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c40099985e2eb3c94b9c298c88dcb017d4550401.png?ts=1743062748',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Consiglieri',
                                'capo_name' => null,
                                'capo_id' => '0',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994731',
                            'name' => 'Letty',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-47f8ce4da0ad8008177248b0da630479f9d7f039.png?ts=1742774641',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994736',
                            'name' => 'Bella',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994738',
                            'name' => 'Bulletproof',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Thief',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994739',
                            'name' => 'Hugo',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994740',
                            'name' => 'Heroiq',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-bc5e942e3aa0a932821a8808faa013e21b51c51b.png?ts=1743512394',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Felix',
                                'capo_id' => '994367',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994742',
                            'name' => 'Giglia',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '8',
                                'name' => 'The boys',
                                'avatar' => '/family_image.php?family=8&size=medium',
                                'city_id' => '7',
                                'city' => 'Corleone',
                                'role' => 'Member',
                                'capo_name' => 'Numb',
                                'capo_id' => '994566',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994750',
                            'name' => 'Mami',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994752',
                            'name' => 'Dondm',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-a244c4e8e6f21d22a4d460a8fdcbe16809e59a0c.png?ts=1742806279',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Typical',
                                'capo_id' => '994610',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994754',
                            'name' => 'Chullage',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-1dd3dc8f750f3a21eddca12eda7e8c5deb548b28.png?ts=1742838864',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Wine',
                                'capo_id' => '994096',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994760',
                            'name' => 'Costello',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-31b5238a1243df7833808222b62a7d92ee315c7a.png?ts=1743502053',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Tatum',
                                'capo_id' => '994413',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994763',
                            'name' => 'Lucky',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994768',
                            'name' => 'Erayy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Hayalet',
                                'capo_id' => '994677',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994769',
                            'name' => 'Chitterlings',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-886acd24b91a5cc3b0dad08b564dec1f88fbea35.png?ts=1742807043',
                            'rank' => 'Local Chief',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '4',
                                'name' => 'Dinner',
                                'avatar' => '/family_image.php?family=4&size=medium',
                                'city_id' => '3',
                                'city' => 'New York',
                                'role' => 'Member',
                                'capo_name' => 'Knife',
                                'capo_id' => '994090',
                                'color' => 'ff9900'
                            )
                        ),
                        array(
                            'id' => '994770',
                            'name' => 'Resin',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Leia',
                                'capo_id' => '994217',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994777',
                            'name' => 'Granat',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-bf87eda252c8609ef8b0a8c342652e4502e4ecf5.png?ts=1743520085',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994785',
                            'name' => 'Dominic',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-77b42d4b8a03b9a19a93663f0bce5a61ded61d00.png?ts=1742774639',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994789',
                            'name' => 'Smok',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994806',
                            'name' => 'Sins',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-1f8331862228bd40bc73dfc0c83ac6fec7f42a44.png?ts=1743426975',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Mighty',
                                'capo_id' => '994246',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '994811',
                            'name' => 'Whip',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Adonai',
                                'capo_id' => '994581',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994813',
                            'name' => 'Bozz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-bb7635e793a952c6edae594550fed06347c8be3e.png?ts=1742995089',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '3',
                                'name' => 'Ayyas',
                                'avatar' => '/family_image.php?family=3&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Gokboru',
                                'capo_id' => '994495',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994814',
                            'name' => 'Tyrion',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Typical',
                                'capo_id' => '994610',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994815',
                            'name' => 'Guy',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994820',
                            'name' => 'Jessie',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-fd1626b8dc0b4720542e70bfd08e73709b3b4184.png?ts=1743582981',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994838',
                            'name' => 'Queen',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Ivar',
                                'capo_id' => '994100',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994843',
                            'name' => 'Regime',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-77f2232ad8481edb679f578306cf95c019e7e7cd.png?ts=1743526806',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '1',
                                'name' => 'Corvo',
                                'avatar' => '/family_image.php?family=1&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Felix',
                                'capo_id' => '994367',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994862',
                            'name' => 'Inidrabmob',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '5',
                                'name' => 'Moria',
                                'avatar' => '/family_image.php?family=5&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Balin',
                                'capo_id' => '994279',
                                'color' => 'ff0033'
                            )
                        ),
                        array(
                            'id' => '994868',
                            'name' => 'Maynama',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Pickpocket',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994870',
                            'name' => 'Black',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Hayalet',
                                'capo_id' => '994677',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '994877',
                            'name' => 'Xyz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994878',
                            'name' => 'Hpa',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994879',
                            'name' => 'Yts',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '994896',
                            'name' => 'Thor',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994901',
                            'name' => 'Pumpalica',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-b4df55024d0b20e59185f8bfa7995252fb125d7a.png?ts=1743444964',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '6',
                                'name' => 'Morphine',
                                'avatar' => '/family_image.php?family=6&size=medium',
                                'city_id' => '4',
                                'city' => 'Las Vegas',
                                'role' => 'Member',
                                'capo_name' => 'Ivar',
                                'capo_id' => '994100',
                                'color' => '006600'
                            )
                        ),
                        array(
                            'id' => '994905',
                            'name' => 'Guevara',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994907',
                            'name' => 'Mrvengeance',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Nostradamus',
                                'capo_id' => '994352',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '994917',
                            'name' => 'Aslan',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994918',
                            'name' => 'Kirve',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994939',
                            'name' => 'Moga',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-0ebf78a2fe9cabf754beaebfb1b584c8492408ae.png?ts=1743023744',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994943',
                            'name' => 'Wohaaaz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '994960',
                            'name' => 'Smiz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Local Chief',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Win',
                                'capo_id' => '994130',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '994976',
                            'name' => 'Barrastinha',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Shoplifter',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '994984',
                            'name' => 'Michigant',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '7',
                                'name' => 'Revenge',
                                'avatar' => '/family_image.php?family=7&size=medium',
                                'city_id' => '5',
                                'city' => 'Philadelphia',
                                'role' => 'Member',
                                'capo_name' => 'Banza',
                                'capo_id' => '994547',
                                'color' => '6600cc'
                            )
                        ),
                        array(
                            'id' => '995042',
                            'name' => 'Pacific',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995067',
                            'name' => 'Noobish',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Pickpocket',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '995099',
                            'name' => 'Lin',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995101',
                            'name' => 'Diablox',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995113',
                            'name' => 'Invite',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995137',
                            'name' => 'Famous',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995145',
                            'name' => 'Lure',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Assassin',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Drogba',
                                'capo_id' => '994103',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '995152',
                            'name' => 'Mkgam',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 2,
                            'family' => array(
                                'id' => '9',
                                'name' => 'Erebor',
                                'avatar' => '/family_image.php?family=9&size=medium',
                                'city_id' => '6',
                                'city' => 'Baltimore',
                                'role' => 'Member',
                                'capo_name' => 'Jiyan',
                                'capo_id' => '994628',
                                'color' => 'ccff00'
                            )
                        ),
                        array(
                            'id' => '995174',
                            'name' => 'Castle',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-f043ca515a2e936f6c670cd19cd3e627f1164633.png?ts=1743421592',
                            'rank' => 'Empty-suit',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '995176',
                            'name' => 'Sam',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995177',
                            'name' => 'Litego',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Swindler',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995181',
                            'name' => 'Kasifoglu',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-db734830f705e082ea0eace214095a05d7e99fb0.png?ts=1743598111',
                            'rank' => 'Mobster',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995183',
                            'name' => 'Kong',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 2,
                            'family' => false
                        ),
                        array(
                            'id' => '995192',
                            'name' => 'Qqqq',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995206',
                            'name' => 'Abba',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-1a875411931ea03c54e41e8078a7cd0217acaf68.png?ts=1743638693',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995208',
                            'name' => 'Steven',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 0,
                            'family' => array(
                                'id' => '2',
                                'name' => 'Silenzio',
                                'avatar' => '/family_image.php?family=2&size=medium',
                                'city_id' => '0',
                                'city' => 'Detroit',
                                'role' => 'Member',
                                'capo_name' => 'Havoc',
                                'capo_id' => '994181',
                                'color' => '000000'
                            )
                        ),
                        array(
                            'id' => '995214',
                            'name' => 'Celeste',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995227',
                            'name' => 'Tanny',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Ramon',
                                'capo_id' => '994129',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '995236',
                            'name' => 'Game',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995245',
                            'name' => 'Tobias',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995250',
                            'name' => 'Grace',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995256',
                            'name' => 'Ales',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995262',
                            'name' => 'Bana',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Soldier',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995271',
                            'name' => 'Fenix',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 1,
                            'family' => array(
                                'id' => '10',
                                'name' => 'Sureagles',
                                'avatar' => '/family_image.php?family=10&size=medium',
                                'city_id' => '1',
                                'city' => 'Chicago',
                                'role' => 'Member',
                                'capo_name' => 'Ramon',
                                'capo_id' => '994129',
                                'color' => '333399'
                            )
                        ),
                        array(
                            'id' => '995273',
                            'name' => 'Kntr',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Mobster',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995280',
                            'name' => 'Schutze',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Picciotto',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995291',
                            'name' => 'Veldora',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/uploads/profile/com-c2a597bffb02ff064eac26f83da9aa1654cca0bf.png?ts=1743797190',
                            'rank' => 'Associate',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995294',
                            'name' => 'Vicco',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Picciotto',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995295',
                            'name' => 'Hypenut',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Delivery Boy',
                            'dc_status' => 1,
                            'family' => false
                        ),
                        array(
                            'id' => '995296',
                            'name' => 'Capz',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995297',
                            'name' => 'Kezra',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995298',
                            'name' => 'Zuma',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995299',
                            'name' => 'Tella',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Associate',
                            'dc_status' => 0,
                            'family' => false
                        ),
                        array(
                            'id' => '995300',
                            'name' => 'Sa',
                            'level' => '0',
                            'avatar' => '//omerta-cdn.com/omerta_placeholder.png',
                            'rank' => 'Empty-suit',
                            'dc_status' => 0,
                            'family' => false
                        )
                    ),
                    'city_gift' => false,
                    'milestones' => array()
                ),
                'code' => 0,
                'time' => time(),
                'debug' => array()
            );
            return $data;
        }



}
