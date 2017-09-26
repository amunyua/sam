<!-- Store Name Field -->
<div class="form-group">
    {!! Form::label('store_name', 'Store Name:') !!}
    {!! Form::text('store_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Location Field -->
<div class="form-group">
    {!! Form::label('location', 'Location:') !!}
    {!! Form::text('location', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->

<div class="form-group">
  {!! Form::label('status', 'Status:') !!}
  <select name="status" class="form-control select2">
    <option value="0">Inactive</option>
    <option value="1">Active</option>
  </select>
</div>

<!-- Submit Field
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('stores.index') !!}" class="btn btn-default">Cancel</a>
</div>
-->
