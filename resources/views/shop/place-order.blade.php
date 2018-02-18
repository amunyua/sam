@section('title','Home')
@extends('layouts.checkout')
@push('css')
    <link rel="stylesheet" href="{{ asset('front/assets/css/food-panda.css')}}" />
    <style>
        section{
            padding: 0;
        }
        .panel-title{
            border: none;
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


                <ul class="checkout-steps" data-active-checkout-step="checkout">


                    <li class="checkout-step " data-section="customer-details">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title"></p>

                            <p class="checkout-step-text">Your Details</p>
                        </div>
                    </li>

                    <li class="checkout-step " data-section="review-order">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title"></p>

                            <p class="checkout-step-text">Review order</p>
                        </div>
                    </li>

                    <li class="checkout-step active-checkout-step" data-section="checkout">
                        <div class="checkout-step-content">
                            <p class="checkout-step-title">3</p>

                            <p class="checkout-step-text">Place Order</p>
                        </div>
                    </li>
                </ul>

            </div>
            <main class="js-sticky-height-calculate-container">
                <div class="container">
                    <div class="checkout js-tooltip-container">
                        <div class="checkout-container">
                                <div class="cart-container checkout-cart-container" data-is-wallet-used="false" style="height: 356px;">
                                    <div class="js-sticky-element" style="">
                                        <div class="js-sticky-element" style="">
                                            <div class="cart cart-checkout cart--checkout">
                                                <div class="cart__minimal">
                                                    <div class="container">
                                                        <span class="cart__minimal__amount">
                                                            1
                                                        </span>
                                                        <span class="cart__minimal__price">
                                                            620Ksh
                                                        </span>
                                                    </div>
                                                </div>

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
                                                        <div class="cart__header">
                                                            <div class="cart__header__title">
                                                                <span class="default-delivery-label">Your order</span>
                                                                <div class="clear"></div>
                                                            </div>
                                                        </div>
                                                        @if(count($items))

                                                        <div class="cart__products" style="max-height: none;">
                                                            <table>
                                                                <tbody>

                                                                    <?php $total =0; ?>
                                                                    @foreach($items as $item)
                                                                        <?php $total = $total+ ($item['quantity'] * $item["price"]); ?>
                                                                        <tr class="product">
                                                                            <td class="product__quantity">{{ $item["quantity"] }}x</td>
                                                                            <td class="product__title">
                                                                                <span class="product__title__name">
                                                                                    {{ $item["prodName"]. ' '.strtolower($item['uom']) }}
                                                                                </span>
                                                                            </td>
                                                                        </tr>

                                                                        @endforeach

                                                                <tr class="product__price">
                                                                    <td></td>
                                                                    <td class="price">{{ $total }} Ksh</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div class="cart__summary">
                                                            <table>
                                                                <tbody><tr class="cart-voucher-discount">
                                                                    <td></td>

                                                                    <td class="title">
                                                                    </td>
                                                                    <td class="price">
                                                                    </td>
                                                                </tr>


                                                                <tr class="subtotal">
                                                                    <td></td>
                                                                    <td class="title">Subtotal</td>
                                                                    <td class="price">{{ $total }} Ksh</td>
                                                                </tr>
                                                                {{--<tr class="vat">--}}
                                                                    {{--<td></td>--}}
                                                                    {{--<td class="title">--}}
                                                                        {{--Including VAT--}}
                                                                    {{--</td>--}}
                                                                    {{--<td class="price">86Ksh</td>--}}
                                                                {{--</tr>--}}



                                                                <tr class="total">
                                                                    <td></td>
                                                                    <td colspan="2" class="title ">
                                                                        <div>
                                                                            <span>Total</span>
                                                                            <span class="total-price">
                                                                                   {{ $total }} Ksh
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="checkout-form-container">
                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">Contact Details</h3>
                                        </div>
                                        <div class="panel-body">
                                            <div class="col-md-12" style="padding-left: 0">
                                                <div class="col-md-6" style="padding-left: 0">
                                                        <h5 style="margin-left:25%;" >You</h5>
                                                    <dl class="checkout-customer-details">
                                                        <dt>Full Name</dt>
                                                        <dd>{{ $customerDetails["sender_name"] }}</dd>

                                                        {{--<dt>Email</dt>--}}
                                                        {{--<dd>--}}
                                                        {{--kinuthia_alex@yahoo.com--}}

                                                        {{--</dd>--}}

                                                        <dt>Mobile</dt>
                                                        <dd>
                                                           +{{ $customerDetails["sender_number"] }}
                                                        </dd>
                                                        <dt></dt>

                                                    </dl>
                                                </div>
                                                <div class="col-md-6">
                                                    <h5 style="margin-left:22%;" >Recipient</h5>
                                                    <dl class="checkout-customer-details">
                                                        <dt>Full Name</dt>
                                                        <dd>{{ $customerDetails["receiver_name"] }}</dd>

                                                        {{--<dt>Email</dt>--}}
                                                        {{--<dd>--}}
                                                        {{--kinuthia_alex@yahoo.com--}}

                                                        {{--</dd>--}}

                                                        <dt>Mobile</dt>
                                                        <dd>
                                                            +{{ $customerDetails["receiver_number"] }}

                                                        </dd>
                                                        <dt></dt>

                                                    </dl>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="panel">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                                Choose how to pay
                                            </h3>
                                        </div>
                                        <div class="panel-body">
                                            <div class="checkout-payment-types">
                                                <span class="form-fields-required-notice checkout-form-message">
                                                      Required fields
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="{{URL::asset('js/shop-front.js') }}"></script>
    <script>
        // FD
        //     .setControllerConfig('VendorDetailTabs', 'enable', true)
        //     .setControllerConfig('VendorDetailProductVariation', 'enable', true)
        //     .setControllerConfig('VendorDetailMenuScrollSpy', 'enable', true)
        //     .setControllerConfig('ToggleElements', 'enable', true)
        //     .setControllerConfig('VendorDetailProductVariation', 'maximiumQuantityReachedMessage', 'You&#039;ve already selected the maximum')
        // ;
    </script>



@endpush