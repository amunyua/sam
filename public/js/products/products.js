$(function () {

    var productCategories = $('#product-categories').DataTable({
        destroy:true,
        dom: 'Bfrtip',
        processing: true,
        serverSide: true,
//                    order: [[0, 'desc']],
        buttons: [
//                        'csv', 'excel', 'pdf', 'print', 'reset', 'reload'
        ],
        ajax: ({
            beforeSend:function(){
                $("#p-cats-overlay").show();
            },
            url:$("#cats-dt").val(),
            complete:function(){
                $("#p-cats-overlay").fadeOut();
            }
        }),
        columns: [
            {data: 'category_name', name: 'category_name'},
            {data: 'parent_category', name: 'parent_category'},
            {data: 'action', name: 'action'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
        ],
        order: [[0, 'desc']]
    });
    var products = $('#products-table').DataTable({
        destroy:true,
        dom: 'Bfrtip',
        processing: true,
        serverSide: true,
//                    order: [[0, 'desc']],
        buttons: [
//                        'csv', 'excel', 'pdf', 'print', 'reset', 'reload'
        ],
        ajax: ({
            beforeSend:function(){
                $("#products-overlay").show();
            },
            url:$("#products-dt").val(),
            complete:function(){
                $("#products-overlay").fadeOut();
            }
        }),
        columns: [
            {data: 'name', name: 'name'},
            {data: 'product_category', name: 'product_category'},
            {data: 'action', name: 'action'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
        ],
        order: [[0, 'desc']]
    });

    var pMenus = $('#product-menus-tbl').DataTable({
        destroy:true,
        dom: 'Bfrtip',
        processing: true,
        serverSide: true,
//                    order: [[0, 'desc']],
        buttons: [
//                        'csv', 'excel', 'pdf', 'print', 'reset', 'reload'
        ],
        ajax: ({
            beforeSend:function(){
                // $("#p-menus-overlay").show();
            },
            url:$("#p-menu-dt").val(),
            complete:function(){
                $("#p-menus-overlay").fadeOut();
            }
        }),
        columns: [
            {data: 'product_id', name: 'product_id'},
            {data: 'description', name: 'description'},
            {data: 'uom', name: 'uom'},
            {data: 'price', name: 'price'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
        ],
        order: [[0, 'desc']]
    });


    $(document).on("click",".edit-p-btn",function () {
        var action = $(this).attr("hint");
        var id = $(this).attr('e-id');
        // alert(action);
        var editRoute  = $("#edit-p-form").find("#edit-p-Details").val()+ "/"+id;
        // alert(editRoute);
        $(document).find("form#edit-p-form").removeAttr("action").attr("action",action);

        $.ajax({
            url:editRoute,
            type:"GET",
            dataType:"json",
            success: function (data) {
                if(data) {
                    $('form#edit-p-form').find('input.form-control,select.form-control').each(function (index, element) {
                        // console.log();
                        var attrId = $(element).attr('id');
                        // alert(attrId);
                        var e = data[attrId];
                        if(data[attrId] === true){
                            e= 1;
                        }else if(data[attrId] === false){
                            e=0;
                        }
                        // alert(e);
                        $(element).val(e);
                    })
                }
            }
        });
    });
    $(document).on("click",".delete-p-btn",function () {
        var action = $(this).attr("action");
        // alert(action);
        $(document).find("form#delete-p-form").removeAttr("action").attr("action",action);
    });


});

var menuTab = new Vue({
    el:'#menu-tab'
});
