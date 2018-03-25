@extends('layouts.dt-1')
@section("pageTitle","Redeem Order")
@push('css')
    <style>
        .f-control{
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 0;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        }
        .list-group-unbordered>.list-group-item {
            border-left: 0;
            border-right: 0;
            border-radius: 0;
            padding-left: 0;
            padding-right: 0;
        }
        .list-group {
            padding-left: 0;
            margin-bottom: 20px;
        }
        .list-group-item {
            position: relative;
            display: block;
            padding: 10px 15px;
            margin-bottom: -1px;
            background-color: #fff;
            border: 1px solid #ddd;
        }
    </style>
    @endpush
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-content">
                        <div class="toolbar">
                            @include('flash::message')
                            @include('adminlte-templates::common.errors')
                        </div>
                        <div class="row">
                        <div class="col-md-10 col-md-offset-2">
                            <form id="search-form" action="{{ url('searchOrder') }}">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="col-md-2"><label style="margin-top: 9px;color: #0d0d0d">Code:</label></div>
                                        <div class="col-md-10">
                                            <input type="text" autocomplete="off" required class="f-control" id="code" placeholder="Enter code here" style="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="form-group">
                                    <button class="btn btn-sm btn-success" style="margin-top: 2px;margin-left: 20px;padding-top: 8px;padding-bottom: 8px;">Search</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <!-- end content-->
                </div>
            </div>


            <!-- end col-md-12 -->
        </div>
        <div class="row">
            <div class="col-md-12" id="redeem-card" style="display: none;">
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-6">
                                    <h4 class="text-center">Customer Details</h4>
                                    <ul class="list-group list-group-unbordered" id="order-details">

                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="text-center">Order items</h4>
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Uom</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody id="items-tbl">

                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Total</th>
                                            <th id="total-amount"></th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="col-md-6"></div>
                                <div class="col-md-6">
                                    <button class="btn btn-success btn-sm btn-block" data-toggle="modal" href="#redeem-modal" id="redeem-btn">Redeem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end content-->
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>

    <div class="modal fade" id="redeem-modal" role="dialog">
        <form id="redeem-form2" method="post" action="{{ url('submit-redeem') }}">
            {{--<input name="_method" type="hidden" value="DELETE">--}}
            {{ csrf_field() }}
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Redeem Order</h4>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to redeem this order?</p>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" name="order_id" id="order-id-details">
                        <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary btn-simple">Redeem</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection

@section('scripts')
    <script>
        $("#search-form").on('submit', function(e){
            e.preventDefault();
            var code = $("#code").val();
            var url = $(this).attr("action");
            $.ajax({
               url: url,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: 'POST',
                dataType: 'json',
                data: { "code": code},
                success: function (data) {
                    if(data.status){
                        var html = '<li class="list-group-item"><b>Receiver:</b> <a class="pull-right">'+data.order.receiver_name+'</a></li>' +
                            '<li class="list-group-item"><b>Phone Number:</b> <a class="pull-right">'+data.order.receiver_phone+'</a></li>'+
                            '<li class="list-group-item"><b>Total Amount:</b> <a class="pull-right">'+data.order.total+' Ksh</a></li>'+
                            '<li class="list-group-item"><b>Order Date:</b> <a class="pull-right">'+data.order.created_at+'</a></li>'
                        ;
                        $("#redeem-btn").val(data.order.id);
                        $("#total-amount").html(data.order.total+ ' ksh');
                        $("#order-details").html(html);
                        $("#items-tbl").html("");
                        if(data.orderLines.length > 0){
                            for(var i=0; i < data.orderLines.length; i++){
                                var h = '<tr>' +
                                    '<td>'+ data.orderLines[i].product_name +'</td>' +
                                    '<td>'+ data.orderLines[i].quantity +'</td>' +
                                    '<td>'+ data.orderLines[i].uom +'</td>' +
                                    '<td>'+ data.orderLines[i].price +' ksh</td>'+

                                    '</tr>';
                            }
                            $("#items-tbl").html(h);
                            $("#redeem-btn").show();
                            if(data.order.collected){
                                $("#redeem-btn").hide();
                            }
                        }


                        $("#redeem-card").show();
                    }else{
                        $("#redeem-card").hide();
                        toastr.error(data.message,"Oop!");
                    }
                }
            });

            $("#redeem-btn").on('click',function(){
                $("#order-id-details").val($(this).val());
            })
        });
    </script>
    @endsection