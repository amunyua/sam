@section('title','Home')
@extends('layouts.sub')
@push('css')
    <link rel="stylesheet" href="{{ asset('front/assets/css/food-panda.css')}}" />
    <style>
        section{
            padding: 0;
        }
    </style>
    @endpush
@section('content')
    <!-- head section -->
    @if(!empty($partner))
    <section class="page-title parallax3 parallax-fix page-title-large page-title-shop" style="padding-top:100px;min-height: 350px;">
        <div class="opacity-light bg-dark-gray"></div>
        <img class="parallax-background-img" src="{{ asset("img/homepage-splash.jpg") }}" alt="" />
        <div class="container">
            <div class="row">

                <div class="col-md-12 col-sm-12 wow fadeIn">

                        <div class="vendor-heading">
                            <div class="vendor-image">
                                <img alt="{{ $partner->store_name }}" width="80" height="80" src="{{ $partner->image }}" data-src="{{ $partner->image }}" class="lazy-loaded">
                            </div>

                            <div class="vendor-heading-details-box-container">
                                <div class="vendor-heading-details-box">
                                    <div class="vendor__title">
                                        <h1 itemprop="name">{{ $partner->store_name }}</h1>
                                    </div>

                                    {{--<ul class="vendor__cuisines"><li itemprop="servesCuisine"><a href="/restaurants/cuisines/continental">Continental</a></li><li itemprop="servesCuisine"><a href="/restaurants/cuisines/chicken">Chicken</a></li></ul>--}}
                                   {{-- <div class="vendor__ratings-container">
                                        <div class="vendor__ratings">
                                            <div class="rating  ">
                                                <i class="icon icon-star-ratings-full active-star"></i><i class="icon icon-star-ratings-full active-star"></i><i class="icon icon-star-ratings-full active-star"></i><i class="icon icon-star-ratings-full active-star"></i><i class="icon icon-star-ratings-half half-star-left active-star"></i>
                                                <i class="icon icon-star-ratings-half half-star-right inactive-star"></i>
                                                <span class="rating-score hide" itemprop="ratingValue" content="4.6">4.6</span>

                                                <span class="review">
                                                    (<span itemprop="ratingCount">1272</span>)
                                                </span>
                                            </div>
                                        </div>
                                    </div>--}}
                                </div>
                            </div>
                        </div>


                    <!-- page title tagline -->
                    {{--<span class="text-uppercase white-text">Since 1982 brand</span>--}}
                    {{--<!-- end title tagline -->--}}
                    {{--<!-- page title -->--}}
                    {{--<h1 class="white-text">Collection</h1>--}}
                    <!-- end page title -->
                </div>
                {{--<div class="col-md-12 col-sm-12 breadcrumb text-uppercase margin-three no-margin-bottom wow fadeIn">--}}
                    {{--<!-- breadcrumb -->--}}
                    {{--<ul>--}}
                        {{--<li><a class="white-text" href="#">Home</a></li>--}}
                        {{--<li class="white-text"><a class="white-text" href="#">Shop</a></li>--}}
                        {{--<li class="white-text">Collection</li>--}}
                    {{--</ul>--}}
                    {{--<!-- end breadcrumb -->--}}
                {{--</div>--}}
            </div>
        </div>
    </section>
    <!-- end head section -->
    <!-- content section -->
    <div class="container-alex">
        <div class="breadcrumbs">
            <div class="container">
                <ol class="breadcrumbs__pages">
                    <li class="breadcrumbs__pages__item" >
                        <a href="{{ url("index") }}" itemprop="url">
                            <span itemprop="title">Home</span>
                        </a>
                    </li>
                    <li class="breadcrumbs__pages__item" >
                        {{--<a href="https://food.jumia.co.ke/restaurants" itemprop="url">--}}
                            <span itemprop="title">Partners</span>
                        </a>
                    </li>
                    <li class="breadcrumbs__pages__item" >
                        <span itemprop="title">{{ $partner->store_name }}</span>
                    </li>

                </ol>
            </div>
        </div>


        <main class="js-sticky-height-calculate-container">
            <div class="container" style="width: 80%">

                <div class="vendor-view-container js-sticky-height-calculate-container js-tooltip-container" >
                    <section class="row">
                        <div class="cart-container cart-container--vendor">
                            <div class="js-sticky-element" style="">
                                <div class="cart cart--vendor">
                                    <div class="cart__inner">
                                        <div class="cart__content">
                                            <div class="header-mobile-container header-mobile-container__cart">
                                                <div class="header-mobile">
                                                    <div class="header-mobile__title header-mobile__your-basket">
                                                        <i class="icon icon-left-arrow"></i>
                                                        <span>Your Basket</span>
                                                    </div>

                                                    <div class="header-mobile__edit-your-basket">
                                                        <span>Edit order</span>
                                                    </div>
                                                </div>
                                            </div>

                                           {{-- <div class="cart__header__head ">
                                                <div class="cart__header__head__delivery-time">
                                                    <div class="cart__header__head__delivery-time__label">
                                                        Estimated delivery time
                                                    </div>
                                                    <div class="cart__header__head__delivery-time__time">

                                                        <span class="delivery_time_minutes">60</span>

                                                        <span class="delivery_time_label">minutes</span>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>--}}

                                            <div class="cart__header">
                                                <div class="cart__header__title">
                                                    <span class="default-delivery-label">Your order</span>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>

                                            <div class="cart__empty cart__empty--inside">
                                                <div class="cart__empty__icon-container">
                                                    <i class="icon icon-basket"></i>
                                                    <span class="no-items-text">Add menu items into your basket</span>
                                                </div>
                                            </div>




                                        </div>

                                        <div class="cart__empty cart__empty--outside">
                                            <ul class="cart__empty__elements">
                                                <li>
                <span class="title">
                    Delivery fee:
                                    </span>
                                                    <span class="value">
                    200Ksh
                </span>
                                                </li>
                                                <li>
                                                    <span class="title">Accepts Vouchers</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {{--<script>--}}

                                        {{--FD--}}
                                            {{--.setControllerConfig('Cart', 'enable', true)--}}
                                            {{--.setControllerConfig('Cart', 'cartRefreshUrl', "\/cart\/show-cart\/k8jp")--}}
                                            {{--.setControllerConfig('Cart', 'showPopupIfMinimumOrderAmountIsNotReached', false)--}}
                                        {{--;--}}
                                    {{--</script>--}}
                                </div>
                            </div>

                        </div>

                        <div class="vendor-body-container">
                            <ul class="nav nav-tabs vendor-tabs">
                                <li class="vendor-tabs__menu active">
                                    <a href="#menu" class="js-tab">Menu</a>
                                </li>
                                <li class="vendor-tabs__info">
                                    <a href="#info" class="js-tab">Info</a>
                                </li>
                            </ul>

                            <section class="tab-content">
                                <div class="tab-pane" id="info">
                                    <div class="vendor-info">
                                        <h2 class="vendor-info__title">
                                            Grub Donuts Info
                                        </h2>

                                        <div class="vendor-info__cuisines">
                                            <div class="vendor-info__cuisines__title">
                                                Cuisines
                                            </div>

                                            <ul class="vendor-info__cuisines__list"><li class="vendor-info__cuisines__list__item" itemprop="servesCuisine" content="Cakes &amp; Pastries"><a href="/restaurants/city/nairobi/cuisines/cakespastries">Cakes &amp; Pastries in Nairobi</a></li></ul>    </div>

                                        <div class="vendor-info__schedules">
                                            <hr>
                                            <div class="vendor-info__schedules__delivery">
                                                <div class="vendor-info__schedules__title">
                                                    Delivery hours
                                                </div>
                                                <ul class="schedules">
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Monday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Monday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Tuesday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Tuesday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Wednesday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Wednesday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Thursday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Thursday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Friday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Friday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Saturday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Saturday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  isToday">
            <span class="schedules__item__day">
                Sunday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Delivery hours">
                                                <meta itemprop="dayOfWeek" content="Sunday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="vendor-info__schedules__pickup">
                                                <div class="vendor-info__schedules__title">
                                                    Takeway hours
                                                </div>
                                                <ul class="schedules">
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Monday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Monday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Tuesday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Tuesday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Wednesday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Wednesday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Thursday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Thursday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Friday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Friday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  ">
            <span class="schedules__item__day">
                Saturday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Saturday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                    <li class="schedules__item  isToday">
            <span class="schedules__item__day">
                Sunday
            </span>
                                                        <span class="schedules__item__times">
                                    <span class="schedules__item__time" itemprop="openingHoursSpecification" itemscope="" itemtype="http://schema.org/OpeningHoursSpecification">
                        07:00 - 18:00
                                                    <meta itemprop="description" content="Takeway hours">
                                                <meta itemprop="dayOfWeek" content="Sunday">
                                                    <meta itemprop="opens" content="07:00:00">
                            <meta itemprop="closes" content="18:00:00">
                                            </span>
                            </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <p class="vendor-info__schedules__closed-notice">
                                                Please note: the restaurant may be open before and after the Jumia Food hours: 00:00 - 22:00
                                            </p>
                                        </div>

                                        <div class="vendor-info__overview">
                                            <hr>
                                            <dl class="vendor-info__overview__list">
                                                <dt class="vendor-delivery-fee">Delivery fee</dt>
                                                <dd>

                                                    From 200Ksh
                                                </dd>

                                                <dt class="vendor-pickup-time">Pickup Time</dt>
                                                <dd>
                                                    24h
                                                </dd>

                                                <dt class="vendor-delivery-time">Delivery time</dt>
                                                <dd>
                                                    1h
                                                </dd>
                                            </dl>
                                        </div>


                                        <div class="vendor-info__address">
                                            <hr>
                                            <div class="vendor-info__address__title">
                                                Address
                                            </div>
                                            <address class="vendor-info__address__content" itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                                                <span itemprop="streetAddress">Maua close, Kaka house, Fourth floor jumia food</span>, <span itemprop="addressRegion">Nairobi</span>    </address>
                                            <div class="vendor-info__address__map" itemprop="geo" itemscope="" itemtype="http://schema.org/GeoCoordinates">
                                                <meta itemprop="latitude" content="-1.262162">
                                                <meta itemprop="longitude" content="36.803055">
                                            </div>
                                        </div>

                                        <div class="vendor-info__payment-types">
                                            <hr>
                                            <div class="vendor-info__payment-types__title">
                                                Payment types
                                            </div>
                                            <dl class="vendor-info__payment-types__list" itemprop="paymentAccepted">
                                                <dt class="vendor-info__payment-types__list__title">Cash On Delivery</dt>
                                                <dt class="vendor-info__payment-types__list__title">Lipa na Mpesa</dt>
                                                <dt class="vendor-info__payment-types__list__title">Pay with Sodexo</dt>
                                            </dl>
                                        </div>



                                    </div>
                                </div>
                                <div class="tab-pane active" id="menu">
                                    <div class="vendor-menu">
                                        <div class="header-mobile-container header-mobile-container__categories" style="display: block; overflow: hidden; height: 0.138215px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;">
                                            <div class="header-mobile">
                                                <div class="header-mobile__title header-mobile__selected-category">
                                                    <span class="selected-category-text">
                                                        Donuts
                                                    </span>
                                                    <span class="filtered-results-text">Filtered results</span>

                                                    <i class="icon icon-down-arrow"></i>
                                                </div>
                                                <div class="header-mobile__title header-mobile__filter-button">
                                                    <i class="icon icon-filter"></i>
                                                </div>
                                                <div class="clear"></div>
                                            </div>

                                            <div class="header-mobile__contents">
                                                <div class="header-mobile__contents__categories" style="max-height: 592px;">
                                                    <ul>
                                                        <li>
                                                            <a href="#menu_donuts-pre-order-only_category_donuts">
                                                                Donuts
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#menu_nuggets-pre-order-only_category_nuggets">
                                                                Nuggets
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="header-mobile-container header-mobile-container__filters">
                                            <div class="header-mobile">
                                                <div class="header-mobile__title header-mobile__title__filters">
                                                    <div class="header-mobile__title__filters__back">
                                                        <i class="icon icon-left-arrow"></i>
                                                    </div>

                                                    <span>Filters</span>

                                                    <div class="header-mobile__title__filters__clear">Clear all</div>
                                                </div>
                                            </div>

                                            <div class="header-mobile__contents">
                                                <div class="header-mobile__contents__filters" style="max-height: 592px;">
                                                    <ul class="header-mobile__contents__filters__categories">

                                                        <li class="header-mobile__contents__filters__categories__category">
                                                            <div class="header-mobile__contents__filters__categories__category__title">Origin</div>
                                                            <div class="header-mobile__contents__filters__categories__category__filters">
                                                                <ul>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1003">Fish</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1004">Halal</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1007">Kosher</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1001">Meat</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1006">Organic</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1002">Pork</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1005">Vegan</li>
                                                                    <li data-dish-characteristic-category="food-origin" data-dish-characteristic-code="1000">Vegetarian</li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li class="header-mobile__contents__filters__categories__category">
                                                            <div class="header-mobile__contents__filters__categories__category__title">Spiciness</div>
                                                            <div class="header-mobile__contents__filters__categories__category__filters">
                                                                <ul>
                                                                    <li data-dish-characteristic-category="spicy" data-dish-characteristic-code="1008">Mild spicy</li>
                                                                    <li data-dish-characteristic-category="spicy" data-dish-characteristic-code="1009">Spicy</li>
                                                                    <li data-dish-characteristic-category="spicy" data-dish-characteristic-code="1010">Very Spicy</li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li class="header-mobile__contents__filters__categories__category">
                                                            <div class="header-mobile__contents__filters__categories__category__title">Without</div>
                                                            <div class="header-mobile__contents__filters__categories__category__filters">
                                                                <ul>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1025">Celery</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1018">Cereals containing gluten</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1019">Crustaceans</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1020">Eggs</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1029">Lupin</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1023">Milk</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1030">Molluscs</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1026">Mustard</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1024">Nuts</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1021">Peanuts</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1027">Sesame</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1022">Soybeans</li>
                                                                    <li data-dish-characteristic-category="allergen-alerts" data-dish-characteristic-code="1028">Sulphites</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div class="header-mobile__contents__filters__footer">
                                                        <span class="header-mobile__contents__filters__footer__apply">Apply</span>
                                                        <span class="header-mobile__contents__filters__footer__clear">Clear all filters</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <aside class="vendor-menu__categories">
                                            <div id="sticky-wrapper" class="sticky-wrapper" style="height: 168px;"><div class="js-sticky-element js-vendor-detail-menu-categories" data-sticky-bottom-margin="40" style="">

                                                    <div class="categories__title">Donuts-Pre Order Only</div>
                                                    <ul class="categories__list ">
                                                        <li class="categories__list__item">
                                                            <a href="#menu_donuts-pre-order-only_category_donuts">
                                                                Donuts
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div class="categories__title">Nuggets-Pre-Order Only</div>
                                                    <ul class="categories__list ">
                                                        <li class="categories__list__item">
                                                            <a href="#menu_nuggets-pre-order-only_category_nuggets">
                                                                Nuggets
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div></div>
                                        </aside>

                                        <div class="vendor-menu__menus ">

                                            <section class="menu">
                                                <div class="menu__header">
                                                    <h3 class="menu__title">Donuts-Pre Order Only</h3>
                                                </div>

                                                <article class="menu__category">
                                                    <div class="menu__category__header">
                                                        <div id="menu_donuts-pre-order-only_category_donuts" class="menu__category__title">
                                                            Donuts
                                                        </div>
                                                    </div>



                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Velvet Crumble">


                                                                        Velvet Crumble
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crumbled red velvet cake (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130501" data-clicked_product_name="Velvet Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130501" data-clicked_product_name="Velvet Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164411?productId=130501">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164411?productId=130501">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164411?productId=130501">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Vanilla Crumble">


                                                                        Vanilla Crumble
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crumbled vanilla cake (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130502" data-clicked_product_name="Vanilla Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164412?productId=130502">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164412?productId=130502">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164412?productId=130502">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130502" data-clicked_product_name="Vanilla Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164413?productId=130502">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164413?productId=130502">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164413?productId=130502">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Fudge Crumble">


                                                                        Fudge Crumble
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crumbled fudge cake (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130503" data-clicked_product_name="Fudge Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164414?productId=130503">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164414?productId=130503">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164414?productId=130503">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130503" data-clicked_product_name="Fudge Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164415?productId=130503">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164415?productId=130503">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164415?productId=130503">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Crispy Crumble">


                                                                        Crispy Crumble
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crushed rice crispies with milo granules (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130504" data-clicked_product_name="Crispy Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164416?productId=130504">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164416?productId=130504">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164416?productId=130504">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130504" data-clicked_product_name="Crispy Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164417?productId=130504">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164417?productId=130504">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164417?productId=130504">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Cookie Crumble">


                                                                        Cookie Crumble
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crushed cookies (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130505" data-clicked_product_name="Cookie Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164418?productId=130505">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164418?productId=130505">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164418?productId=130505">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130505" data-clicked_product_name="Cookie Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164419?productId=130505">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164419?productId=130505">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164419?productId=130505">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Oreo Dust">


                                                                        Oreo Dust
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crushed Oreo biscuits (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130506" data-clicked_product_name="Oreo Dust" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164420?productId=130506">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164420?productId=130506">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164420?productId=130506">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130506" data-clicked_product_name="Oreo Dust" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164421?productId=130506">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164421?productId=130506">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164421?productId=130506">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Caramelised Coconut">


                                                                        Caramelised Coconut
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and caramelised coconut (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130507" data-clicked_product_name="Caramelised Coconut" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164422?productId=130507">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164422?productId=130507">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164422?productId=130507">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130507" data-clicked_product_name="Caramelised Coconut" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164423?productId=130507">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164423?productId=130507">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164423?productId=130507">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Cinnamon Sugar">


                                                                        Cinnamon Sugar
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, tossed in a mixture of blended sugar with ground cinnamon and topped with a chocolate drizzle (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130508" data-clicked_product_name="Cinnamon Sugar" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164424?productId=130508">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164424?productId=130508">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164424?productId=130508">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130508" data-clicked_product_name="Cinnamon Sugar" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164425?productId=130508">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164425?productId=130508">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164425?productId=130508">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item has-variations  ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Chevda (Salty, Spicy &amp; Sweet)">


                                                                        Chevda (Salty, Spicy &amp; Sweet)
                                                                    </div>


                                                                    <p class="menu-item__description">Salty, sweet donut bun, topped with a special blend of whipped cream and crushed mild chevda with potato crisps (All our donuts have a salted caramel centre, hence why they come cut in half)</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130509" data-clicked_product_name="Chevda (Salty, Spicy &amp; Sweet)" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164426?productId=130509">
                                                                        <div class="menu-item__variation__title">6 Midi&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164426?productId=130509">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164426?productId=130509">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130509" data-clicked_product_name="Chevda (Salty, Spicy &amp; Sweet)" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164427?productId=130509">
                                                                        <div class="menu-item__variation__title">3 Jumbo&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            720Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-product/vendor/k8jp/product/164427?productId=130509">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164427?productId=130509">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </article>
                                            </section>
                                            <section class="menu">
                                                <div class="menu__header">
                                                    <h3 class="menu__title">Nuggets-Pre-Order Only</h3>
                                                </div>

                                                <article class="menu__category">
                                                    <div class="menu__category__header">
                                                        <div id="menu_nuggets-pre-order-only_category_nuggets" class="menu__category__title">
                                                            Nuggets
                                                        </div>
                                                    </div>



                                                    <article class="menu-item   ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Oreo Nuggets">


                                                                        Oreo Nuggets
                                                                    </div>


                                                                    <p class="menu-item__description">Oreo biscuits inside a velvet cake coating, topped with a powdered sugar, whip cream and chocolate drizzle</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130510" data-clicked_product_name="Oreo Nuggets" data-clicked_product_category_name="Nuggets" data-clicked_product_category_id="14805" data-clicked_product_popular="no" data-item_url="/cart/add-simple-product/vendor/k8jp/product/164428?productId=130510">
                                                                        <div class="menu-item__variation__title">12 (dozen)&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            680Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-simple-product/vendor/k8jp/product/164428?productId=130510">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-simple-product/vendor/k8jp/product/164428?productId=130510">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>

                                                    <article class="menu-item   ">
                                                        <div class="menu-item__content-wrapper">
                                                            <div class="menu-item__content-container">
                                                                <div class="menu-item__content ">

                                                                    <div class="menu-item__title" title="Chocolate Chip Cookie Nuggets">


                                                                        Chocolate Chip Cookie Nuggets
                                                                    </div>


                                                                    <p class="menu-item__description">Chocolate Chip cookies inside a velvet cake coating, topped with a powdered sugar, whip cream and chocolate drizzle</p>
                                                                </div>
                                                                <div class="menu-item__dish-characteristic-container">
                                                                </div>
                                                            </div>


                                                            <div class="menu-item__variations-container  ">
                                                                <ul class="menu-item__variations">

                                                                    <article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130511" data-clicked_product_name="Chocolate Chip Cookie Nuggets" data-clicked_product_category_name="Nuggets" data-clicked_product_category_id="14805" data-clicked_product_popular="no" data-item_url="/cart/add-simple-product/vendor/k8jp/product/164429?productId=130511">
                                                                        <div class="menu-item__variation__title">12 (dozen)&nbsp;</div>

                                                                        <div class="menu-item__variation__price ">
                                                                            750Ksh
                                                                        </div>

                                                                        <form method="get" action="/cart/add-simple-product/vendor/k8jp/product/164429?productId=130511">
                                                                            <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-simple-product/vendor/k8jp/product/164429?productId=130511">
                                                                                <i class="icon icon-add icon-add-to-cart"></i>
                                                                                <i class="icon icon-added icon-added-to-cart"></i>
                                                                            </button>
                                                                        </form>
                                                                    </article>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </article>
                                            </section>
                                        </div>
                                        {{--<script>--}}
                                            {{--FD.setControllerConfig('VendorDetailCategory', 'enable', true);--}}
                                            {{--FD.setControllerConfig('VendorDetailFilters', 'enable', true);--}}
                                        {{--</script>--}}

                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>

                <div class="vendor-siblings-container">
                    <div class="vendor-siblings">
                        <div class="vendor-siblings__title">
                            <h4>Not sure yet?</h4>
                            <span class="vendor-siblings__subtitle">
                Check more restaurants delivering to your location
            </span>
                        </div>
                        <ul class="vendor-siblings__list">
                            <li class="vendor-siblings__list__item">
                                <a href="/restaurant/k9aq/steers" title="Steers">


                                    <img alt="Steers" width="80" height="80" src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k9aq_sqp.jpg?v=20150423192039" data-src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k9aq_sqp.jpg?v=20150423192039" class="lazy-loaded">
                                </a>
                            </li>
                            <li class="vendor-siblings__list__item">
                                <a href="/restaurant/k4jp/debonairs" title="Debonairs Pizza">


                                    <img alt="Debonairs Pizza" width="80" height="80" src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k4jp_sqp.jpg?v=20180122181136" data-src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k4jp_sqp.jpg?v=20180122181136" class="lazy-loaded">
                                </a>
                            </li>
                            <li class="vendor-siblings__list__item">
                                <a href="/restaurant/k4ml/pizza-mojo-oval" title="Pizza Mojo Oval">


                                    <img alt="Pizza Mojo Oval" width="80" height="80" src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k4ml_sqp.jpg?v=20160203125145" data-src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k4ml_sqp.jpg?v=20160203125145" class="lazy-loaded">
                                </a>
                            </li>
                            <li class="vendor-siblings__list__item">
                                <a href="/restaurant/k0mg/grand-cafe" title="Grand Cafe &amp; Indian Cuisine">


                                    <img alt="Grand Cafe &amp; Indian Cuisine" width="80" height="80" src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k0mg_sqp.png?v=20160623122644" data-src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k0mg_sqp.png?v=20160623122644" class="lazy-loaded">
                                </a>
                            </li>
                            <li class="vendor-siblings__list__item">
                                <a href="/restaurant/k9ey/chef-s-chicken" title="Chef's Chicken">


                                    <img alt="Chef's Chicken" width="80" height="80" src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k9ey_sqp.jpg?v=20170123124523" data-src="//africa-public.food.jumia.com/dynamic/production/ke/images/vendors/k9ey_sqp.jpg?v=20170123124523" class="lazy-loaded">
                                </a>
                            </li>
                        </ul>
                        <div class="vendor-siblings__see-all-restaurants">
                            <a class="btn-arrow" href="/restaurants" title="See all restaurants">
                                See all restaurants
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
    @endif
    @endsection
@push("js")
    <script type="text/javascript" src="{{ asset('front/js/fp-head.js')}}"></script>
    <script type="text/javascript" src="{{ asset('front/js/food-panda.js')}}"></script>
    <script>
        FD
            .setControllerConfig('VendorDetailTabs', 'enable', true)
            .setControllerConfig('VendorDetailProductVariation', 'enable', true)
            .setControllerConfig('VendorDetailMenuScrollSpy', 'enable', true)
            .setControllerConfig('ToggleElements', 'enable', true)
            .setControllerConfig('VendorDetailProductVariation', 'maximiumQuantityReachedMessage', 'You&#039;ve already selected the maximum')
        ;
    </script>



    <script type="application/ld+json">
    {"@context":"http:\/\/schema.org","@type":"Restaurant","@id":"k8jp","name":"Grub Donuts","description":null,"url":"https:\/\/food.jumia.co.ke\/restaurant\/k8jp\/grub-donuts","menu":"https:\/\/food.jumia.co.ke\/restaurant\/k8jp\/grub-donuts","logo":"https:\/\/africa-public.food.jumia.com\/assets\/production\/ke\/images\/vendors\/k8jp.jpg?v=20171129151713","paymentAccepted":["Cash On Delivery","Lipa na Mpesa","Pay with Sodexo"],"currenciesAccepted":"KES","servesCuisine":["Cakes & Pastries"],"address":{"@type":"PostalAddress","streetAddress":"Maua close, Kaka house, Fourth floor jumia food","addressCountry":"KE","addressLocality":"Nairobi","addressRegion":"Nairobi"},"aggregateRating":{"@type":"AggregateRating","ratingValue":0,"reviewCount":0},"review":[],"geo":{"@type":"GeoCoordinates","latitude":-1.262162,"longitude":36.803055},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":"Monday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Tuesday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Wednesday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Thursday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Friday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Monday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Tuesday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Wednesday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Thursday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Friday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"07:00:00","closes":"18:00:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"07:00:00","closes":"18:00:00"}],"potentialAction":{"@type":"OrderAction","target":{"@type":"EntryPoint","urlTemplate":"https:\/\/food.jumia.co.ke\/restaurant\/k8jp\/grub-donuts","inLanguage":"en","actionPlatform":["http:\/\/schema.org\/DesktopWebPlatform","http:\/\/schema.org\/MobileWebPlatform"]},"deliveryMethod":["http:\/\/purl.org\/goodrelations\/v1#DeliveryModePickUp","http:\/\/purl.org\/goodrelations\/v1#DeliveryModeOwnFleet"],"priceSpecification":{"@type":"DeliveryChargeSpecification","appliesToDeliveryMethod":"http:\/\/purl.org\/goodrelations\/v1#DeliveryModeOwnFleet","priceCurrency":"KES","price":200,"eligibleTransactionVolume":{"@type":"PriceSpecification","priceCurrency":"KES","price":0}}},"telephone":"254720954283"}
</script>
    @endpush
