<!-- Name Field -->
<div class="form-group label-floating  is-empty" style="margin-top: 2px;">
    {!! Form::label('name', 'Name:',['class'=>'control-label']) !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
</div>

<!-- Email Field -->
<div class="form-group label-floating " style="margin-top: 2px;">
    {!! Form::label('email', 'Email:',['class'=>'control-label']) !!}
    {!! Form::email('email', null, ['class' => 'form-control']) !!}
</div>
<!-- Store Id Field -->
<div class="form-group  " style="margin-top: 2px;">
    {!! Form::label('role_id', 'Role:') !!}
    <select name="role_id" class="form-control select2" id="role_id">
        <option value="">select role</option>
        @if(count($roles))
            @foreach($roles as $role)
                <option value="{{ $role->id }}">{{$role->role_name }}</option>
            @endforeach
        @endif
    </select>
</div>

{{--<!-- Password Field -->
<div class="form-group">
    {!! Form::label('password', 'Password:') !!}
    {!! Form::password('password', ['class' => 'form-control']) !!}
</div>--}}

{{--
<!-- Remember Token Field -->
<div class="form-group">
    {!! Form::label('remember_token', 'Remember Token:') !!}
    {!! Form::text('remember_token', null, ['class' => 'form-control']) !!}
</div>
--}}

<!-- Phone Number Field -->
<div class="form-group  label-floating " style="margin-top: 2px;">
    {!! Form::label('phone_number', 'Phone Number:',['class'=>'control-label']) !!}
    {!! Form::text('phone_number', null, ['class' => 'form-control']) !!}
</div>

<!-- Id Number Field -->
<div class="form-group  label-floating " style="margin-top: 2px;">
    {!! Form::label('id_number', 'Id Number:',['class'=>'control-label']) !!}
    {!! Form::text('id_number', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->

<div class="form-group  " style="margin-top: 2px;">
    <label for="store_id">Store</label>
    <select name="store_id" class="form-control select2" id="store_id">
        <option value="">Select store</option>
        @if(count($stores))
            @foreach($stores as $store)
                <option value="{{ $store->id }}">{{ $store->store_name }}</option>
                @endforeach
            @endif
    </select>
</div>


<div class="form-group  label-floating " style="margin-top: 2px;">
  {!! Form::label('status', 'Status:') !!}
  <select name="status" class="form-control select2" id='status'>
      <option value="1">Active</option>
      <option value="0">InActive</option>
  </select>
</div>



<!-- Submit Field
<div class="form-group col-sm-12">
    {{--{!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}--}}
    {{--<a href="{!! route('users.index') !!}" class="btn btn-default">Cancel</a>--}}
</div>
-->
