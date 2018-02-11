@section('title','Home')
@extends('layouts.home')
@push('css')
    <link rel="stylesheet" href="{{ asset('/front/assets/spinner/jm.spinner.css')}}" />

    <style>
        .spinner{
            position: fixed;
            background: white;
            padding-left: 48%;
            padding-top: 20%;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
        }
    </style>
    @endpush
@section('content')
    {{--<div class="box well">--}}
        <div class="spinner large">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    {{--</div>--}}

    <nav class="navbar navbar-default navbar-fixed-top nav-transparent overlay-nav sticky-nav nav-white nav-border-bottom no-transition" role="navigation">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-6"><a class="logo-light" href="index.html"><img alt="" src="images/logo-white.png" class="logo" /></a><a class="logo-dark" href="index.html"><img alt="" src="images/logo-light.png" class="logo" /></a></div>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                </div>
                <div class="col-md-9 text-right">
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#slider" class="inner-link">Home</a> </li>
                            <li><a href="#features" class="inner-link">About</a> </li>

                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
    </nav>
    <!--end of navigation-->
    <section class="parallax2 parallax-fix full-screen no-padding scroll-to-down" onclick="scrollToDown()" id="slider">
        <div class="opacity-full bg-dark-gray"></div>
        <img class="parallax-background-img" src="{{ asset('img/homepage-splash.jpg') }}" alt="" />
        <div class="container full-screen position-relative">
            <div class="slider-typography">
                <div class="slider-text-middle-main">
                    <div class="slider-text-middle slider-text-middle2">
                        <div class="separator-line bg-white"></div>
                        <span class="slider-subtitle2 white-text">Welcome to the world<br>best leading gift online gift shop</span>
                        {{--<a class="btn-small-white btn margin-six inner-link" href="#shops">Go to shops!</a>--}}
                        {{--<a class="btn-small-white btn margin-six inner-link" href="#features">Go Emotions!</a>--}}
                    </div>
                </div>
            </div>
        </div>
        {{--<div class="scroll-down"><a href="#shops" class="inner-link"><i class="fa fa-angle-down"></i></a></div>--}}
    </section>
    <!-- key person section -->
    <section id="features" class="wow fadeIn">
        <div class="container">
            <div class="row">
                <!-- section title -->
                <div class="col-md-12 text-center">
                    <h5 class="section-title no-padding-bottom">Partner shops</h5>
                </div>
                <!-- end section title -->
                {{--<div class="col-md-5 col-sm-10 center-col text-center margin-six wow fadeIn">--}}
                    {{--<h4 class="gray-text">We are a multi-discipline design studio with an extensive network of the finest talent, allowing us to build the perfect team to respond to your brief. </h4>--}}
                {{--</div>--}}
            </div>
            <div class="row margin-six">
                @if(count($stores))
                    <?php $milSec = 300;?>
                    @foreach($stores as $store)
                        <!-- key person item -->
                        <a href="{{ url("partner/".$store->id) }}">
                            <div class="col-md-4 col-xs-4 bottom-margin text-center wow fadeInUp" data-wow-duration="{{$milSec}}ms">
                                <div class="key-person">
                                    <div class="key-person-img"><img src="{{ $store->image }}" width="500" height="200" alt=""></div>
                                    <div class="key-person-details">
                                        <span class="person-name black-text">{{ $store->store_name }}</span> <span class="person-post">{{ $store->description }}</span>
                                        <div class="separator-line bg-yellow"></div>
                                        {{--<div class="person-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-google-plus"></i></a></div>--}}
                                        {{--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>--}}
                                    </div>
                                </div>
                            </div>
                        </a>
                            <!-- end key person item -->
                        @endforeach
                    @endif


            </div>
        </div>
    </section>
    <!-- end key person section -->
@endsection
@push('js')
    <script src="{{ asset('front/js/home/home.js') }}"></script>
    {{--<script src="{{ asset('js/home/home.js') }}"></script>--}}
    {{--<script src="{{  asset('assets/spinner/jm.spinner.js') }}"></script>--}}

@endpush
