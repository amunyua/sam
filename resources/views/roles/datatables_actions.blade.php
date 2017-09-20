{{--{!! Form::open(['route' => ['roles.destroy', $id], 'method' => 'delete']) !!}--}}
<div class='btn-group'>
    <a href="{{ route('roles.show', $id) }}" class='btn btn-default btn-xs' onclick="">
        <i class="glyphicon glyphicon-eye-open"></i>show
    </a>
    <a href="{{ route('roles.edit', $id) }}" class='btn btn-default btn-xs'>
        <i class="glyphicon glyphicon-edit"></i>edit
    </a>
    <a href="#delete-modal" data-toggle="modal" action="{{ url("/roles/destroy/".$id) }}" class="btn btn-danger btn-xs delete-common"><i class="glyphicon glyphicon-trash"></i> delete</a>
   {{-- {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', [
        'type' => 'submit',
        'edit-id'=>1,
        'class' => 'btn btn-danger btn-xs',
        'onclick' => "alert($(this).attr('edit-id'))"
    ]) !!}--}}
</div>
{{--{!! Form::close() !!}--}}
