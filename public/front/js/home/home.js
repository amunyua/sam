$(function(){
    $(document).ready(function(){
        $(".navbar").hide();
         // alert(baseUrl);
        // getStores();

    });

    // function getStores() {
    //     $.ajax({
    //         url: baseUrl+"stores",
    //         type: "GET",
    //         dataType: 'json',
    //         success:function(data){
    //
    //         }
    //     })
    // }


});
$(window).on("load",function(){
    setTimeout(function(){
        $(".spinner").fadeOut("slow");
        $(".navbar").fadeIn("slow");
    },1000);
});