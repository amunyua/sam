{{--<div class='btn-group'>
     <a href="#edit-modal" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('roles/'.$id) !!}" class='btn btn-default btn-xs edit-common'><i class="glyphicon glyphicon-eye-edit"></i> edit</a>
     <a href="#delete-modal" data-toggle="modal" action="{!! url('roles/'.$id) !!}" class='btn btn-danger btn-xs delete-common'><i class="glyphicon glyphicon-trash"></i> delete</a>
</div>--}}

<a href="#edit-modal" rel="tooltip" title="edit" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('/roles/'.$id) !!}"  class="btn btn-simple btn-warning btn-icon edit-common"><i class="material-icons">edit</i></a>
<a href="#delete-modal" rel="tooltip" title="delete" data-toggle="modal" action="{!! url('/roles/'.$id) !!}"  class="btn btn-simple btn-danger btn-icon delete-common"><i class="material-icons">close</i></a>

