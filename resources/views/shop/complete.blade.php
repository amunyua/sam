@section('title','Home')
@extends('layouts.checkout')
@push('css')
    <link rel="stylesheet" href="{{ asset('front/assets/css/food-panda.css')}}" />
    <style>
        section{
            padding: 0;
        }
        .js-login-register-flow .add-mobile form .form-group{
            margin-top: 0px;
        }
    </style>
@endpush
@section('content')

    <div class="page-wrapper js-sticky-height-calculate-container">

        <div class="content-wrapper">

            <div class="checkout-steps-wrapper">
                <ul class="checkout-steps" data-active-checkout-step="customer-details">


                    <li class="checkout-step" data-section="customer-details">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">1</p>

                            <p class="checkout-step-text">Your Details</p>
                        </div>
                    </li>

                    <li class="checkout-step " data-section="review-order">
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
                    <li class="checkout-step active-checkout-step" data-section="complete">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">4</p>

                            <p class="checkout-step-text">Complete</p>
                        </div>
                    </li>
                </ul>
<br>
<br>
                <div class="login-register-title">
                    Congratulations!
                </div>
            </div>

<br>
            <main class="js-sticky-height-calculate-container">
                <div class="container">
                    @if(!is_null($cart))
                        <?php $custDetails = $cart['customerDetails']; ?>
                            <div class="mini-cart-details" style="box-shadow: none;background: none;">
                                <div class="alert alert-success">
                                    <p> Dear {{ $custDetails['sender_name'] }} your order has been confirmed and an sms has been sent to {{ $custDetails['receiver_name'] }}<br>
                                        Kindly remind them to go and redeem.<br><br>
                                        Thank you for for shopping with us
                                    </p>
                                </div>
                            </div>
                        @endif


                    <div class="mini-cart-details" style="box-shadow: none;background: none;margin-top: 20px;height: initial">
                        <a href="{{ url('/') }}" class="btn btn-success btn-block"style="background-color: #6dbc92;border-color: #6dbc92;">Continue shopping</a>
                    </div>
                </div>
            </main>
        </div>


    </div>
@endsection
@push("js")
    <script type="text/javascript" src="{{ asset('front/js/form-validation.js')}}"></script>
    <script type="text/javascript" src="{{ asset('front/js/form-validation-framework.js')}}"></script>

    {{--<script src="{{URL::asset('js/shop-front.js') }}"></script>--}}


@endpush