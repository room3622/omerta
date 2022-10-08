<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>{{ config('app.name') }} - Massive multiplayer online text-based RPG gangster and mafia game</title>

    <meta name="description"
          content="{{ config('app.name') }} is a text based game RPG. The Godfather of Mafia games online, commit crimes to earn money and experience for your family, right in your browser."/>
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ config('app.name') }} - A text based RPG mafia game online for PC">
    <meta property="og:description"
          content="{{ config('app.name') }} is a text based game RPG. The Godfather of Mafia games online, commit crimes to earn money and experience for your family, right in your browser.">
    <meta property="og:site_name" content="{{ config('app.name') }} ">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta property="og:image" content="{{  asset('/assets/images/social.jpg') }}"/>


    <link rel="canonical" href={{ config('app.url') }}"/>

    <!-- Needed fonts -->
    <link rel=" stylesheet" href="//fonts.googleapis.com/css?family=Arimo:400,700" type="text/css"/">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- VENDOR CORE -->

    <!--[if lt IE 9]>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <![endif]-->
    <!--[if (gte IE 9) | (!IE)]><!-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <!--<![endif]-->
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <!-- Omerta -->
    <link href="{{ asset('/assets/5.7.3.0/homepage.css' )}}" rel="stylesheet"/>
    <script src="{{asset('/assets/5.7.3.0/homepage.js') }}" type="text/javascript"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body class="d-flex vh-100 text-center text-white bg-dark">

<div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-2">
        <nav class="navbar">
            <div class="container-fluid d-flex justify-content-end m-0">

                <div class="navbar-brand m-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">SIGNUP</a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</a>
                </div>
            </div>
        </nav>
    </header>

    <div class="hp_banner clearfix flex-grow-1 d-flex flex-column">
        <main class="px-3 flex-grow-1">
            <img id="logo_game" src="assets/logo2.svg"/>
            <h2 class="mt-3">The Godfather of Mafia games</h2>
            <button class="mt-3 btn btn-big btn-action btnright btn-bold hp-join" data-bs-toggle="modal"
                    data-bs-target="#signupModal">
                join now for free!
            </button>
        </main>

        <div class="m-3">
            <nav id="hp_nav">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                            type="button"
                            role="tab" aria-controls="nav-home" aria-selected="true">Top Families
                    </button>
                </div>
            </nav>
            <div class="tab-content bg-data" id="nav-tabContent">
                <div class="tab-pane show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                     tabindex="0">
                    <div class="row equal row-cols-1 row-cols-md-3 g-4 py-3 px-4">
                        <div class="col">
                            <div class="family-card px-2 h-100">
                                <div class="row">
                                    <!-- header -->
                                    <div class="col-sm-12 fname p-2">
                                        <div class="row">
                                            <div class="col-lg-3 text-center">
                                                <img class="img-fluid m-1"
                                                     src="https://static.barafranca.com/omerta_placeholder.png"
                                                     alt="">
                                            </div>
                                            <div class="col-lg-9 text-lg-start text-center pt-lg-1">
                                                <span>#1</span> Family<br>
                                                <span>Ontario</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- members and dons -->
                                <div class="row  flex-grow-1">
                                    <div class="col-md-12 col-lg-6 ftops align-middle">
                                        <p class="mt-2 mb-0 memberssub">the tops</p>
                                        <div class="row pt-2">
                                            <div class="col-5 text-end p-0"><strong>Don</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#1</span>
                                                Lilly
                                                <br/>
                                                <span class="ranking ranking20">#1</span>
                                                Akillsam
                                                <br/>
                                                <span class="ranking ranking20">#1</span>
                                                Virtual
                                                <br/>
                                                <span class="ranking ranking20">#1</span>
                                                Gone
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5 text-end p-0"><strong>Sottocapo</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#3</span>
                                                Fera
                                                <br/>
                                                <span class="ranking ranking20">#4</span>
                                                Helloo
                                                <br/>
                                                <span class="ranking ranking20">#17</span>
                                                Hollcraft
                                                <br/>
                                                <span class="ranking ranking50">#47</span>
                                                Ironclad
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row pb-2">
                                            <div class="col-5 text-end p-0"><strong>Consiglieri</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#4</span>
                                                Busterbee
                                                <br/>
                                                <span class="ranking ranking20">#12</span>
                                                Lithuania
                                                <br/>
                                                <span class="ranking ">#117</span>
                                                Deuss
                                                <br/>
                                                <span class="ranking ranking20">#16</span>
                                                Enco
                                                <br/>
                                                <span class="ranking ranking100">#69</span>
                                                Tasmania
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 p-0 align-middle  flex-grow-1">
                                        <p class="mt-2 mb-2 memberssub">list of 404 loyal members</p>
                                        <div class="row row-cols-2 row-cols-md-1 row-cols-lg-2 fmembers align-left px-2"
                                             style="max-height: 200px; overflow: hidden; overflow-y: scroll; position: relative;">
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#1</span> Akillsam
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Monster
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Volume
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Sixtynine
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Strikex
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#3</span> Partybubbles
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#4</span> Enco
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#4</span> Hazard
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Alesso
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Foxtrot
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Kolchek
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Fallguys
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Dictator
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Bunk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Kenno
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Madoooo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Wolfgang
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Cata
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Done
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Pretty
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Fosgasse
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Dan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Sowrd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Ninchen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Killforyou
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Gruppo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Alcatraz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Dan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Subutai
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Mystery
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Wabakimi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Glory
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Jason
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Maynard
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Xoxon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Perdition
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Tyler
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Picon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Polycom
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Saiyan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Archilles
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Rancore
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Kai
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Valgina
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Conor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Pollos
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Grgapitic
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Damned
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Asus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Vegas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Mackie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Buffon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Agroki
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Partigiano
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Mulan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Bbb
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Willie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Mangaboy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Peme
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Dipzor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Hector
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Lost
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Suh
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Tok
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Oxidada
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Grand
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Ultra
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Virgil
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Auguste
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Wonder
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Riot
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Sensistar
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Dark
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Nrg
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Hoax
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#22</span> Sidorov
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#22</span> Dunno
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Dexo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Cata
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Onlyfans
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Bazinga
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Catanachio
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Condition
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Carus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Gusto
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Amarant
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Hyperion
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Garotopodre
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Sense
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Parcival
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Deranged
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Tomynuckles
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Treater
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Ashin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Bachelorete
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Captain
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Kalliente
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Packman
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Nomer
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Anen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Kramer
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Brody
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Roller
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Sychev
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Goa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Blanche
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Iq
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Leftyrugiero
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Karabudak
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Jade
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Mrlambo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Tortellino
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Elmariachi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Ahile
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Items
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Taz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Joxan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Bachelorete
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Eklutna
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Zekt
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Marvin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> So
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Vlinderin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Lordvidar
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Avozinho
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Tirtil
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Silvertaker
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Yazz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Persempre
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Masha
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Janzen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Ash
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Mar
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Flack
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Thera
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#37</span> Bill
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#37</span> Brix
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#37</span> Uurluyum
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Jaymz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Malignia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Eklutna
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Avataro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Saxotorjollo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Valerie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Tomynuckles
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Aloim
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Wicked
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Elmariachi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Naisha
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Alena
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Bluebell
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Hush
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Koeshi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Magnolia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Innovator
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#43</span> Aldoru
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#43</span> Motesy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Treater
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Vlinderin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Pornhub
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Suh
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Fatmike
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Deathzone
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Bigbastard
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#46</span> Sxollo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#46</span> Mwarfare
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#46</span> Knowme
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#47</span> Drax
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#47</span> Dub
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#47</span> Fatmike
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#48</span> Flack
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#48</span> Flatout
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Provenio
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Jebs
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Romanian
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Mapleleaf
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Kaperka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Qantaqa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Felicia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Manchyka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#51</span> Natsumi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#51</span> Weiss
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#51</span> Yuran
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#51</span> Zero
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#52</span> Ghost
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#52</span> Charlotte
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#53</span> Devamke
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#53</span> Ayasli
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#54</span> Zeka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#54</span> Elmariachi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#55</span> Cassiopeia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#55</span> Dionisia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#55</span> Baz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#55</span> Matrim
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#56</span> Magnolia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#56</span> Rockwell
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#57</span> Zabid
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#57</span> Hemdorff
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#58</span> Django
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#58</span> Lenine
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Isengard
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Biggd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Pandora
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Taz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#60</span> Conor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#60</span> Impact
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#61</span> Jackson
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#61</span> Onasibanak
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#62</span> Inyouranus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#62</span> Ariam
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#63</span> Libertan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#63</span> Rivella
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#63</span> Aaasdg
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#63</span> Espanhol
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#64</span> Muratti
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#65</span> Snej
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#65</span> Kaperka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#66</span> Deranged
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#66</span> Wezk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#67</span> Fu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#67</span> Helena
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#67</span> Slark
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#68</span> Mate
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#68</span> Www
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#68</span> Badcompany
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#69</span> Deal
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#69</span> Kinha
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#70</span> Stomex
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#70</span> Brutus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#70</span> Uzmcvs
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#71</span> Paoli
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#71</span> Pretty
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#71</span> Hypnose
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#72</span> Seagal
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#72</span> Nikees
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#73</span> Blue
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#74</span> Dcman
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#74</span> Seventeen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#75</span> Dendroid
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#76</span> Auguste
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#77</span> Rinzler
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#77</span> Trish
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#79</span> Jeice
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#80</span> Ikkea
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#80</span> Marckie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#81</span> Penelope
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#81</span> Puds
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#82</span> Dejavu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#82</span> Papi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#83</span> Libertavurur
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#83</span> Enco
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#84</span> Bridges
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#84</span> Gruttepier
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#86</span> Kung
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#87</span> Blacksheep
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#87</span> Oblivions
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#88</span> Reset
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#89</span> Nova
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#89</span> Axel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#89</span> Katie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#90</span> Mollez
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#90</span> Waldo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#92</span> Diavolas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#93</span> Fatale
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#94</span> Mucxx
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#95</span> Therealwelle
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#95</span> Sinhooo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#96</span> Jade
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#96</span> Defiant
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#97</span> Stier
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#97</span> Tii
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#98</span> Ysr
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#101</span> Nice
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#102</span> Papoose
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#102</span> Gernas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#103</span> Promo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#103</span> Bravo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#104</span> Must
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#104</span> Marla
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#105</span> Vintage
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#105</span> Staley
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#108</span> Bad
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#110</span> Badalamenti
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#111</span> Well
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#111</span> Lsdreams
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#113</span> Inyouranus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#113</span> Yuhh
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#114</span> Letsev
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#115</span> Christ
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#118</span> None
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#118</span> Piscis
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#119</span> Muen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#119</span> Makaroflu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#120</span> Missy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#121</span> Tonystark
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#121</span> Soek
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#123</span> Bluebell
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#124</span> Zagazaw
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#124</span> Corruption
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#125</span> Kas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#126</span> Yankee
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#127</span> Pica
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#127</span> Sushi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#128</span> Cat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#129</span> Keeley
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#130</span> Scarro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#130</span> Beethoven
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#132</span> Minds
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#133</span> Zina
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#134</span> Clown
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#135</span> Kraakhook
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#137</span> Lila
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#138</span> Fury
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#139</span> Gammel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#140</span> Doppio
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#141</span> Dembe
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#142</span> Oehoe
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#143</span> Lampe
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#147</span> Inci
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#148</span> Japp
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#148</span> Buzzz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#150</span> Liberta
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#150</span> Puzo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#153</span> Whoopsi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#156</span> Bremmetje
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#158</span> Doclapin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#159</span> Elchino
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#159</span> Monkydw
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#160</span> Borg
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#161</span> Creator
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#167</span> Shifu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#168</span> Getalife
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#169</span> Zerohero
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#170</span> Lecapeon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#171</span> Surprise
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#172</span> Caliber
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#173</span> Vatoo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#174</span> Yettigayri
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#174</span> Darkdog
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#176</span> Relentless
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#179</span> Kybelle
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#180</span> Bulletride
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#182</span> Valachi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#184</span> Vishnja
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#185</span> Must
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#188</span> Norgah
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#189</span> Av
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#192</span> Karenlina
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#192</span> Ares
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#197</span> Revengeme
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#198</span> Sativa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#199</span> Light
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#199</span> Luxzao
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#203</span> Kogelkopper
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#207</span> Ramcel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#210</span> Zynp
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#222</span> Fresia
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#227</span> Lbrt
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#229</span> Sk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#237</span> Scarro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#238</span> Vesta
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#238</span> Zatty
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#239</span> Bonbon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#240</span> Dsi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#242</span> Sinekass
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#246</span> Rapunzel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#248</span> Seit
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#255</span> Flatbush
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#261</span> Crumblepie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#262</span> Zeko
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#269</span> Reward
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#284</span> Goro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#293</span> Ihihi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#296</span> Mordes
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#306</span> Lawd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#307</span> Crakots
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#327</span> Shaun
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#340</span> Nodjini
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#349</span> Cherry
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#371</span> Trikopis
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#374</span> Summer
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#388</span> Blacksea
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#392</span> Galatasaray
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#416</span> Despot
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#446</span> Blodvabel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#489</span> Rippieme
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#530</span> Hope
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#541</span> Huhu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#619</span> Jolly
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#644</span> Elain
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#683</span> Dad
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#735</span> Mata
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#749</span> Zago
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#754</span> Cmx
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#803</span> Bigheadtao
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#810</span> Bombonera
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#819</span> Xynra
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1155</span> Supoentje
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1507</span> Opa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1610</span> Lamark
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1686</span> Leopold
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1687</span> Ossify
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1688</span> Flaip
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1762</span> Lelijk
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-sm-12  factive  align-middle p-2">
                                        <div>Not active yet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="family-card px-2 h-100">
                                <div class="row">
                                    <!-- header -->
                                    <div class="col-sm-12 fname p-2">
                                        <div class="row">
                                            <div class="col-lg-3 text-center">
                                                <img class="img-fluid m-1"
                                                     src="https://static.barafranca.com/omerta_placeholder.png"
                                                     alt="">
                                            </div>
                                            <div class="col-lg-9 text-lg-start text-center pt-lg-1">
                                                <span>#2</span> Family<br>
                                                <span>Imperium</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- members and dons -->
                                <div class="row  flex-grow-1">
                                    <div class="col-md-12 col-lg-6 ftops align-middle">
                                        <p class="mt-2 mb-0 memberssub">the tops</p>
                                        <div class="row pt-2">
                                            <div class="col-5 text-end p-0"><strong>Don</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#4</span>
                                                Gangsta
                                                <br/>
                                                <span class="ranking ranking20">#1</span>
                                                Rex
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5 text-end p-0"><strong>Sottocapo</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#6</span>
                                                Mastermind
                                                <br/>
                                                <span class="ranking ranking20">#2</span>
                                                Gunner
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row pb-2">
                                            <div class="col-5 text-end p-0"><strong>Consiglieri</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#12</span>
                                                Ais
                                                <br/>
                                                <span class="ranking ranking20">#14</span>
                                                Djarin
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 p-0 align-middle  flex-grow-1">
                                        <p class="mt-2 mb-2 memberssub">list of 125 loyal members</p>
                                        <div class="row row-cols-2 row-cols-md-1 row-cols-lg-2 fmembers align-left px-2"
                                             style="max-height: 200px; overflow: hidden; overflow-y: scroll; position: relative;">
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#1</span> Ripsam
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Rahu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#3</span> Peppino
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#3</span> Ad
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Arkadi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Wayne
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Pala
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Aristocrat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Wootf
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Sheperd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Sai
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Pedrog
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Envi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Cefa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Clay
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Willie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Euro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Berserker
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Chiron
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Bonez
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Bm
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Oxy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Rebel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Thera
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Kraakhaak
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Prestij
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Sabo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Obelisk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Tasos
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Kekw
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#22</span> Hymie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Ketenpere
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Francdepazzi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Calimero
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Thanos
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Harold
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Jerry
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Bazarov
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Hypnose
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Aguilar
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Klitschko
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Kaiser
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Smoke
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Bobs
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Gulating
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Everse
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Restavnatav
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Bonez
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Joseph
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Vicarious
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Francdepazzi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Dolo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Jayce
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#37</span> Ti
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Inara
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Chappie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Francesco
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Ironcat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Bobs
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Coffee
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Hetfield
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Asa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Troja
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#43</span> Toxico
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Cocain
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Cocain
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Alemdar
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Atlas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#48</span> Jukinto
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#48</span> Jiha
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Dex
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Vaizzo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Bas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#51</span> Goat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#53</span> Captaincat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#53</span> Dex
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#54</span> Hilly
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#55</span> Ing
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#56</span> Vaizzo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#57</span> Gufy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#58</span> Mirto
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Dolo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Arthur
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#60</span> Melkor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#61</span> Gnag
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#62</span> Chappie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#62</span> Pompom
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#63</span> Luxor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#64</span> Urania
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#65</span> Vincent
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#66</span> Tempest
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#68</span> Zebu
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#69</span> Katie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#73</span> Creve
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#74</span> Radom
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#75</span> Mtz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#79</span> Djuru
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#82</span> Cigaro
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#86</span> Onfire
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#92</span> Gandi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#92</span> Donatello
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#97</span> Bedir
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#102</span> Monking
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#107</span> Otuken
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#110</span> Tortuga
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#111</span> Hanginthere
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#112</span> Sfw
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#118</span> Warmonger
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#123</span> Hus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#126</span> Cali
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#127</span> Calque
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#129</span> Barristan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#131</span> Dent
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#141</span> Yildiray
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#143</span> Ulas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#144</span> Ripsko
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#156</span> Ernesto
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#157</span> Ancalagon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#198</span> Darth
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#247</span> Kazem
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#391</span> Nobg
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#562</span> Gooss
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#585</span> Lelouch
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#733</span> Charlie
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#760</span> Acapella
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-sm-12  factive  align-middle p-2">
                                        <div>Not active yet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="family-card px-2 h-100">
                                <div class="row">
                                    <!-- header -->
                                    <div class="col-sm-12 fname p-2">
                                        <div class="row">
                                            <div class="col-lg-3 text-center">
                                                <img class="img-fluid m-1"
                                                     src="https://static.barafranca.com/omerta_placeholder.png"
                                                     alt="">
                                            </div>
                                            <div class="col-lg-9 text-lg-start text-center pt-lg-1">
                                                <span>#3</span> Family<br>
                                                <span>Latitante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- members and dons -->
                                <div class="row  flex-grow-1">
                                    <div class="col-md-12 col-lg-6 ftops align-middle">
                                        <p class="mt-2 mb-0 memberssub">the tops</p>
                                        <div class="row pt-2">
                                            <div class="col-5 text-end p-0"><strong>Don</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#4</span>
                                                Dunedain
                                                <br/>
                                                <span class="ranking ranking20">#2</span>
                                                Schnell
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5 text-end p-0"><strong>Sottocapo</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#3</span>
                                                Ziko
                                                <br/>
                                                <span class="ranking ranking20">#1</span>
                                                Eingebildet
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="row pb-2">
                                            <div class="col-5 text-end p-0"><strong>Consiglieri</strong></div>
                                            <div class="col-7 text-start p-0">
                                                <span class="ranking ranking20">#1</span>
                                                Panacea
                                                <br/>
                                                <span class="ranking ranking20">#3</span>
                                                Klasse
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 p-0 align-middle  flex-grow-1">
                                        <p class="mt-2 mb-2 memberssub">list of 123 loyal members</p>
                                        <div class="row row-cols-2 row-cols-md-1 row-cols-lg-2 fmembers align-left px-2"
                                             style="max-height: 200px; overflow: hidden; overflow-y: scroll; position: relative;">
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#2</span> Syntax
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Cartman
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#5</span> Ausbilder
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Decoy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#6</span> Legendary
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Licht
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#7</span> Behzatc
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Abraham
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#8</span> Steven
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Aselim
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#9</span> Pala
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Torogladio
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#10</span> Amy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Zn
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#11</span> Ruth
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Walton
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#12</span> Oflumeric
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Elardion
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#13</span> Wolverine
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Firestorm
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#14</span> Bluey
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Xewn
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#15</span> Fophef
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#16</span> Zn
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#17</span> Abbas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Fade
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#18</span> Batigol
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Bordomavi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#19</span> Bdback
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Hcrobfr
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking20">#20</span> Undomiel
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Audhild
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#21</span> Saiyan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#22</span> Gotcio
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Eilish
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#23</span> Zapkinus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Abrakadabra
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#24</span> Shira
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Psyfi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#25</span> Oniki
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Draak
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#26</span> Army
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Dolores
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#27</span> Lo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Tatanka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#28</span> Bc
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Tessa
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#29</span> Mete
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#30</span> Hasan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> California
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#31</span> Mandm
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#32</span> Dflow
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Mandm
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#33</span> Ossify
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Tranquilla
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#34</span> Reigen
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Severus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#35</span> Rocco
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Trix
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#36</span> Hc
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#37</span> Rasputin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Risus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#38</span> Alaskali
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Ziyan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#39</span> Caseres
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#40</span> Abi
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Logan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#41</span> Red
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Zafer
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#42</span> Zindan
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#43</span> Caseres
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Savastano
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#44</span> Reis
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#45</span> Cb
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#46</span> Bold
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#47</span> Reckless
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#48</span> Doz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#49</span> Gunucci
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking50">#50</span> Kharon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#53</span> Cordial
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#54</span> Portugal
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#56</span> Uncle
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#56</span> Sneaky
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#57</span> Beast
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#58</span> Capraz
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Zenere
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#59</span> Sado
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#60</span> Ahey
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#62</span> Kharon
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#64</span> Lolo
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#67</span> Kenwayy
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#69</span> Wltn
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#80</span> Maho
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#87</span> Agressor
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#90</span> Jarrri
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#92</span> Mb
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#94</span> Sivas
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#94</span> Ratratrat
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#96</span> Abuzittin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ranking100">#98</span> Bd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#109</span> Ola
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#110</span> Rai
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#123</span> Dast
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#132</span> Kanka
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#144</span> Skywolf
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#148</span> Sure
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#152</span> Bouc
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#181</span> Serolduamk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#183</span> Taklacikus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#209</span> Rfv
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#285</span> Beyazkabus
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#294</span> Castle
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#300</span> Sv
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#305</span> Incememedd
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#325</span> Thetk
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#522</span> Poh
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#649</span> Xcxcxx
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#704</span> Zizuskr
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#743</span> Linkin
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#754</span> Karma
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#884</span> Azman
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#912</span> Noah
                                            </div>
                                            <div class="col text-start">
                                <span
                                    class="ranking ">#1243</span> Mustileaks
                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-sm-12  factive  align-middle p-2">
                                        <div>Not active yet</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="row row-cols-1 g-4 py-3 px-4">
                        <div class="col">
                            <div class="family-card p-2">
                                <div class="family-rankings-table row text-start" style="text-transform: uppercase;">
                                    <div class="col-12 col-xl-2">
                                        <strong><span
                                                style="display: inline-block; width: 15px; margin-right: 5px;">#4</span>
                                            Gondor
                                        </strong>
                                    </div>
                                    <div class="col-7 col-xl-6">
                                        <strong>Tops</strong>
                                        <span class="ranking ranking20">#2</span>
                                        Sigsauer
                                        <span class="ranking ranking20">#10</span>
                                        Anardil
                                        <span class="ranking ranking20">#4</span>
                                        Champion
                                    </div>
                                    <div class="col-2 col-xl-2">64 loyal members</div>
                                    <div class="col-3 col-xl-2 text-end factive "> Not active yet</div>
                                </div>
                                <div class="family-rankings-table row text-start" style="text-transform: uppercase;">
                                    <div class="col-12 col-xl-2">
                                        <strong><span
                                                style="display: inline-block; width: 15px; margin-right: 5px;">#5</span>
                                            Batavia
                                        </strong>
                                    </div>
                                    <div class="col-7 col-xl-6">
                                        <strong>Tops</strong>
                                        <span class="ranking ranking20">#1</span>
                                        Keizer
                                        <span class="ranking ranking20">#10</span>
                                        Parcival
                                    </div>
                                    <div class="col-2 col-xl-2">48 loyal members</div>
                                    <div class="col-3 col-xl-2 text-end factive "> Not active yet</div>
                                </div>
                                <div class="family-rankings-table row text-start" style="text-transform: uppercase;">
                                    <div class="col-12 col-xl-2">
                                        <strong><span
                                                style="display: inline-block; width: 15px; margin-right: 5px;">#6</span>
                                            Vengeance
                                        </strong>
                                    </div>
                                    <div class="col-7 col-xl-6">
                                        <strong>Tops</strong>
                                        <span class="ranking ranking20">#1</span>
                                        Jake
                                        <span class="ranking ranking20">#9</span>
                                        Ecbert
                                        <span class="ranking ranking20">#7</span>
                                        Lea
                                    </div>
                                    <div class="col-2 col-xl-2">36 loyal members</div>
                                    <div class="col-3 col-xl-2 text-end factive "> Not active yet</div>
                                </div>
                                <div class="family-rankings-table row text-start" style="text-transform: uppercase;">
                                    <div class="col-12 col-xl-2">
                                        <strong><span
                                                style="display: inline-block; width: 15px; margin-right: 5px;">#7</span>
                                            Reichsthaler
                                        </strong>
                                    </div>
                                    <div class="col-7 col-xl-6">
                                        <strong>Tops</strong>
                                        <span class="ranking ranking20">#1</span>
                                        Zz
                                        <span class="ranking ranking20">#2</span>
                                        Lovays
                                        <span class="ranking ranking20">#3</span>
                                        Arreat
                                    </div>
                                    <div class="col-2 col-xl-2">35 loyal members</div>
                                    <div class="col-3 col-xl-2 text-end factive "> Not active yet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>

                        $(document).ready(function () {
                            $(".overflow-auto").perfectScrollbar();
                        });

                    </script>
                </div>
            </div>
        </div>


        <div class="bg-data m-3 p-3">
                <span style="float: left; font-weight: bolder;">
                    <strong>2,315</strong> Online gangsters
                </span>
            <span style="float: right; font-weight: bolder;">
                    ROUND #40 - DAY 1
                </span>
        </div>
    </div>
    <footer class="mt-3 text-white-50">
        <span
            class="color">&copy; 2004 - {{ date('Y') }} - {{ config('app.name') }} PUBLISHING LTD (Company Reg: )</span>
    </footer>

</div>


<div id="game-disclaimer-wrapper" data-title="Disclaimer">
    <div class="gameDisclaimer">

        <p>Please read this disclaimer carefully before signing up to play Omerta. </p>

        <p>By registering an account, you are agreeing to be bound by the terms of this document. If you don not agree
            to the terms of this document, do not register or log in to Omerta. </p>


        <h2>Rights:</h2>
        <ul>
            <li>You may play Omerta for fun.</li>
            <li>You may play Omerta for free.</li>
            <li>You may tell anyone about Omerta.</li>
            <li>You may play Omerta on any computer to which you have access.</li>
            <li>You may post links or refer to Omerta on other internet sites or via other media of your own choosing.
            </li>
        </ul>

        <h2>Responsibilities:</h2>

        <b>You may not:</b>
        <ol>
            <li>Register more than one active account per person.</li>
            <li>Exploit any bugs in the game code or the structure of the game for the furtherment of you character in
                Omerta.
            </li>
            <li>Hack or attempt to hack or otherwise interfere with the server(s) on which Omerta is running .</li>
            <li>Use any tools, bots, spiders or similar software based devices which automatically or semi-automatically
                engage in gameplay in Omerta.
            </li>
            <li>Engage in discriminate of any kind against other players or personnel of Omerta or engage in threatening
                behaviour outside of what would be deemed acceptable gameplay.
            </li>
        </ol>

        <h2>Additionally:</h2>
        <ol>
            <li>The source code of Omerta is the copyrighted property of Omerta Game Limited.</li>
            <li>The Software is licensed and not given to you, and Omerta Game LTD owns all copyright, trade secrets,
                patents and all other proprietary rights in the Software and in the Omerta game concept.
            </li>
            <li>You expressly acknowledge and agree that registering at Omerta and playing Omerta is at your sole
                risk.
            </li>
            <li>Omerta and any related documentation or materials are provided 'As seen' and without internal or
                external warranty of any kind.
            </li>
            <li>Appointed in game crewmembers may delete, inactivate or downgrade your account without recourse to
                complaint by yourself and excluding any duty to justify such actions.
            </li>
        </ol>

        <h2>PURCHASES OF DIGITAL GOODS:</h2>
        <ol>
            <li>Any purchase of digital goods, including but not limited to in-game Credits are non-refundable donations
                to Omerta Publishing Ltd.
            </li>
            <li>All purchases are considered donations and Omerta Publishing Ltd has no obligation to offer anything in
                exchange for purchases made.
            </li>
        </ol>
    </div>
</div>

<script>

    function openDisclaimer() {
        var $disclaimer = $('#game-disclaimer-wrapper'),
            title = $disclaimer.data('title');

        var $prompt = $.prompt([{
            title: title,
            html: $disclaimer.html(),
            zIndex: 99999
        }]);

        $prompt.on('impromptu:loaded', function (e) {

            if (typeof ($.perfectScrollbar) === 'function') {
                $(".gameDisclaimer").perfectScrollbar();
            }

        });
    }

</script>
<div class="modal fade" id="forgotModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen-sm-down modal-lg">
        <div class="modal-content register-container">
            <form action="?nojs=1&act=login" method="post" data-bind="submit: doForgottenPassword" id="forgotbox">
                <p class="text-header px-4">Forgot Password?</p>
                <p>Provide the email adress you used for registration in order to reset your password.</p>

                <div class="row justify-content-center p-3">
                    <div class="col-11 col-lg-5 mb-3">
                        <div id="emailform">
                            <div class="pure-control-group">
                                <label for="input-mail">Email</label>
                                <input id="input-mail" type="email" name="email" required="required"
                                       placeholder="corleone@gov.it"
                                       class="w-100"
                                       data-bind="hasfocus: !showRegisterForm(), value: user_email, valueUpdate: 'afterkeydown', css: {completed: user_email().length > 0}, style: { 'border-color': formErrors()  ? 'red' : '#717171' }">
                            </div>

                            <div class="row mt-3">
                                <div class="col-12 col-md-6 mb-2 mb-md-0">
                                    <input type="reset" class="w-100 btn btn-grey" value="Cancel"
                                           data-bs-dismiss="modal">
                                </div>

                                <div class="col-12 col-md-6">
                                    <button type="submit" class="w-100 btn btn-action">Recover</button>
                                    @csrf

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
</div>

<script>

    $(document).ready(function () {
        window.forgotModal = new bootstrap.Modal('#forgotModal');
    });

</script>
<div class="modal fade" id="loginModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen-sm-down modal-lg">
        <div class="modal-content register-container">
            <form action="?nojs=1&act=login" method="post" data-bind="submit: checkLogin" id="loginbox">
                <p class="text-header px-4">Welcome to Omerta. The Godfather of Mafia games</p>

                <div class="row justify-content-center p-3">
                    <div class="col-11 col-lg-5 mb-3">
                        <div id="emailform">
                            <div class="pure-control-group">
                                <label for="input-mail">Email</label>
                                <input id="input-mail" type="email" name="email" required="required"
                                       placeholder="corleone@gov.it"
                                       class="w-100"
                                       data-bind="hasfocus: !showRegisterForm(), value: user_email, valueUpdate: 'afterkeydown', css: {completed: user_email().length > 0}, style: { 'border-color': formErrors()  ? 'red' : '#717171' }">
                            </div>
                            <div class="pure-control-group mt-4">
                                <label for="input-mailc">Password </label>
                                <input id="input-mailc" type="password" name="pass" required="required"
                                       placeholder="*********"
                                       class="w-100"
                                       data-bind="value: user_password,valueUpdate: 'afterkeydown', css: {completed: user_password().length > 0}, style: { 'border-color': formErrors() ? 'red' : '#717171' }">

                                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                            </div>

                            <div class="pure-controls mt-0 text-end">
                                <a data-bs-toggle="modal" data-bs-target="#forgotModal" href="#"
                                   title="Forgot Password?"
                                   class="forgotlink">Forgot Password?</a>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12 col-md-6 mb-2 mb-md-0">
                                    <input type="reset" class="w-100 btn btn-grey" value="Cancel"
                                           data-bs-dismiss="modal">
                                </div>

                                <div class="col-12 col-md-6">
                                    <button type="submit" class="w-100 btn btn-action">Login</button>
                                </div>

                            </div>
                            @include('facebook.login-Reg', array('Name' => 'Login with Facebook') )

                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
</div>
<div class="modal fade" id="signupModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen-sm-down modal-lg">
        <div class="modal-content register-container">
            <form id="register-form" data-bind="submit: doRegister" action="#" method="POST">
                <p class="text-header px-4">Your new life as Omerta Gangster starts here</p>

                <div class="row justify-content-center">
                    <div class="col-11 col-lg-5 mb-3">
                        <div id="emailform">
                            <div class="pure-control-group">
                                <label for="input-mail">Email <span class="reqfield">*</span></label>
                                <input data-bind="hasfocus: showRegisterForm()" id="input-mail"
                                       name="mail" required="required" type="email"
                                       class="w-100"
                                       placeholder="your@email.com">
                            </div>


                            <div class="pure-controls text-start mt-2 mb-4">
                                <label class="pure-checkbox">
                                    <input name="mailme" value="yes" type="checkbox"> Subscribe me to newsletter..
                                </label>
                                <label class="pure-checkbox">
                                    <input id="input-disclaimer" name="agree" value="yes" type="checkbox"
                                           required="required"> I have read and agree to the
                                    <a href="javascript:openDisclaimer()"><b>Disclaimer</b></a> <span
                                        class="reqfield">*</span>
                                </label>
                            </div>

                            <div class="row">
                                <div class="col-12 col-md-6 mb-2 mb-md-0">
                                    <input type="reset" class="btn btn-big btn-grey" value="Cancel"
                                           data-bs-dismiss="modal">
                                </div>

                                <div class="col-12 col-md-6">
                                    <button type="submit"
                                            class="btn btn-big btn-action">Register
                                    </button>
                                </div>

                            </div>

                            @include('facebook.login-Reg', array('Name' => 'Register with Facebook') )

                            @csrf

                        </div>
                    </div>
                </div>
            </form>


        </div>
    </div>
</div>
<script type="text/javascript">
    var flashError = 'Error';
    var flashSuccess = 'Success';
</script>


<script type="text/javascript">
    var hmessage = hmessage || {};
    hmessage.errors = hmessage.errors || [];
    hmessage.success = hmessage.success || [];

    hmessage.promptErrors = function (errors) {
        if (!(errors instanceof Array)) {
            return;
        }

        if (errors.length === 0) {
            return;
        }

        $.each(errors, function (index, value) {
            errors[index] = '<div class="box-content box-error"><font COLOR="#FFF">' + value + '</font></div>';
        });

        $.prompt([{title: '<span class="box-title box-error">' + flashError + '</span>', html: errors.join("")}]);

    };

    hmessage.promptSuccess = function (success) {
        if (!(success instanceof Array)) {
            return;
        }

        if (success.length === 0) {
            return;
        }

        $.each(success, function (index, value) {
            success[index] = '<div class="box-content box-success text-white">' + value + '</div>';
        });

        $.prompt([{title: '<span class="box-title box-success">' + flashSuccess + '</span>', html: success.join("")}]);

    };

</script>


<script type='text/javascript'>
    // Run it
    jQuery(document).ready(function ($) {
        ko.applyBindings(new HomepageViewModel());

        // $(document).on('keyup blur change', '#input-mail, #input-mailc, #input-day, #input-month, #input-year', function () {
        //   var $element = $(this);
        //
        //   if (!$element.val() || $element.val().length == 0) {
        //     $element.removeClass('completed');
        //     return;
        //   }
        //
        //   $element.addClass('completed');
        // });
    });
</script>



<script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Omerta",
            "alternateName": "Barafranca",
            "url": "https://barafranca.com",
            "sameAs": "https://www.facebook.com/Omerta3/"
        }

</script>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>

</body>
</html>
