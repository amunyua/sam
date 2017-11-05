<div class='btn-group'>
     <a href="#edit-pcat-modal" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('/productCategories/'.$id) !!}" class='btn btn-default btn-xs edit-common'><i class="glyphicon glyphicon-eye-edit"></i> edit</a>
     <a href="#delete-modal" data-toggle="modal" action="{!! url('/productCategories/'.$id) !!}" class='btn btn-danger btn-xs delete-common'><i class="glyphicon glyphicon-trash"></i> delete</a>
</div>
