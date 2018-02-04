{{--<div class='btn-group'>--}}
     {{--<a href="#edit-product-modal" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('/products/'.$id) !!}" class='btn btn-default btn-xs edit-p-btn'><i class="glyphicon glyphicon-eye-edit"></i> edit</a>--}}
     {{--<a href="#delete-product-modal" data-toggle="modal" action="{!! url('/products/'.$id) !!}" class='btn btn-danger btn-xs delete-p-btn'><i class="glyphicon glyphicon-trash"></i> delete</a>--}}
{{--</div>--}}

<a href="#edit-product-modal" rel="tooltip" title="edit" data-toggle="modal" e-id="{{ $id}}" hint="{!! url('/products/'.$id) !!}"  class="btn btn-simple btn-warning btn-icon edit-p-btn"><i class="material-icons">edit</i></a>
<a href="#delete-product-modal" rel="tooltip" title="delete" data-toggle="modal" action="{!! url('/products/'.$id) !!}"  class="btn btn-simple btn-danger btn-icon delete-p-btn"><i class="material-icons">close</i></a>

