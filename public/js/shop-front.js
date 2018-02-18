var cart= [] ;
$(document).ready(function() {
    $('#tb').DataTable({
        'searching':false,
        "ordering": false,
        "paging":false,
        info: false,
        bSort: false,
        "language": {
            "emptyTable": '<div class="cart__empty cart__empty--inside">' +
            '<div class="cart__empty__icon-container">' +
            '<i class="icon icon-basket"></i>' +
            ' <span class="no-items-text">Add menu items into your basket</span>' +
            '</div>' +
            '</div>'
        }
    });
    // loadCartTable(cart);
    var url = $("#cart-url").val();
    if(url != ""){
        $.ajax({
            url:url,
            type:"get",
            dataType: 'json',
            success: function (data) {
                // cart = data;
                if(data.length >0){
                    // console.log(data);
                    $.each(data,function(index,e){
                     cart.push({
                         prodId: parseInt(e.prodId),
                         price: e.price,
                         prodName: e.prodName,
                         quantity: 1,
                         uom: e.uom
                     })
                    })
                }
                loadCartTable(cart);
                // console.log(data);
            }
        });
        // loadCartTable(cart);
    }


} );
$(document).find('.add-to-cart-a').on('click',function() {
    var menuId = $(this).attr('menuid');
    getProdInfo(menuId);

});

function getProdInfo(id){
    $.ajax({
        url: $("#prod-action").val() + "/" + id,
        type: "GET",
        dataType: 'json',
        success: function (data) {
            if (data) {
                addProdsToCat(data);
            }
        }
    });
}
function addProdsToCat(data) {
    if(cart.length >0){
        if(cart.some(function (v) {
                return v.prodId === parseInt(data.id)
            })){
            $.each(cart,function(index,element){
                if(element.prodId === parseInt(data.id)){
                    element.quantity++;
                }
            })
        }else{
            cart.push({
                prodId: data.id,
                price: data.price,
                prodName: data.name,
                quantity: 1,
                uom: data.uom_name
            })
        }
    }else{
        cart.push({
            prodId: data.id,
            price: data.price,
            prodName: data.name,
            quantity: 1,
            uom: data.uom_name
        })
    }
    loadCartTable(cart);
    console.log(cart);
}

function loadCartTable(data){

    $('#tb').DataTable({
        destroy:true,
        'createdRow': function( row, data, dataIndex ) {
            $(row).addClass( 'product' );
            // console.log($(data));
        },
        'searching':false,
        "ordering": false,
        "paging":false,
        info: false,
        bSort: false,
        "language": {
            "emptyTable": '<div class="cart__empty cart__empty--inside">' +
            '<div class="cart__empty__icon-container">' +
            '<i class="icon icon-basket"></i>' +
            ' <span class="no-items-text">Add menu items into your basket</span>' +
            '</div>' +
            '</div>'
        },
        data: data,
        columns: [
            {
                className: "product__quantity",
                mRender: function(data, type, row,cell) {
                    return '<div class="product__amount-controls">' +
                    '<a onclick="getProdInfo('+row.prodId+')" class="product__quantity__amount-control product__quantity__amount-control-plus add-qty" style="cursor: pointer;">+</a>' +
                    '<span class="product__quantity__wrapper">'+row.quantity+'<span class="product__quantity__wrapper__times">x</span></span>' +
                    '<a onclick="minusQuantity('+row.prodId+')" class="product__quantity__amount-control product__quantity__amount-control-minus" style="cursor: pointer;">-</a>' +
                    '</div>';
                }
            },
            {
                className: 'product__title',
                mRender: function(data, type, row,cell) {
                    return '<span class="product__title__name">'
                        +row.prodName+' '+row.uom+
                        '</span>';
                }
            },
            {
                className: 'product__price',
                mRender: function(data, type, row,cell) {
                    return '<span class="product__price__element">' +
                        row.quantity * row.price+' Ksh'
                        +
                        '</span>' +
                        '<a style="cursor: pointer;" onclick="minusQuantity('+row.prodId+',1)" class="product__price__remove-product">' +
                        '<i class="icon fa fa-close"></i> </a>';
                }
            }
        ]
    });

    $('#tb2').DataTable({
        destroy:true,
        'createdRow': function( row, data, dataIndex ) {
            $(row).addClass( 'product' );
            // console.log($(data));
        },
        'searching':false,
        "ordering": false,
        "paging":false,
        info: false,
        bSort: false,
        "language": {
            "emptyTable": '<div class="text-center"><h3>Your basket is empty</h3> ' +
            '<h4 class="checkout-review-order-empty-cart-message-wrapper">Placeholder ' +
            // '<a href="\partner\" {{ $partner->id}} class="checkout-review-order-empty-cart-message">add items</a>' +
            ' from menu or return to ' +
            '<a href="\index" class="checkout-review-order-empty-cart-message">Home page</a> </h4> ' +
            // '<a href="" class="btn btn-primary btn-checkout-primary">Back to Menu </a>' +
            '</div>'
        },
        data: data,
        columns: [
            {
                className: "product__quantity",
                mRender: function(data, type, row,cell) {
                    return '<div class="product__amount-controls">' +
                        '<a onclick="getProdInfo('+row.prodId+')" class="product__quantity__amount-control product__quantity__amount-control-plus add-qty" style="cursor: pointer;">+</a>' +
                        '<span class="product__quantity__wrapper">'+row.quantity+'<span class="product__quantity__wrapper__times">x</span></span>' +
                        '<a onclick="minusQuantity('+row.prodId+')" class="product__quantity__amount-control product__quantity__amount-control-minus" style="cursor: pointer;">-</a>' +
                        '</div>';
                }
            },
            {
                className: 'product__title',
                mRender: function(data, type, row,cell) {
                    return '<span class="product__title__name">'
                        +row.prodName+' '+row.uom+
                        '</span>';
                }
            },
            {
                className: 'product__price',
                mRender: function(data, type, row,cell) {
                    return '<span class="product__price__element">' +
                        row.quantity * row.price+' Ksh'
                        +
                        '</span>' +
                        '<a style="cursor: pointer;" onclick="minusQuantity('+row.prodId+',1)" class="product__price__remove-product">' +
                        '<i class="icon fa fa-close"></i> </a>';
                }
            }
        ]
    });
    if(cart.length>0){
        var total = 0;
        $.each(cart,function(index,element){
            total = total + (element.quantity* element.price);
        });
        $("#total").html(total+' Ksh');
        $(".total-amount").html(total+' Ksh');
        $(".cart-summary").show();
    }else{
        $(".cart-summary").hide();
    }
}

function minusQuantity(id,action){
    if(cart.length >0){
        if(cart.some(function (v) {
                return v.prodId === id
            })){
            $.each(cart,function(index,element){
                if(element.prodId === id){
                    if(action === 1){
                        cart.splice(index,1);
                    }else{
                        element.quantity--;
                        if(element.quantity <1){
                            cart.splice(index,1);
                        }
                    }
                }

            })
        }
    }
    loadCartTable(cart);
}

function proceedToCheckout() {
    var data = {
        "cart":cart,
        'partnerId':$("#partner-id").val()
    };
    // alert($("#mobile-route").val());


   $.ajax({
       headers: {
           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       },
       url: $("#checkout-url").val(),
       dataType:'json',
       type: "post",
       data: data,
       success: function(data){
            if(data){
                // window.location.href = $("#mobile-route").val();
            }
       }
   });
    window.location.href = $("#mobile-route").val();
}

function updateCat(){
    var data = {
        "cart":cart
    };
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: $("#checkout-url").val(),
        dataType:'json',
        type: "post",
        data: data,
        success: function(data){
            if(data){
                window.location.href = $("#place-order").val();
            }
        }
    });
    // window.location.href = $("#mobile-route").val();
}

