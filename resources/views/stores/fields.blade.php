<!-- Store Name Field -->
<div class="form-group col-sm-12 label-floating  is-empty" style="margin-top: 0;">
    {!! Form::label('store_name', 'Store Name:',['class' => 'control-label']) !!}
    {!! Form::text('store_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Location Field -->
<div class="form-group col-sm-12  is-empty label-floating" style="margin-top: 0;">
    {!! Form::label('location', 'Location:',['class' => 'control-label']) !!}
    {{--<label class="control-label">Location</label>--}}
    {!! Form::text('location', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->

<div class="form-group col-sm-12  is-empty" style="margin-top: 0;">
  {!! Form::label('status', 'Status:',['class' => 'control-label']) !!}
  <select name="status" class="form-control select2">
    <option value="1">Active</option>
      <option value="0">Inactive</option>
  </select>
</div>


