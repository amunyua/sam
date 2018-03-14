<!-- Action Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('action', 'Action',['class' => 'control-label']) !!}
    {!! Form::text('action', null, ['class' => 'form-control']) !!}
</div>

<!-- Message Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('message', 'Message',['class' => 'control-label']) !!}
    {!! Form::text('message', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('status', 'Status',['class' => 'control-label']) !!}
    {!! Form::text('status', null, ['class' => 'form-control']) !!}
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('store_id', 'Store Id',['class' => 'control-label']) !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>


