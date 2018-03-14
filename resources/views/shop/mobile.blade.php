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


                    <li class="checkout-step active-checkout-step" data-section="customer-details">
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

            <div class="flash-messages">
                <div class="container">
                </div>
            </div>
            <main class="js-sticky-height-calculate-container">
                <div class="container">

                    @if ($errors->any())
                        <div class="mini-cart-details alert alert-warning">
                            <div class="vendor review-order">
                                <div class="vendor__inner">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    @endif


                    <div class="content-block auth login js-login-register-flow">
                        <div class="login-register-content-block add-mobile">


                            <form action="{{ url('customer-details') }}" id="details-form" method="post" role="form" class="">
                                {{ csrf_field() }}
                                <p class="login-register-form-subtitle pull-left">Enter your details</p>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="text" name="sender_name"  placeholder="Your full name" required="required">
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="text" name="sender_mobile_number"  placeholder="Mobile" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="email" name="sender_email"  placeholder="Your Email Address" required="required">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <p class="login-register-form-subtitle pull-left" style="">Enter recipient details</p>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="text" name="receiver_name"  placeholder="Full name" required>
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="number" name="receiver_mobile_number"  placeholder="Mobile" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12">
                                            <input type="email" name="receiver_email"  placeholder="Email Address (optional)">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit"  class="btn btn-primary btn-lg btn-block">Continue</button>
                                </div>
                            </form>
                        </div>
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
    <script>
        $('#details-form').formValidation({
            framework: 'bootstrap',
            icon: {
               valid: 'glyphicon glyphicon-ok',
               invalid: 'glyphicon glyphicon-remove',
               validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                sender_name: {
                    validators: {
                        notEmpty: {
                            message: 'Your full name is required'
                        }
                    }
                },
                sender_country_code: {
                    validators: {
                        notEmpty: {
                            message: 'code is required'
                        },
                        numeric: {
                            message: 'The value must be a number',
                            // // The default separators
                            // thousandsSeparator: '',
                            // decimalSeparator: '.'
                        }
                    }
                },
                sender_mobile_number: {
                    validators: {
                        notEmpty: {
                            message: 'Your phone number is required'
                        },
                        numeric: {
                            message: 'The value must be a number',
                            // // The default separators
                            // thousandsSeparator: '',
                            // decimalSeparator: '.'
                        }
                    }
                },
                receiver_name: {
                    validators: {
                        notEmpty: {
                            message: 'Recipient full name is required'
                        }
                    }
                },
                receiver_country_code: {
                    validators: {
                        notEmpty: {
                            message: 'country code is required'
                        },
                        numeric: {
                            message: 'The value must be a number',
                            // // The default separators
                            // thousandsSeparator: '',
                            // decimalSeparator: '.'
                        }
                    }
                },
                receiver_mobile_number: {
                    validators: {
                        notEmpty: {
                            message: 'Recipient phone number is required'
                        },
                        numeric: {
                            message: 'The value must be a number without spaces',
                            // // The default separators
                            // thousandsSeparator: ' ',
                            // decimalSeparator: '.'
                        }
                    }
                }

            }
        });
    </script>
    {{--<script src="{{URL::asset('js/shop-front.js') }}"></script>--}}


@endpush