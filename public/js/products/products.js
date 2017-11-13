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
        ordering:false,
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
            // {data: 'product_id', name: 'product_id'},
            {
                mRender: function (data, type, row) {
                    return '<input type="hidden" class="m-id" value="'+ row.id+'">'+ row.product_id;
                }
            },
            {data: 'description', name: 'description'},
            {data: 'uom', name: 'uom'},
            {data: 'price', name: 'price'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
        ],
        // order: [[0, 'desc']]
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


    // $("#product-menus-tbl tbody").on('click','tr',function(){
    //     $(this).toggleClass('selected');
    // })
    $('#product-menus-tbl > tbody').on('click', 'tr', function(event){
        var edit_id = $(this).find('.m-id').val();
        // alert(edit_id);
        if(event.ctrlKey) {
            $(this).toggleClass('selected');
        } else {
            if ( $(this).hasClass('selected') ) {
                $('#product-menus-tbl > tbody > tr').removeClass('selected');
                $("menu-e-btn").removeAttr('e-id');
            } else {
                $('#product-menus-tbl > tbody > tr').removeClass('selected');
                $(this).toggleClass('selected');
            }
        }
    });
    $("#create-menu-form").on('submit', function(e){
        e.preventDefault();
        var action = $(this).attr('action');
        // $(".close").click();
        $("#create-p-menu-modal").modal("hide");
        $.ajax({
            url: action,
            type:"POST",
            dataType:"json",
            beforeSend: function(){
                $("#p-menus-overlay").show();
            },
            data:$(this).serialize(),
            success: function(data){
                if(data.status == "success"){
                    toastr.success(data.message,"Success!");

                }else{
                    toastr.error(data.message,"Failed!")
                }
            },
            complete: function () {
                $('#product-menus-tbl').DataTable({
                    destroy:true,
                    dom: 'Bfrtip',
                    processing: true,
                    serverSide: true,
                    ordering: false,
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
                            // $("#p-menus-overlay").fadeOut();
                        }
                    }),
                    columns: [
                        // {data: 'product_id', name: 'product_id'},
                        {
                            mRender: function (data, type, row) {
                                return '<input type="hidden" class="m-id" value="'+ row.id+'">'+ row.product_id;
                            }
                        },
                        {data: 'description', name: 'description'},
                        {data: 'uom', name: 'uom'},
                        {data: 'price', name: 'price'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
                    ],
                    // order: [[0, 'desc']]
                });
                $("#p-menus-overlay").fadeOut();
            }
        })
    });

    $(document).on('click','#create-pm-modal',function () {
        $("#create-p-menu-modal").modal();
    });

    $(document).on('click',"#menu-e-btn",function (e) {
        var btn = $(this);
        var tr = $('#product-menus-tbl > tbody > tr.selected');
        if(tr.length >0){
            var id = tr.find('.m-id').val();
            // alert(id);

            $("#e-id").val(id);

            var route = btn.attr('route')+'/'+id;
            // alert(route);
            $.ajax({
                url:route,
                type:"GET",
                dataType: 'json',
                success: function(data){
                    if(data){
                        $("#product_id").val(data["product_id"]).change();
                        $("#description").val(data["description"]);
                        $("#uom").val(data["uom"]).change();
                        $("#price").val(data["price"]);

                    }
                }
            });
            if(id >0){
                $("#edit-p-menu-modal").modal();
            }else{
                alert('There is no data to edit')
            }

        }else{
            alert("You must select at least one row to edit");
        }
    });

    $(document).on('submit',"#edit-menu-form",function(e){
        e.preventDefault();
        var id = $("#e-id").val();
        var action = $(this).attr('action')+'/'+id;
        $("#edit-p-menu-modal").modal('hide');
        $.ajax({
            url: action,
            type:'POST',
            dataType: "json",
            beforeSend: function(){
                $("#p-menus-overlay").show();
            },
            data: $("#edit-menu-form").serialize(),
            success: function(data){
                if(data.status == 'success'){
                    toastr.success(data.message,"Success!");

                }else{
                    toastr.error(data.message,"Failed!");
                }
            },
            complete: function () {
                // var dt = new pMenus;
                $('#product-menus-tbl').DataTable({
                    destroy:true,
                    dom: 'Bfrtip',
                    processing: true,
                    serverSide: true,
                    ordering: false,
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
                            // $("#p-menus-overlay").fadeOut();
                        }
                    }),
                    columns: [
                        // {data: 'product_id', name: 'product_id'},
                        {
                            mRender: function (data, type, row) {
                                return '<input type="hidden" class="m-id" value="'+ row.id+'">'+ row.product_id;
                            }
                        },
                        {data: 'description', name: 'description'},
                        {data: 'uom', name: 'uom'},
                        {data: 'price', name: 'price'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
                    ]
                    // order: [[0, 'desc']]
                });
                $("#p-menus-overlay").fadeOut();
            }
        });
    });

    $(document).on('click','#delete-p-menu',function (e) {
        var btn = $(this);
        var tr = $('#product-menus-tbl > tbody > tr.selected');
        if(tr.length >0){
            var id = tr.find('.m-id').val();
            // alert(id);

            $("#d-id").val(id);
            if(id >0){
                $("#delete-p-menu-modal").modal();
            }else{
                alert('There is no data to delete')
            }
        }else{
            alert("You must select at least one row to delete");
        }
    });
    $(document).on('submit','#delete-p-menu-form',function (e) {
        e.preventDefault();
        $("#delete-p-menu-modal").modal("hide");
        var id = $("#d-id").val();
        var action = $(this).attr('action')+'/'+id;
        $.ajax({
            url:action,
            type:"POST",
            dataType:"json",
            beforeSend: function(){
                $("#p-menus-overlay").show();
            },
            data: $("#delete-p-menu-form").serialize(),
            success: function(data){
                if(data.status == 'success'){
                    toastr.success(data.message,"Success!");

                }else{
                    toastr.error(data.message,"Failed!");
                }
            },complete: function () {
                // var dt = new pMenus;
                $('#product-menus-tbl').DataTable({
                    destroy:true,
                    dom: 'Bfrtip',
                    processing: true,
                    serverSide: true,
                    ordering: false,
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
                            // $("#p-menus-overlay").fadeOut();
                        }
                    }),
                    columns: [
                        // {data: 'product_id', name: 'product_id'},
                        {
                            mRender: function (data, type, row) {
                                return '<input type="hidden" class="m-id" value="'+ row.id+'">'+ row.product_id;
                            }
                        },
                        {data: 'description', name: 'description'},
                        {data: 'uom', name: 'uom'},
                        {data: 'price', name: 'price'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
                    ]
                    // order: [[0, 'desc']]
                });
                $("#p-menus-overlay").fadeOut();
            }
        })
    })
});

