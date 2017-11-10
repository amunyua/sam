@extends('layouts.app')
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
@section('content')

    <section class="content-header">
    @section("pageTitle","Products")
    @section("pageSubtitle","create, update and delete Products")

    @section("breadcrumbs")
        <li>Home</li>
        <li>Products</li>
        @endsection
    </section>
        <div class="col-md-12" id="products-page">
            <div class="box box-info box-solid">
                <div class="nav-tabs-custom" style="background: none;border: 0;margin: 0;box-shadow: none;padding: 5px;">
                <ul class="nav nav-tabs">
                    {{--<li><a href="#product_cat_tab" data-toggle="tab">Product Categories</a></li>--}}
                    <li class="active"><a href="#activity" data-toggle="tab">Products</a></li>
                    <li><a href="#settings" data-toggle="tab">Menus</a></li>
                </ul>
                <div class="tab-content" style="background: rgba(255,255,255,0.7)">
                    <!-- /.tab-pane -->
                    <div class="active tab-pane" id="activity" >
                        @include('flash::message')
                        @include('adminlte-templates::common.errors')
                        @include('products.product-tab')
                    </div>
                    <div class="tab-pane" id="settings">
                        <div id="menu-tab">
                        @include('products.menu')
                        </div>
                    </div>
                    <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
            </div>
            <!-- /.nav-tabs-custom -->
                <div class="overlay" style="display: none" id="p-overlay">
                    <i class="fa fa-spinner fa-spin"></i>
                </div>
            </div>
        </div>

@endsection

@push('js')
    <script src="{{ asset('js/products/products.js') }}"></script>
    @endpush

