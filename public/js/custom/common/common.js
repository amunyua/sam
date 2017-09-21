$(document).on("click",".delete-common",function () {
    var action = $(this).attr("action");
    $(document).find("form#delete-form").removeAttr("action").attr("action",action);
});

$(document).on("click",".edit-common",function () {
    var action = $(this).attr("hint");
    $(document).find("form#edit-form").removeAttr("action").attr("action",action);
})
