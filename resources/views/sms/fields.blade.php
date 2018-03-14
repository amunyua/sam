<!-- Message Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('message_id', 'Message Id',['class' => 'control-label']) !!}
    {!! Form::text('message_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Recipient Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('recipient', 'Recipient',['class' => 'control-label']) !!}
    {!! Form::text('recipient', null, ['class' => 'form-control']) !!}
</div>

<!-- Sender Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('sender', 'Sender',['class' => 'control-label']) !!}
    {!! Form::text('sender', null, ['class' => 'form-control']) !!}
</div>

<!-- Message Field -->
<div class="form-group col-sm-12 col-lg-12">
    {!! Form::label('message', 'Message:') !!}
    {!! Form::textarea('message', null, ['class' => 'form-control']) !!}
</div>

<!-- Sent Field -->
<div class="form-group col-sm-6">
    {!! Form::label('sent', 'Sent:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('sent', false) !!}
        {!! Form::checkbox('sent', '1', null) !!} 1
    </label>
</div>

<!-- Delivered Field -->
<div class="form-group col-sm-6">
    {!! Form::label('delivered', 'Delivered:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('delivered', false) !!}
        {!! Form::checkbox('delivered', '1', null) !!} 1
    </label>
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('store_id', 'Store Id',['class' => 'control-label']) !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>


