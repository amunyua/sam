<!-- Role Code Field -->
<div class="form-group">
    {!! Form::label('role_code', 'Role Code:') !!}
    {!! Form::text('role_code', null, ['class' => 'form-control']) !!}
</div>

<!-- Role Name Field -->
<div class="form-group">
    {!! Form::label('role_name', 'Role Name:') !!}
    {!! Form::text('role_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Role Status Field -->
{{--<div class="form-group">
    {!! Form::label('role_status', 'Role Status:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('role_status', false) !!}
        {!! Form::checkbox('role_status', '1', null) !!} 1
    </label>
</div>--}}
<div class="form-group">
    {!! Form::label('role_status', 'Role Status:') !!}
    <select name="role_status" class=" form-control" id="role_status">
        <option value="1">Active</option>
        <option value="0">InActive</option>
    </select>
</div>

<!-- Submit Field
<div class="form-group col-sm-12">
    {{--{!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}--}}
    {{--<a href="{!! route('roles.index') !!}" class="btn btn-default">Cancel</a>--}}
</div>
-->
