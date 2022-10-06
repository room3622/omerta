<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"><script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={licenseKey:"40cdad7cf8",applicationID:"40826963"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n,r){return function(){return s.recordSupportability("API/"+e+"/called"),o(t+e,[u.now()].concat(c(arguments)),n?null:this,r),n?void 0:this}}var o=t("handle"),a=t(9),c=t(10),f=t("ee").get("tracer"),u=t("loader"),s=t(4),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",v=l+"ixn-";a(p,function(t,e){d[e]=i(l,e,!0,"api")}),d.addPageAction=i(l,"addPageAction",!0),d.setCurrentRouteName=i(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(v+"tracer",[u.now(),t,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw f.emit("fn-err",[arguments,this,t],n),t}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(v,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),s.recordSupportability("API/noticeError/called"),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(o){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],4:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return o("storeMetric",n,null,"api"),n}function i(t,e){var n=[c,t,{name:t},e];return o("storeEventMetrics",n,null,"api"),n}var o=t("handle"),a="sm",c="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:c},recordSupportability:r,recordCustom:i}},{}],5:[function(t,e,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=t(11);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],6:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?l("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&l("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(u&&u<r.startTime)return;var i=[r],o=a({});o&&i.push(o),l("lcp",i)}}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||l("cls",[t])})}function a(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e)return e.type&&(t["net-type"]=e.type),e.effectiveType&&(t["net-etype"]=e.effectiveType),e.rtt&&(t["net-rtt"]=e.rtt),e.downlink&&(t["net-dlink"]=e.downlink),t}function c(t){if(t instanceof y&&!w){var e=Math.round(t.timeStamp),n={type:t.type};a(n),e<=v.now()?n.fid=v.now()-e:e>v.offset&&e<=Date.now()?(e-=v.offset,n.fid=v.now()-e):e=v.now(),w=!0,l("timing",["fi",e,n])}}function f(t){"hidden"===t&&(u=v.now(),l("pageHide",[u]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var u,s,d,p,l=t("handle"),v=t("loader"),m=t(8),g=t(3),y=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){s=new PerformanceObserver(r);try{s.observe({entryTypes:["paint"]})}catch(h){}d=new PerformanceObserver(i);try{d.observe({entryTypes:["largest-contentful-paint"]})}catch(h){}p=new PerformanceObserver(o);try{p.observe({type:"layout-shift",buffered:!0})}catch(h){}}if("addEventListener"in document){var w=!1,b=["click","keydown","mousedown","pointerdown","touchstart"];b.forEach(function(t){document.addEventListener(t,c,g(!1))})}m(f)}},{}],7:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}e.exports={agent:i,version:o,match:r}},{}],8:[function(t,e,n){function r(t){function e(){t(c&&document[c]?document[c]:document[o]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,i(!1))}var i=t(3);e.exports=r;var o,a,c;"undefined"!=typeof document.hidden?(o="hidden",a="visibilitychange",c="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",a="webkitvisibilitychange",c="webkitVisibilityState")},{}],9:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],10:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],11:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var c=e(i),f=m(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[w[n]];return p&&p.push([b,n,r,c]),c}}function o(t,e){h[t]=m(t).concat(e)}function v(t,e){var n=h[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return h[t]||[]}function g(t){return p[t]=p[t]||i(n)}function y(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var h={},w={},b={on:o,addEventListener:o,removeEventListener:v,emit:n,get:g,listeners:m,context:e,buffer:y,abort:c,aborted:!1};return b}function o(t){return u(t,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=t("gos"),s=t(9),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!M++){var t=T.info=NREUM.info,e=m.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(x,function(e,n){t[e]||(t[e]=n)});var n=a();c("mark",["onload",n+T.offset],null,"api"),c("timing",["load",n]);var r=m.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===m.readyState&&o()}function o(){c("mark",["domContent",a()+T.offset],null,"api")}var a=t(5),c=t("handle"),f=t(9),u=t("ee"),s=t(7),d=t(2),p=t(3),l=d.getConfiguration("ssl")===!1?"http":"https",v=window,m=v.document,g="addEventListener",y="attachEvent",h=v.XMLHttpRequest,w=h&&h.prototype,b=!1;NREUM.o={ST:setTimeout,SI:v.setImmediate,CT:clearTimeout,XHR:h,REQ:v.Request,EV:v.Event,PR:v.Promise,MO:v.MutationObserver};var E=""+location,x={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1216.min.js"},O=h&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(6),m[g]?(m[g]("DOMContentLoaded",o,p(!1)),v[g]("load",r,p(!1))):(m[y]("onreadystatechange",i),v[y]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var M=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],t)}c(n+"start",[o,a,f],s,u);try{return p=e.apply(a,o)}catch(v){throw c(n+"err",[o,a,v],s,u),v}finally{c(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)f=e[u],c=t[f],a(c)||(t[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!v||e){var c=v;v=!0;try{t.emit(n,r,o,e,a)}catch(f){i([f,n,r,o],t)}v=c}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function c(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function f(t,e,n){var r=t[e];t[e]=c(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(10),p="nr@original",l=Object.prototype.hasOwnProperty,v=!1;e.exports=r,e.exports.wrapFunction=c,e.exports.wrapInPlace=f,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
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

    <link href="//static.barafranca.com/assets/5.7.3.0/account.css" rel="stylesheet"/>
    <script src="//static.barafranca.com/assets/5.7.3.0/account.js" type="text/javascript"></script>


</head>
<body>

<div class="milestone-wrapper wrapper" id="wrapper">

    <img src="//static.barafranca.com/assets/omerta/main/account/assets/img/create-the-next-don.png" class="milestone-wrapper-title-slogan" alt="">
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
        <div class="ribbon"><img src="//static.barafranca.com/assets/omerta/main/account/assets/img/corner-ribbon.png"/></div>
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
            <li><a href="/logout.php">Desligar Sessão</a></li>
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
                           onclick="window.location = '/logout.php';" type="button"
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
            <img src="//static.barafranca.com/assets/omerta/main/layout/assets/img/skull/skull-big-2.png?r=1" alt="dead skull"/>
        </div>
        <div class="dead-foot">
            <p>Create a new character and ...</p>
            <a href="?module=Account" target="_top" class="btn btn-red" id="revenge-button">Comeback with a vengance!</a>
        </div>
    </div>
</div>

</body>
</html>
