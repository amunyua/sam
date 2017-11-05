<div class='btn-group'>
     <a href="#edit-product-modal" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('/products/'.$id) !!}" class='btn btn-default btn-xs edit-p-btn'><i class="glyphicon glyphicon-eye-edit"></i> edit</a>
     <a href="#delete-product-modal" data-toggle="modal" action="{!! url('/products/'.$id) !!}" class='btn btn-danger btn-xs delete-p-btn'><i class="glyphicon glyphicon-trash"></i> delete</a>
</div>
