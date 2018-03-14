@section('title','Home')
@extends('layouts.checkout')
@push('css')
    <link rel="stylesheet" href="{{ asset('front/assets/css/food-panda.css')}}" />
    <style>
        section{
            padding: 0;
        }
    </style>
@endpush
@section('content')

    <div class="page-wrapper js-sticky-height-calculate-container">

        <div class="content-wrapper">
            <div class="checkout-steps-wrapper">
                <input type="hidden" id="cart-url" value="{{ url('getCart') }}">
                <input type="hidden" value="{{ url('prodMenu') }}" id="prod-action">
                <input type="hidden" value="{{ url('checkout') }}" id="checkout-url">
                <input type="hidden" value="{{ url('place-order') }}" id="place-order">


                <ul class="checkout-steps" data-active-checkout-step="review-order">


                    <li class="checkout-step " data-section="customer-details">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title"></p>

                            <p class="checkout-step-text">Your Details</p>
                        </div>
                    </li>

                    <li class="checkout-step active-checkout-step" data-section="review-order">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">2</p>

                            <p class="checkout-step-text">Review order</p>
                        </div>
                    </li>

                    <li class="checkout-step " data-section="checkout">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">3</p>

                            <p class="checkout-step-text">Place Order</p>
                        </div>
                    </li>
                    <li class="checkout-step" data-section="complete">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">4</p>

                            <p class="checkout-step-text">Complete</p>
                        </div>
                    </li>
                </ul>

                <div class="login-register-title">
                </div>
            </div>
            <main class="js-sticky-height-calculate-container">
                <div class="container">
                    <div class="checkout-review js-sticky-height-calculate-container ">
                        @if(!is_null($partner))
                        <div class="checkout-review-order" style="width: 98%">
                                <div class="checkout-review-order__inner">
                                    <div class="vendor review-order">
                                        <div class="vendor__inner">
                                            <div class="vendor__image">
                                                <img alt="{{ $partner->store_name }}" width="80" height="80" src="{{ $partner->image }}" data-src="{{ $partner->image }}" class="lazy-loaded">
                                            </div>

                                            <div class="vendor__details">
                                                <div class="vendor__title">
                                                    {{ $partner->store_name }}
                                                </div>

                                                <div class="vendor__availability">
                                                <p class="vendor__opening-hours">
                                                   {{ $partner->description }}
                                                </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkout-review-footer">
                                        <div class="totals">
                                            <table class="table" id="tb2">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th style="text-align: right;"></th>
                                                </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="checkout-review-footer cart-summary" style="display: none;">
                                        <div class="totals">
                                            <table>
                                                <tfoot>

                                                <tr class="subtotal">
                                                    <td></td>
                                                    <td class="title">Subtotal</td>
                                                    <td class="price"><span class="total-amount"></span> </td>
                                                </tr>
                                                <tr class="total">
                                                    <td></td>
                                                    <td colspan="2" class="title ">
                                                        <div>
                                                            <span>Total</span>
                                                            <span class="total-price total-amount">

                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td colspan="2">
                                                        <div class="form-group">
                                                            <button onclick="updateCat()" class="btn btn-block btn-success">Proceed </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </main>
        </div>
    </div>
@endsection
@push("js")
    <script type="text/javascript" src="{{ asset('front/js/form-validation.js')}}"></script>
    <script type="text/javascript" src="{{ asset('front/js/form-validation-framework.js')}}"></script>
    {{--<script type="text/javascript" src="{{ asset('front/js/food-panda.js')}}"></script>--}}
    {{--<script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>--}}
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="{{URL::asset('js/shop-front.js') }}"></script>
    @endpush