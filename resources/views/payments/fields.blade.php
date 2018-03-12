<!-- Order Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('order_id', 'Order Id',['class' => 'control-label']) !!}
    {!! Form::number('order_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Txn Code Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('txn_code', 'Txn Code',['class' => 'control-label']) !!}
    {!! Form::text('txn_code', null, ['class' => 'form-control']) !!}
</div>

<!-- Ipay Status Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('ipay_status', 'Ipay Status',['class' => 'control-label']) !!}
    {!! Form::text('ipay_status', null, ['class' => 'form-control']) !!}
</div>

<!-- Status Meaning Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('status_meaning', 'Status Meaning',['class' => 'control-label']) !!}
    {!! Form::text('status_meaning', null, ['class' => 'form-control']) !!}
</div>

<!-- Invoice Number Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('invoice_number', 'Invoice Number',['class' => 'control-label']) !!}
    {!! Form::text('invoice_number', null, ['class' => 'form-control']) !!}
</div>

<!-- Registered Name Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('registered_name', 'Registered Name',['class' => 'control-label']) !!}
    {!! Form::text('registered_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Registered Number Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('registered_number', 'Registered Number',['class' => 'control-label']) !!}
    {!! Form::text('registered_number', null, ['class' => 'form-control']) !!}
</div>

<!-- Channel Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('channel', 'Channel',['class' => 'control-label']) !!}
    {!! Form::text('channel', null, ['class' => 'form-control']) !!}
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('store_id', 'Store Id',['class' => 'control-label']) !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Amount To Be Paid Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('amount_to_be_paid', 'Amount To Be Paid',['class' => 'control-label']) !!}
    {!! Form::number('amount_to_be_paid', null, ['class' => 'form-control']) !!}
</div>

<!-- Total Paid Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('total_paid', 'Total Paid',['class' => 'control-label']) !!}
    {!! Form::number('total_paid', null, ['class' => 'form-control']) !!}
</div>

<!-- Short Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('short', 'Short',['class' => 'control-label']) !!}
    {!! Form::number('short', null, ['class' => 'form-control']) !!}
</div>

<!-- Excess Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('excess', 'Excess',['class' => 'control-label']) !!}
    {!! Form::number('excess', null, ['class' => 'form-control']) !!}
</div>

<!-- Complete Field -->
<div class="form-group col-sm-6">
    {!! Form::label('complete', 'Complete:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('complete', false) !!}
        {!! Form::checkbox('complete', '1', null) !!} 1
    </label>
</div>


