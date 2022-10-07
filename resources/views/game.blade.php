<!DOCTYPE html>
<html>
<head>

    <title id="pageTitle">{{ config('app.name') }}</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0">

    <!-- IMPORT ALL FONTS -->
    <link rel="stylesheet" href="/assets/omerta/fonts/main.css"/>

    <!-- FA 3.2.1 & 4.1.0 -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- jQuery 1.8.1 -->
    <script src="/assets/vendor/old/jquery.min.js"></script>
    <!--[if IE]>
    <script src="/assets/vendor/extra/excanvas/excanvas.js"></script><![endif]-->

    <link href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" rel="stylesheet"/>
    <script src="/assets/vendor/old/jquery-ui.min.js"></script>

    <!-- SWFObject 2.1 -->
    <script src="/assets/vendor/old/swfobject.js"></script>

    <!-- Modernizer -->
    <script src="/assets/vendor/old/modernizr.min.js"></script>


    <!-- Socket.IO v1.7.3 -->
    <script src="/assets/vendor/old/socket.io.min.js"></script>

    <!-- Google Recaptcha -->
    <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>

    <!-- Omerta -->
    <link href="{{ asset('/assets/5.7.3.0/layout.css' )}}" rel="stylesheet"/>

    <link rel="stylesheet" href="/static/css/game/kill/style.css?v=5.7.3.0">
    <script src="{{ asset('/assets/5.7.3.0/layout.js' )}}" type="text/javascript"></script>



    <script type="text/javascript">
        // After every file downloaded ready
        $(window).load(function () {

            // Server info
            omerta.game = "com.pt";
            omerta.version = "5.7.3.0";
            omerta.gameTitle = 'Omerta (PT/BR)';

            omerta.chat.nick = 'Room';
            omerta.chat.server = 'https://realtime.barafranca.com';
            omerta.character.info.level(0);
            omerta.chat.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoiY29tLnB0IiwiaWQiOiIzMDYzOTkiLCJuYW1lIjoiUm9vbSIsImNpdHkiOiIwIiwiZmFtaWx5X2lkIjoiMCIsImxhc3RyYW5rIjoiU3dpbmRsZXIifQ.WzVilx3-_kWRWJbS117K1bZ-8l23TKtEO5dd2e9n3Z4';
            omerta.chat.banned(false);


            // Loader
            omerta.GUI.loader.load(['./ajax_banner.php', './?module=Services.Menu', './information.php', './ajax_info.php']);

        });
    </script>


</head>
<body data-bind="style: {backgroundImage: omerta.GUI.container.getBackground}" class="body-pt ext-com-pt">

<!-- SPLASH SCREENS -->
<div id="splash_loading"
     style="display: block; position: fixed; top: 0; left: 0; bottom: 0; width: 100%; height: 100%; overflow: hidden; background: #000000 url('//static.barafranca.com/assets/omerta/main/layout/assets/img/splash/loading/com.pt-background.jpg') no-repeat center center; background-size: cover; z-index: 99999;">
    <div>


        <div style="text-shadow: 0 1px 1px rgba(0,0,1,.3); position: absolute; top: 65%; left: 50%; width: 300px; margin-left: -120px; text-align: left;">
            <div style="float: left; font-size: 25px; width: 50px; padding-right: 15px; text-align: right;"><i
                    class="fa fa-spinner fa-spin"></i></div>
            <div style="float: left; color: white;">
                <b>Omerta</b> is <span id="dialog_loading_info" style="color: ">loading necessary files</span><br>
                <span style="font-size: 10px;">COM.PT - Ronda #79
                    <br></span>
            </div>
        </div>

    </div>
</div>
<!-- EO SPLASH -->


<!-- Entire page -->
<div id="wrapper">

    <!-- HEADER -->
    <header>
        <div id="omerta_logo" data-viewport="desktop"></div>

        <div id="omerta_bar">

            <ul class="mobile-top-nav nav-left">
                <li class="main-top-item pull-left"><a id="mobileMenu" href="javascript:void(0)"
                                                       class="top-button menu">&nbsp;</a></li>
            </ul>

            <ul class="mobile-top-nav nav-right">

                <li id="mobile-top-item-donate" class="pull-right"><a class="link-button" href="/?module=Donate.Methods">Doar</a></li>
                <li id="mobile-top-item-city" class="top-item pull-right"><a class="top-button map" href="/?module=City">&nbsp;</a></li>
                <li id="mobile-top-item-alerts" class="top-item pull-right"><a class="top-button alerts" href="/?module=Mail" data-wtype="alert" data-counts="0">
                        <span class="sidebar-bubble-number hidden">0</span></a></li>
                <li id="mobile-top-item-mail" class="top-item pull-right"><a class="top-button messages" href="/?module=Mail" data-wtype="inbox" data-counts="0">
                        <span class="sidebar-bubble-number hidden">0</span></a></li>

                <li id="mobile-top-item-mail-alert" class="top-item pull-right"><a class="top-button messages" href="/?module=Mail" data-wtype="inbox-alert" data-counts="0">
                        <span class="sidebar-bubble-number hidden">0</span></a></li>
                <li id="mobile-top-item-clock" class="top-item pull-right top-item-clock"><span class="omerta-mobile-clock" id="omerta_clock_mobile"></span></li>
            </ul>

            <ul class="top-nav" data-viewport="desktop">
                <li class="pull-left news">

                    <a id="latest-new-link" href="#"></a>
                    <a id="latest-extra-link" href="#"></a>                </li>

                <li class="pull-right icon" style="padding-right: 52px;">
                    <a title="Logout"
                       data-bind="click: function() { window.location = '/logout'; }"
                       href="javascript:void(0)"><i class="icon icon-power-off"></i></a>
                </li>

                <li class="pull-right icon">
                    <a data-wtype="tickets" class="help-button" href="#" id="bubble-tickets">
                        <span class="sidebar-bubble-number hidden">0</span>
                        <i class="icon icon-question-sign"></i>
                    </a>
                </li>

                <li class="pull-right bar"><a id="displayText">
                        <span class="__cf_email__" data-cfemail="f3819c9c9ec0c5c1c1b3949e929a9fdd909c9e">[email&#160;protected]</span>
                    </a>
                </li>

                <li class="pull-right bar bar-support"><a
                        href="/?module=Donate.Methods">Ajuda o Omerta</a></li>
            </ul>
        </div>



        <!-- ko with: widgets.EOG -->
        <div data-viewport="desktop" id="countdown" data-bind="visible: showWidget(), css: {'counting-down': !showWinner(), 'show-winner': showWinner(), 'show-loader': showLoader()},event: { mouseover: enableDetails, mouseout: disableDetails } ">
            <div data-bind="attr: {class: getClass()}">
                <span class="cityname" data-bind="text: data().cityname"></span>
                <span class="pos-button">
			<span class="button red" data-bind="click: redirectToMap">Mapa de Cidade</span>
		</span>


                <div id="reset-clock-wrapper">
                    <div id="reset-clock"></div>
                </div>

                <div id="reset-text-wrapper" class="reset-winner-text">
                    <h1>WINNER OF<br/> <span>ROUND</span> <span class="reset-round" data-bind="text: roundVersion() + '!'">0</span></h1>
                </div>

                <div id="waiting-winner" class="reset-winner-text">
                    <h1><i class="fa fa-spinner fa-spin"></i></h1>
                </div>
            </div>
            <div class="family" data-bind="click: redirectToFamily">
                <img class="family-logo" data-bind="attr: {src: '/family_image.php?family='+data().family }" alt="Family Avatar">
                <span class="winner" data-bind="text: data().familyname">Família</span>

                <span class="percent percent-logo">
            <img src="/assets/omerta/widgets/EOG/assets/img/winner-item.png">
        </span>

                <span class="percent percent-text" data-bind="text: data().percentage + '%'">100%</span>

            </div>
        </div>

        <div id="mobile-countdown" data-viewport="mobile" class="eog-mobile" data-bind="visible: showWidget()">
            <ul class="mobile-eog-list">
                <li class="eog-reset-clock">
                    <div id="mobile-reset-clock"></div>
                </li>
                <li class="eog-winning">
                    <span class="winner" data-bind="text: data().familyname">Família</span>
                </li>

                <!-- ko if: showWinner() -->
                <li class="eog-winner">
                    <b>WINNER OF <span>ROUND</span> <span class="reset-round" data-bind="text: roundVersion() + '!'">0</span></b><img src="/assets/omerta/widgets/EOG/assets/img/winner-item.png">
                </li>
                <!-- /ko -->

                <!-- ko if: !showWinner() -->
                <li class="eog-percentage"><span class="percent percent-text" data-bind="text: data().percentage + '%'">100%</span></li>
                <!-- /ko -->
            </ul>
        </div>
        <!-- /ko -->

        <div class="Milestones_popup" data-bind="visible: omerta.services.account.isMilestoneWaiting() && omerta.GUI.container.currentModule() != 'Milestone'">
            <div class="Milestones_popup_top"><h3>COLLECT MILESTONE</h3></div>
            <div data-bind="click: omerta.services.account.ignoreWaitingMilestone" class="Milestones_popup_close"><i class="fa fa-times"></i></div>
            <img class="Milestones_popup_icon"src="//static.barafranca.com/assets/omerta/main/account/assets/img/milestone_popup_icon.png" alt="Collect this milestone!">
            <p>
                You have a milestone to collect. <br/>
                Grab it now before the time is up!
            </p>
            <a href='/?module=Milestone' class="btn btn-blue btn-bold btn-big">VIEW MILESTONES</a>
            <div class="Milestones_popup_timer">
                <p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAACCAYAAAA5Ht7JAAAAfklEQVQoU42OQQrCQBAEazYheYEHH+kLvPlYwXN2d9jEbAsT9SbY0PTQDHTZ7XoRv7UBLSwcw4GKUREFKAa5i0wip64FLO7osJxMRXsvjKmarO6jfGrd11ntfH820/b4D4AYPwAOBwDv8UhYgPztUEb2+at0q8yDgztMDU7tBeBXU28KvB6SAAAAAElFTkSuQmCC" />
                    Time left: <span data-bind="html: omerta.services.account.getWaitingMilestoneTimeleft()"></span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAACCAYAAAA5Ht7JAAAAfklEQVQoU42OQQrCQBAEazYheYEHH+kLvPlYwXN2d9jEbAsT9SbY0PTQDHTZ7XoRv7UBLSwcw4GKUREFKAa5i0wip64FLO7osJxMRXsvjKmarO6jfGrd11ntfH820/b4D4AYPwAOBwDv8UhYgPztUEb2+at0q8yDgztMDU7tBeBXU28KvB6SAAAAAElFTkSuQmCC" />
                </p></div>
        </div>
        <div id="game_bar">

            <div class="cooldowns-knob pull-left">
                <div data-cooldown="crime">
                    <input data-knob-timeend="1664978118"
                           data-knob-timetotal="90"
                           value="0"
                           data-width="46"
                           autocomplete="off"
                           data-skin="tron"
                           data-thickness=".1"
                           data-displayinput="false"
                           data-readOnly=true data-fgColor="#2096af" data-bgColor="transparent" shaded="1"
                           shadeColor="#09d0ef"/>
                </div>
                <div data-cooldown="car">
                    <input data-knob-timeend="1664978201"
                           data-knob-timetotal="300"
                           value="0"
                           data-width="46"
                           autocomplete="off"
                           data-skin="tron"
                           data-thickness=".1"
                           data-displayinput="false"
                           data-readOnly=true data-fgColor="#2096af" data-bgColor="transparent" shaded="1"
                           shadeColor="#09d0ef"/>
                </div>
                <div data-cooldown="travel">
                    <input data-knob-timeend="1664960959"
                           data-knob-timetotal="1800"
                           value="0"
                           data-width="46"
                           autocomplete="off"
                           data-skin="tron"
                           data-thickness=".1"
                           data-displayinput="false"
                           data-readOnly=true data-fgColor="#2096af" data-bgColor="transparent" shaded="1"
                           shadeColor="#09d0ef"/>
                </div>
                <div data-cooldown="bullets">
                    <input data-knob-timeend="1664980534"
                           data-knob-timetotal="3600"
                           value="0"
                           data-width="46"
                           autocomplete="off"
                           data-skin="tron"
                           data-thickness=".1"
                           data-displayinput="false"
                           data-readOnly=true data-fgColor="#2096af" data-bgColor="transparent" shaded="1"
                           shadeColor="#09d0ef"/>
                </div>


            </div>
            <div class="cooldowns pull-left">
                <div data-cooldown="crime" class="cooldown"
                     data-title="Commit a crime"
                     data-icd="It's better to calm down a bit before trying another crime."
                     data-iready="Let's get some money!">
                    <div class="cd crime"></div>
                    <div class="label"></div>
                </div>

                <div data-cooldown="car" class="cooldown"
                     data-title="Steal a car"
                     data-icd="Stealing cars is not the same as stealing a little child... Some people might be looking for you, let's wait... "
                     data-iready="There are cars in the zone... Try to steal one!">
                    <div class="cd car"></div>
                    <div class="label"></div>
                </div>

                <div data-cooldown="travel" class="cooldown"
                     data-title="Travel to other city" data-icd="Seems there is no trains"
                     data-iready="Plane is ready!">
                    <div class="cd travel"></div>
                    <div class="label"></div>
                </div>

                <div data-cooldown="bullets" class="cooldown"
                     data-title="Do a bullet deal"
                     data-icd="You just carried some bullets to safehouse, let's calm down..."
                     data-iready="Bullet dealers are there, go get some bullets!">
                    <div class="cd bullets"></div>
                    <div class="label"></div>

                </div>


            </div>
            <div class="shadow">
                <div class="blood"></div>
            </div>

            <!--  Bars under the game bar -->
            <div class="bars-container">

                <!-- City name -->
                <div class="top-city-tab pull-left">
                    <div class="top-city-text"><a href="/?module=City"
                                                  data-bind="text: character.city()">Detroit</a></div>
                </div>

                <!-- Health -->
                <div class="bar-info bar-info-health pull-right" data-bind="click: omerta.GUI.menu.loadMenuItem.bind($data, 'city-hospital', false)">
                    <div class="icon"><img
                            src="//static.barafranca.com/assets/omerta/main/layout/assets/img/barinfo/icon-health.png">
                    </div>
                    <div class="progressbar-container">

                        <div class="progressbar green-bg"
                             data-bind="progressbar: {value: omerta.character.progress.health}"></div>

                    </div>

                    <div class="progressbar-label-wrapper">
                        <div class="progressbar-label-container">
                            Saúde: <span class="green"><span data-bind="text: omerta.character.progress.health"></span>%</span>
                        </div>
                    </div>
                </div>

                <!-- Rank Progress -->
                <div class="bar-info bar-info-rank pull-right" data-bind="click: omerta.GUI.menu.loadMenuItem.bind($data, 'account-launchpad', {oTab: 'actions'})">
                    <div class="rank-container" data-bind="text: omerta.character.progress.rank"></div>
                    <img class="seperator" src="//static.barafranca.com/assets/omerta/main/layout/assets/img/barinfo/seperator.png"
                         align="absmiddle"/>

                    <div class="progressbar-container">

                        <div class="progressbar yellow-bg"
                             data-bind="progressbar: {value: omerta.character.progress.rank_progress}"></div>

                    </div>
                    <div class="progressbar-label-wrapper">
                        <div class="progressbar-label-container">
                            Progresso no estatuto: <span class="yellow"><span data-bind="text: omerta.character.progress.rank_progress"></span>%</span>
                        </div>
                    </div>
                </div>



                <!-- Account Plating -->
                <div class="bar-info bar-info-rank pull-right popup-info" data-title="Account Plating" data-url="/?module=Services.AccountPlating&action=getCooldownInfo">
                    <div class="rank-container"><i class="fa fa-shield"></i> PLATING </div>
                    <img class="seperator" src="//static.barafranca.com/assets/omerta/main/layout/assets/img/barinfo/seperator.png"  align="absmiddle"/>

                    <div class="progressbar-container">
                        <div style="margin-top: -10px; color: #afafa5; text-align: center; text-transform: uppercase; ">
                            <span style='color: #339900; '><i class='fa fa-shield'></i> Very High</span> (100%)
                        </div>
                    </div>
                    <div class="progressbar-label-wrapper">
                        <div class="progressbar-label-container">
                            No Godfather yet <br/><br/>
                            <span class="yellow">Click</span> for more details
                        </div>
                    </div>
                </div>
            </div>

        </div>



        <div id="widget_avatar" data-bind="with: character">
            <div class="container">
                <div class="omerta-widget-avatar-body">

                    <div class="profile-image-wrapper">
                        <div class="profile-image-container">
                            <img data-bind="attr: {src: info.avatar }" src="" alt="Image Profile"/>
                            <div class="info-points">
                                <span>Posição:</span> <strong data-bind="text: progress.position"></strong><br/>
                                <span>Pontos:</span> <strong data-bind="text: progress.leader_points"></strong>
                            </div>
                        </div>
                    </div>

                    <div class="sm-circle-bg house">
                        <a href="/?module=House&action=mine" data-page-title="Accomodations">
                        <span class="sm-circle sm-health">
                            <i class="fa fa-home"></i>
                        </span>
                        </a>
                    </div>

                    <div class="sm-circle-bg transport">
                        <a href="/?module=Shop&action=display_section&id=4" data-page-title="Market">
                        <span class="sm-circle sm-health">
                            <i class="fa fa-car"></i>
                        </span>
                        </a>
                    </div>

                </div>
            </div>


            <div class="info-wrapper">

                <div class="clock-container">
                    <div id="omerta_clock" class="omerta-clock">
                    </div>                </div>

                <div class="char-info-container">
                    <a class="name" href="/user.php?nick=Room">Room</a>
                    <a class="family family-empty" href="/family_recruitment.php">Sem família</a>
                </div>
            </div>
        </div>
        <div id="widget_sidebar">
            <div class="actions">
                <div class="city">
                    <a href="/?module=City" data-page-title="City">
                        <span id="city_gift_notification" class="sidebar-bubble-number hidden"><i
                                class="fa fa-gift"></i></span>
                        <img src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/map.png"/>
                        <img class="hover" src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/map-hover.png"/>

                        <div class="label">Cidade</div>
                    </a>
                </div>
                <div class="mail" data-wtype="inbox">
                    <a href="/?module=Mail" data-page-title="Mail">
                        <span class="sidebar-bubble-number hidden">0</span>
                        <img src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/mail.png"/>
                        <img class="hover" src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/mail-hover.png"/>

                        <div class="label">Correio</div>
                    </a>
                </div>
                <div class="alerts" data-wtype="alert">
                    <a href="/?module=Mail" data-page-title="Mail">
                        <span class="sidebar-bubble-number hidden">0</span>
                        <img src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/alert.png"/>
                        <img class="hover" src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/alert-hover.png"/>

                        <div class="label">Alertas</div>
                    </a>
                </div>

                <div class="chat" data-wtype="chat" data-bind="with: omerta.widgets.Sidepanel">
                    <a href="javascript:void(0)" data-bind="click: UI.events.toggle">
                        <span class="sidebar-bubble-number hidden">0</span>
                        <img src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/chat.png"/>
                        <img class="hover" src="//static.barafranca.com/assets/omerta/widgets/Sidebar/assets/img/icons/chat-hover.png"/>

                        <div class="label">Chat</div>
                    </a>
                </div>

            </div>
            <div id="right-sidebar-content">
            </div>
        </div>
    </header>
    <!-- EO HEADER -->

    <!-- GAME CONTAINER -->
    <div id="container">

        <div id="game_menu" data-bind="with: GUI.menu">
            <ul class="game-menu-list" data-bind="template: {name: 'nodeTemplate', foreach: items, afterRender: afterRenderMenu }"></ul>
        </div>

        <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script id="nodeTemplate" type="text/html">
            <li data-bind="html: $data.element.html, attr: {class: $data.item_class}, click: omerta.GUI.menu.toggleMenuItem"></li>
            <!-- ko if: $data.children.length > 0-->
            <ul data-bind="template: {name: 'nodeTemplate', foreach: $data.children }"></ul>
            <!-- /ko -->
        </script>
        <div id="game_background"></div>

        <div id="mobileActions" data-viewport="mobile">
            <ul>

                <li class=""><a href="/races.php">Races</a></li>
                <li class=""><a href="/?module=GroupCrimes">Group Crimes</a></li>

                <li class="icon-right"><a href="/?module=Chat">Chat</a></li>
                <li class="icon-right">
                    <a id="plating" class="top-button" href="/?module=Services.AccountPlating&action=getCooldownInfo&view=noprompt">
                        <i class="fa fa-shield"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div id="game_wrapper">
            <div id="game_wrapper_container">
                <div class="title">
                    <span class="title-main" data-bind="text: omerta.GUI.container.title"></span>
                    <span class="title-sub" data-bind="text: omerta.GUI.container.subtitle"></span>
                    <span></span>

                    <!-- User profile and settings -->
                    <ul class="account-settings">
                        <li><a href="#" class="fa fa-refresh" onclick='omerta.GUI.container.loadPage(window.location.hash.substr(1)); return false;' title="Reload" style="border: 0;"></a></li>
                        <li><a href="/user.php" class="fa fa-user" title="My Profile" style="border-left: 1px solid #636363;"></a></li>
                        <li><a href="/profile.php" class="fa fa-cog" title="My Settings"></a></li>
                    </ul>


                    <!-- Nav tabs -->
                    <ul class="nav-tabs" id="wrapper-tabs" data-bind="template: {name: 'mainTabsTemplate', foreach: GUI.container.tabs }"></ul>
                    <script id="mainTabsTemplate" type="text/html">
                        <li data-bind="html: $data.element.html, attr: {class: $data.item_class}, css: {active: $parent.GUI.container.selectedTab() == $data.name}, click: $parent.GUI.container.selectTab.bind($data, $data.name)"></li>
                    </script>

                    <!-- Mobile dropdown -->
                    <div class="mobile-tab-container pull-right" data-bind="if: GUI.container.tabs().length > 0">
                        <select id="mobile-tab-select" data-bind="select2: {minimumResultsForSearch: -1, placeholder: '-', allowClear: true, dropdownCssClass: 'mobile-tab-custom-item'}, options: GUI.container.tabs, optionsValue: function(item) {return item.name}, optionsText: function(item) {return item.element.text}, value :GUI.container.doSelectionTab">
                            <!-- Options for tabs -->
                        </select>
                    </div>


                </div>
                <div id="game_loading" style="display:none;">
                    <div>
                        <i class="fa fa-spinner fa-spin" style="font-size: 40px;"></i>
                    </div>
                </div>
                <div id="game_container_wrapper">
                    <div id="game_container" data-bind="attr: {class: omerta.GUI.container.currentModuleClassName()}"></div>
                    <!-- This fake height is used for bullets and money widget, to give a top padding to it-->
                    <!-- ko if: omerta.widgets.CharacterStats.isVisible() -->
                    <div class="fake-height" style="height: 40px; width: 100%;"></div>
                    <!-- /ko -->
                </div>
                <!-- ko if: omerta.widgets.CharacterStats.isVisible -->
                <div id="widget_CharacterStats" class="bottom-infobar"
                     data-bind="with: omerta.character.progress, css: omerta.widgets.CharacterStats.getContainerClass()">

                    <div class="mobile-toggle">
                        <a id="CharacterStats-MobileToggle" data-status="down" href="#" class="fa-stack fa-lg" data-bind="click: omerta.widgets.CharacterStats.toggleSlide">
                            <i class="fa fa-square-o fa-stack-2x"></i>
                            <i data-icon-status-up="fa-angle-double-up" data-icon-status-down="fa-angle-double-down" class="fa fa-angle-double-up fa-stack-1x toggle-icon"></i>
                        </a>
                    </div>

                    <!-- Money status -->
                    <div class="list-container col1">
                        <ul class="list-inline character-stats-wrapper bottom-info-money">
                            <li>
                                <a href="/bank.php" title="Pocket money">
                                    <img src="//static.barafranca.com/assets/omerta/widgets/CharacterStats/assets/img/money-bag.png" alt="money-bag">
                                    <span data-bind="text: '$ ' + number_format(money())">0</span>
                                </a>
                            </li>

                            <li>
                                <a href="/bank.php" title="Bank money">
                                    <img src="//static.barafranca.com/assets/omerta/widgets/CharacterStats/assets/img/money-safe.png"
                                         alt="money-safe">
                                    <span data-bind="text: '$ ' + number_format(bank())">0</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="list-container col2">
                        <!-- Bullets status -->
                        <ul class="list-inline character-stats-wrapper bottom-info-bullets">
                            <li>
                                <a href="/bullets2.php" title="Bullets">
                                    <img src="//static.barafranca.com/assets/omerta/widgets/CharacterStats/assets/img/bullets.png" alt="bullet-img">
                                    <span data-bind="text: number_format(bullets())">0</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
                <!-- /ko -->            </div>
        </div>
    </div>
    <!-- EO GAME CONTAINER -->

    <footer>
    </footer>
</div>

<script type="text/html" id="tpl_chat_message" xmlns="http://www.w3.org/1999/html">
    <div class="user-message-text" data-bind="visible: omerta.chat.blacklist.indexOf($data.getFrom()) === -1, css: { 'msg-hilight': $data.isHilight(), 'msg-removed': $data.removed() }">
            <span style="padding-left: 5px; font-size: 16px;" data-bind="visible: !($data.isSystem()) && omerta.character.info.level() >= 5000">
                <a href="#" data-bind="tipsy: {content: 'Remove message',  gravity: 's'}, click: $data.requestRemove" style="margin-right: 4px;"><i class="fa fa-trash"></i></a>
                <a href="#" data-bind="tipsy: {content: 'Ban user and remove his messages',  gravity: 's'}, click: $data.requestBan"><i class="fa fa-ban"></i></a>
            </span>
        <span class="msg-time" data-bind="visible: $data.isPlayer(), text: $data.getTimeText()"></span>
        <span class="msg-time msg-time-admin" data-bind="visible: $data.isAdmin()">admin</span>
        <span class="msg-time msg-time-mod" data-bind="visible: $data.isMod()">mod</span>
        <a data-bind="visible: !($data.getUserBadgeBackground()), attr: { href: $data.getUserLink}, css: $data.getUserCss, text: $data.getUserText()"></a>
        <a class="msg-author chat-sender label-background" data-bind="visible: $data.getUserBadgeBackground(), attr: { href: $data.getUserLink }, style: { backgroundColor: $data.getUserBadgeBackground(), color: $data.getUserBadgeTextColor }, text: $data.getUserText()"></a>
        <span class="msg-content" data-bind="visible: !($data.isSystem()) && !($data.removed()), css: { 'msg-self': $data.isMe(), 'chat-sender-admin' : $data.isAdmin(), 'chat-sender-mod': $data.isMod() }, style: { color: $data.getUserColor }, text: ': ' + $data.getMessage()" style=""></span>
        <span class="msg-content" data-bind="visible: !($data.isSystem()) && $data.removed(), css: { 'msg-self': $data.isMe(), 'chat-sender-admin' : $data.isAdmin(), 'chat-sender-mod': $data.isMod() }" style="color: darkgrey; opacity: 0.7;">
                <i>(message deleted)</i>
            </span>
        <span class="msg-content chat-sender-system" data-bind="if: $data.isSystem()" style="padding-left: 5px;">
                <i data-bind="visible: $data.isError()" style="color: #f06464;" class="fa fa-exclamation-circle "></i>
                <span data-bind="html:  $data.getMessage()"></span>
            </span>
    </div>
</script>
<div id="omerta_sidepanel" data-bind="with: widgets.Sidepanel">
    <!-- Sidebar header: Friends/Chat/Notifications -->
    <div id="omerta_sidepanel_toggle" data-bind="css: UI.getToggleClass, click: UI.events.toggle"></div>
    <!-- EO Sidebar header -->

    <!-- Sidebar header: Friends/Chat/Notifications -->

    <!-- EO Sidebar header -->

    <!-- Sidebar Chat -->
    <div id="omerta_sidepanel_chat" data-bind="with: omerta.chat">

        <!-- Loading animation -->
        <div class="loading" data-bind="visible: loading() && show()">
            <div>
                <i style="color:white;" class="icon-spinner icon-spin icon-large">&nbsp;</i> A carregar o chat...
            </div>
        </div>
        <!-- EO Loading animation -->

        <!-- Chat container -->
        <div id="omerta_chat" data-bind="visible: !loading() && show()">
            <div class="omerta_chat_widget">
                <div class="omerta_chat_container">
                    <!-- Chat wrapper -->
                    <div class="omerta_chat_wrapper">
                        <div class="omerta_chat_header">
                            <!-- Channel tabs -->
                            <div class="omerta_chat_tabs">
                                <ul class="tabrow" data-bind="foreach: data.getGeneralChat()">
                                    <li>
                                        <a href="#" class="selected" name="tab" data-bind="html: $data.toHTML() || $data.getName()"></a>
                                    </li>
                                </ul>
                            </div>
                            <!-- EO Channel tabs -->

                            <div class="omerta_chat_controls">
                                <a class="selected text pull-left" data-bind="text: data.getGeneralChatTopic()"></a>
                            </div>
                        </div>


                        <div class="room">
                            <!-- Messages -->
                            <div class="msg-container" data-bind="foreach: data.getGeneralChat()">
                                <div data-bind="attr: { 'data-room': $data.getName() }, template: { name: 'tpl_chat_message', foreach: $data.getMessages() }">
                                </div>
                            </div>
                            <!-- EO Messages -->
                        </div>
                    </div>
                </div>
                <div class="omerta_chat_input">
                    <form action="#" method="POST" data-bind="submit: data.sendGeneral, visible: !($data.banned())">
                        <textarea maxlength="254" id="omerta_chat_input_g" class="omerta_chat_input_text" data-lpignore="true" autocomplete="off" placeholder="Escreve uma mensagem..."/></textarea>
                    </form>
                    <p data-bind="visible: $data.banned()" style="color: #f06464; font-weight: bold;padding-left: 5px;">
                        <i class="fa fa-ban"></i> You are banned from chat.</p>
                </div>
            </div>
            <div class="omerta_chat_widget">
                <div class="omerta_chat_container">
                    <!-- Chat wrapper -->
                    <div class="omerta_chat_wrapper">
                        <div class="omerta_chat_header">
                            <!-- Channel tabs -->
                            <div class="omerta_chat_tabs">
                                <ul class="tabrow" data-bind="foreach: data.getSelectableComponents()">
                                    <li>
                                        <a href="#" name="tab" data-bind="click: $parent.data.selected.bind($data, $data.getName()), html: $data.toHTML() || $data.getName(), css: { selected: $parent.data.selected() == $data.getName() }"></a>
                                    </li>
                                </ul>
                            </div>
                            <!-- EO Channel tabs -->

                            <div class="omerta_chat_controls">
                                <a class="selected text pull-left" data-bind="text: data.getActiveTopic()"></a>
                                <!-- <a href="#" data-bind="click: data.controls.scrollBot" title="Scroll até ultima mensagem"><i class="ci icon-chevron-down"></i></a> -->

                                <!-- <a href="#" class="icon pull-right" data-bind="click: data.controls.userlist"><i class="fa fa-list"></i></a> -->
                                <!-- <a href="#" class="icon pull-right" data-bind="click: omerta.chat.utils.toggleChat"><i class="fa fa-times"></i></a> -->
                            </div>
                        </div>


                        <div class="room">
                            <!-- Userlist
                            <div id="userlist" class="user-container">
                                <div data-bind="foreach: data.components">
                                    <div class="chat-active-users" data-bind="visible: $parent.data.selected() == $data.getName(), foreach: $data.getUsers(), attr: { 'data-room': $data.getName() }">
                                        <a class="chat-user" style="font-style: italic;" data-bind="attr: { href: '/user.php?name='+ $data.name }"><span data-bind="attr: {class: $data.className},style: { color: $data.gameContrastColor, backgroundColor: $data.gameColor }, text: $data.gameRole + $data.name"></span></a>
                                    </div>
                                </div>
                            </div>-->
                            <!-- EO Userlist -->
                            <!-- Messages -->
                            <div class="msg-container" data-bind="foreach: data.getSelectableComponents()">
                                <div data-bind="attr: { 'data-room': $data.getName() }, visible: $parent.data.selected() == $data.getName(), template: { name: 'tpl_chat_message', foreach: $data.getMessages() }">
                                </div>
                            </div>
                            <!-- EO Messages -->
                        </div>
                    </div>
                </div>
                <div class="omerta_chat_input">
                    <form action="#" method="POST" data-bind="submit: data.send, visible: !($data.banned())">
                        <textarea type="text" maxlength="254" id="omerta_chat_input" class="omerta_chat_input_text" data-lpignore="true" autocomplete="off" placeholder="Escreve uma mensagem..."/></textarea>
                        <a data-bind="click: utils.scrollChat, visible: UI.newMessage" href="javascript: void(0)" data-wtip="Existem mais mensagens, clica aqui para desceres." style="position:absolute; right: 3px; bottom: 7px; font-size: 17px; text-decoration: none;"><i class="ci icon-exclamation-sign"></i></a>
                    </form>
                    <p data-bind="visible: $data.banned()" style="color: #f06464; font-weight: bold;padding-left: 5px;">
                        <i class="fa fa-ban"></i> You are banned from chat.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- EO Sidebar Chat -->
</div>


<div id="dead-container" class="deadContainerWrapper">
    <div class="dead-body">
        <div class="dead-title">
            <h1>The bastards killed you !</h1>
        </div>
        <div class="dead-skull">
            <img src="//static.barafranca.com/assets/omerta/main/layout/assets/img/skull/skull-big-2.png?r=1" alt="dead skull"/>
        </div>
        <div class="dead-foot">
            <p>Create a new character and ...</p>
            <a href="?module=Account" target="_top" class="btn btn-red" id="revenge-button">Comeback with a vengance!</a>
        </div>
    </div>
</div>
<script type="text/javascript">

    jQuery(document).ready(function ($) {
        // Fix character

        var startDate = new Date();
        startDate.setTime(1664481133 * 1000
        );
        omerta.character.info.name('Room');
        omerta.character.info.gender('1');
        omerta.character.info.avatar("//static.barafranca.com/omerta_placeholder.png");
        omerta.character.info.dc_level(2);
        omerta.character.info.startdate(startDate);
        omerta.character.info.bloodtype('A');
        omerta.character.info.testament('Mutilator');
        omerta.character.progress.health(100);
        omerta.character.progress.rank('Swindler');
        omerta.character.progress.rank_progress(16.55);
        omerta.character.progress.kill_skill(0);
        omerta.character.progress.kill(0);
        omerta.character.progress.leader_points_percentage(98.09);
        omerta.character.progress.leader_points("30");
        omerta.character.progress.position('#191');
        omerta.character.game.city_id('Detroit');
        omerta.character.game.city('Detroit');

        omerta.users([]);
        omerta.roundVersion('79');

        omerta.chat.blacklist = [
        ];

        window.loadKey("");

        // KO
        ko.applyBindings(omerta);


        $(document).on('click', '.boost-container', function () {

            var $element = $(this);

            var $boost  = $element.next('.boost-info'),
                content = $boost.html(),
                url     = $boost.data('url') || false,
                title   = $boost.data('title');

            omerta.plugins.popups.prompt(content, {
                title: title,
                buttons: {Ok: false},
                url: url
            });

        });

        // Open popup for account plating
        $(document).on('click', '.popup-info', function () {

            var $element = $(this);

            omerta.plugins.popups.prompt($element.data('title'), {
                title: $element.data('title'),
                buttons: {Ok: false},
                url: $element.data('url')
            });

        });


    });

</script>





<script>
    window.fwSettings={
        'widget_id':77000004157,
        'locale': 'pt',
    };
    authenticateCallback = function() {
        fetch('/?module=Layout.Main&action=supportLogin')
            .then(response => {
                return response.json();
            })
            .then(data => {
                FreshworksWidget('authenticate', {
                    token: data.data.token
                });
            });
    };
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}();
    FreshworksWidget('setLabels', {
        'pt': {
            banner: "Bem-vindo(a) ao Suporte",
            contact_form: {
                title: "Perguntar &agrave; crew",
                submit: "Enviar",
                confirmation: "Iremos analisar o teu problema o mais cedo poss&iacute;vel",
            },
        }
    });
    FreshworksWidget('authenticate', {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiUm9vbSIsImVtYWlsIjoicm9vbTM2MjJAZ21haWwuY29tIiwiZXhwIjoxNjY0OTgxNzE0fQ.ecrael-CQDZpoYOJF48yhdQp6BApza3Q87tHX6N3KEQ',
        callback: authenticateCallback
    });
    FreshworksWidget('hide', 'launcher');
    FreshworksWidget('prefill', 'ticketForm', {
        custom_fields: {
            cf_signature: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJWZXJzaW9uIjoiUFRcL0JSIiwiVXNlcklkIjoiMzA2Mzk5IiwiVXNlck5hbWUiOiJSb29tIiwiRG9uYXRvciI6IiIsIlJlYmlydGhPck5ldyI6IiIsIkZhbWlseSI6IiIsIlJhbmsiOiJTd2luZGxlciJ9.z1OvREiy5ut03ffGqRXLOdDovHug5HbPIf9I8Mqf2zI'
        }
    });
    FreshworksWidget('hide', 'ticketForm', ['name', 'email', 'custom_fields.cf_signature']);



</script>
<script type='text/javascript' src='https://euc-widget.freshworks.com/widgets/77000004157.js' defer async></script>
<script type='text/javascript'>

    $(document).on('click', ".help-button", function() {
        FreshworksWidget('open');
    });

</script>
</body>
</html>
