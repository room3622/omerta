@php
    $version =   \App\Http\Controllers\GameVersionControler::GameVersion()
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>My Account</title>

    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Arimo:400,700,400italic,700italic" type="text/css"/>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="{{ asset("/assets/{$version}/account.css") }}" rel="stylesheet"/>
    <script src="{{ asset("/assets/{$version}/account.js") }}" type="text/javascript"></script>

</head>
<body>


<div class="milestone-wrapper wrapper" id="wrapper">

    <img src="/assets/omerta/main/account/assets/img/create-the-next-don.png" class="milestone-wrapper-title-slogan" alt="">
    <h2 class="milestone-wrapper-title"></h2><br/>

    <div class="left-col info-col server-col">

        <widget-server style="padding: 30px"></widget-server>

        <script type="text/html" id="widget-server">

            <div class="version-info">

                <h1 class="info spaced-lg">SERVER</h1>

                <div class="divider"></div>
                <div class="version">COM.PT</div>
                <div class="divider"></div>

                <h2 class="info spaced-sm">Round started on: <span class="date" data-bind="text: releaseDate"></span></h2>
            </div>

            <!-- ko foreach: hof -->
            <div class="hof-info">
                <div class="info" data-bind="text: friendlyName"></div>
                <div class="value" data-bind="text: name"></div>
            </div>
            <!-- /ko -->

            <div class="gangster-info">
                <p><span class="info">Online gangsters:</span> <span class="value" data-bind="text: onlineGangsters">0</span></p>

                <p><span class="info">Alive gangsters:</span> <span class="value" data-bind="text: aliveGangsters">2</span></p>

                <p><span class="info">Registered gangsters:</span> <span class="value" data-bind="text: totalGangsters">3</span></p>
            </div>
        </script>    </div>
    <div class="right-col character-col">
        <div class="ribbon"><img src="assets/omerta/main/account/assets/img/corner-ribbon.png"/></div>
        <character-wrapper class="character-container">
            <!-- Knockout element to render character -->
        </character-wrapper>

        <!-- Template -->
        <script id="my-character" type="text/html">

            <div class="character-wrapper">
                <h1>YOUR CHARACTER</h1>
                <!-- ko if: bNewUser -->
                <h2>Select your name and gender</h2>
                <!-- /ko -->

                <!-- ko if: !bNewUser -->
                <h2 data-bind="text: rankName"></h2>
                <!-- /ko -->

                <img src="#" class="rank-avatar" alt="Character" data-bind="attr: {src: getImage()}">
                <br/>
                <table align="center">
                    <tr>
                        <td class="label">Nome</td>
                        <td class="label">Sexo</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="Ingame" style="text-transform: capitalize;" data-bind="uniqueName: true, value: name, attr: {disabled: !bNewUser}" maxlength="12" autofocus>

                        </td>
                        <td>
                            <div class="gender-select" data-bind="css: {selectable: bNewUser}">
                                <span class="male" data-bind="click: selectMale, css: {active: isMale()}"><i class="fa fa-mars"></i></span>
                                <span class="female" data-bind="click: selectFemale, css: {active: isFemale()}"><i class="fa fa-venus"></i></span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        </script>    </div>
    <div class="clearfix"></div>
    <div class="pull-right action-container" data-bind="with: omerta.loaded.character">
        <a href="javascript:void(0)" class="btn btn-big btn-blue action-btn"
           data-bind="click: omerta.open, attr: {disabled: bLoading()}">Let's Roll!</a>
    </div>
    <div class="clearfix"></div>
</div>


<div id="footer-container" class="footer"
     data-bind="with: omerta, css: {collapsed: !omerta.footerOpen(), expanded: omerta.footerOpen()}">

    <div class="test" style="margin-top: -70px">
        <div id="footer-opener" class="footer-opener pull-left arrow"
             data-bind="click: GUI.toggleFooter, css: {closed: !footerOpen(), open: footerOpen()}"></div>

        <ul class="top-tabs">
            <li><a href="javascript:void(0)" data-bind="click: setTabSettings">Minhas Definições</a></li>
            <li><a href="javascript:void(0)" data-bind="click: setTabDead">Dead Accounts</a></li>
            <li><a href="/logout">Desligar Sessão</a></li>
        </ul>
    </div>

    <div class="footer-content">
        <div id="tabs" class="hidden">
            <div class="tabs-listing">
                <ul class="bottom-tabs">
                    <li>
                        <a href="javascript:void(0)"
                           data-bind="click: setTabSettings, css: {active: isEnabledTabSetting()}">Minhas Definições</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                           data-bind="click: setTabDead, css: {active: isEnabledTabDead()}">Dead Accounts</a>
                    </li>
                </ul>
            </div>


            <div data-bind="visible: isEnabledTabSetting()">



                <form action="#a">

                    <!-- ko if: omerta.loaded.settings().length == 0 -->
                    <div class="form-containe" style="margin: 10px 20px; text-align: center;">You need to create an account before configure it.</div>
                    <!-- /ko -->

                    <div class="form-container" data-bind="template: { name: 'fieldset-template', foreach: omerta.loaded.settings, as: 'setting' }"></div>
                </form>


                <!-- Fieldset template -->
                <script type="text/html" id="fieldset-template">
                    <fieldset class="fieldset">
                        <label data-bind="html: label"></label>

                        <div class="pull-right">
                            <span class="field-value" data-bind="text: value, visible: !showValue()"></span>

                            <!-- ko if: fields.length == 0-->
                            <div class="input-f input-f-single" data-bind="visible: showValue(),template: { name: 'input-template', data: setting }, css: {'input-f-editable': editable, 'input-f-non-editable': !editable}"></div>
                            <!-- /ko -->

                            <!-- ko if: fields.length > 0-->
                            <div class="input-f input-f-multiple" data-bind="visible: showValue(), template: { name: 'input-template', foreach: fields, data: setting}"></div>
                            <!-- /ko -->

                            <a href="javascript:void(0)" data-bind="click: toggleForm, text: showValue() ? editable ? 'Definir' : 'Close' : 'Alterar'" class="btn btn-small btn-blue">Change</a>
                        </div>
                    </fieldset>
                </script>


                <!-- Single input template -->
                <script type="text/html" id="input-template">

                    <span class="input-child" data-bind="css: {'input-f-block': $parent.style == 'block'}">

        <!-- ko if: description -->
            <div class="help-text muted" data-bind="html: description">

            </div>
                        <!-- /ko -->

                        <!-- ko if: $parent.style == 'block' -->
            <label data-bind="html: label"></label>
                        <!-- /ko -->

                        <!-- ko if: attr.type == 'select' -->
            <select data-bind="attr: attr, value: attr.value, options: options, optionsText: optionsText, optionsValue: optionsValue">

            </select>
                        <!-- /ko -->

                        <!-- ko if: attr.type != 'select' -->
            <input data-bind="attr: attr, value: attr.value ">
                        <!-- /ko -->

    </span>
                </script>

            </div>
            <div data-bind="visible: isEnabledTabDead()">

                <!-- ko foreach: omerta.loaded.deadAccounts -->
                <div class="fieldset">
                    <div class="pull-left dead-container">
            <span class="d-skull">
                <img src="/assets/omerta/main/account/assets/img/skull.png" alt="death skull">
            </span>
                        <span class="d-date" data-bind="text: $data.killdate"></span>
                    </div>

                    <div class="pull-right dead-container">
            <span class="d-halloffame" data-bind="visible: $data.hof">
                <img src="/assets/omerta/main/account/assets/img/star-rank.png" alt="Star - Hall of fame">
            </span>
                        <span class="d-rank" data-bind="text: $data.rankName"></span>
                        <span class="d-name" data-bind="text: $data.name"></span>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- /ko -->


                <!-- ko if: omerta.loaded.deadAccounts().length === 0 -->
                <div class="empty-deads dead-container" style="text-align: center">
                    <br/>
                    You don't have dead accounts yet.
                    <br/><br/><br/><br/>
                </div>
                <!-- /ko -->            </div>

            <div class="form-footer">
                <div class="pull-right" data-bind="with: omerta.loaded.character">
                    <input class="btn btn-big btn-green"
                           data-bind="click: omerta.open, attr: {disabled: bLoading()}" type="submit"
                           value="Let's Roll!">
                    <input class="btn btn-big btn-red"
                           onclick="window.location = '/logout';" type="button"
                           value="Desligar Sessão">
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

</div>


<div id="dead-container" class="deadContainerWrapper">
    <div class="dead-body">
        <div class="dead-title">
            <h1>The bastards killed you !</h1>
        </div>
        <div class="dead-skull">
            <img src="assets/omerta/main/layout/assets/img/skull/skull-big-2.png?r=1" alt="dead skull"/>
        </div>
        <div class="dead-foot">
            <p>Create a new character and ...</p>
            <a href="?module=Account" target="_top" class="btn btn-red" id="revenge-button">Comeback with a vengance!</a>
        </div>
    </div>
</div>

</body>
</html>
