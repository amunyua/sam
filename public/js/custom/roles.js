
$(document).ready(function () {
//            alert('ready');
    $("body").on("click",".attach-pms-btn", function () {
//                alert("clicked");
        var roleId = $(this).attr('r-id');
        $('#id-holder').val(roleId);
        var url = $('#table-url').val();
        // alert(url);
        var table = $('#permissions-table').DataTable({
            processing: true,
            serverSide: true,
            width:"100%",
            ajax: url,
            columns: [
//                    { data: 'id', name: 'id' },
                { data: 'route_name', name: 'route_name' },
                { data: 'id', name: 'id' }
            ]
        });
    })
});
