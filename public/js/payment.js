$(function () {
    $("#c-button").on('click',function (e) {
        $.ajax({
            url: $(this).val(),
            type: "GET",
            dataType:'json',
            success: function(data){
                if(data.status){
                    $("#checkout-form-div").html("");
                    $.each(data.data,function(key,element){
                        $("#checkout-form-div").append('<input type="hidden" name="'+key+'" value="'+element+'">');
                    });

                    $("#checkout-f").submit();
                }else{

                }
            }
        })

    })
});