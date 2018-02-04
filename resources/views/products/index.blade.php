@extends('layouts.dt-1')
@section('css')
    <style>
        .box-unstyled{
            padding: 0;
            border: 0;
            background: none;
            margin: 0;
            box-shadow: none;

        }
    </style>

    @endsection
@section("pageTitle","Products & Menus")
@section('content')

{{--    <section class="content-header">
    @section("pageTitle","Products")
    @section("pageSubtitle","create, update and delete Products")

    @section("breadcrumbs")
        <li>Home</li>
        <li>Products</li>
        @endsection
    </section>--}}
        {{--<div class="col-md-12" id="products-page">--}}
            {{--<div class="box box-info box-solid">--}}
                {{--<div class="nav-tabs-custom" style="background: none;border: 0;margin: 0;box-shadow: none;padding: 5px;">--}}
                {{--<ul class="nav nav-tabs">--}}
                    {{--<li><a href="#product_cat_tab" data-toggle="tab">Product Categories</a></li>--}}
                    {{--<li class="active"><a href="#activity" data-toggle="tab">Products</a></li>--}}
                    {{--<li><a href="#settings" data-toggle="tab">Menus</a></li>--}}
                {{--</ul>--}}
                {{--<div class="tab-content" style="background: rgba(255,255,255,0.7)">--}}
                    {{--<!-- /.tab-pane -->--}}
                    {{--<div class="active tab-pane" id="activity" >--}}
                        {{--@include('flash::message')--}}
                        {{--@include('adminlte-templates::common.errors')--}}
                        {{--@include('products.product-tab')--}}
                    {{--</div>--}}
                    {{--<div class="tab-pane" id="settings">--}}
                        {{--<div id="menu-tab">--}}
                        {{--@include('products.menu')--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<!-- /.tab-pane -->--}}
                {{--</div>--}}
                {{--<!-- /.tab-content -->--}}
            {{--</div>--}}
            {{--<!-- /.nav-tabs-custom -->--}}
                {{--<div class="overlay" style="display: none" id="p-overlay">--}}
                    {{--<i class="fa fa-spinner fa-spin"></i>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
<div class="card" id="products-page">
    <div class="card-header card-header-tabs" data-background-color="rose">
        <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
                {{--<span class="nav-tabs-title">Tasks:</span>--}}
                <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="active">
                        <a href="#profile" data-toggle="tab">
                            <i class="material-icons">extension</i> Product Management
                            <div class="ripple-container"></div>
                        </a>
                    </li>
                    <li class="">
                        <a href="#messages" data-toggle="tab">
                            <i class="material-icons">code</i> Menu
                            <div class="ripple-container"></div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div class="card-content">
        <div class="tab-content">
            <div class="tab-pane active" id="profile">
                @include('flash::message')
                @include('adminlte-templates::common.errors')
                @include('products.product-tab')
            </div>
            <div class="tab-pane" id="messages">
                @include('products.menu')
            </div>

        </div>
    </div>
</div>
@endsection

@push('js')
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="{{ asset('js/products/products.js') }}"></script>
    @endpush

