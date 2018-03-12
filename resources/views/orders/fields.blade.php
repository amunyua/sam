<!-- Sender Name Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('sender_name', 'Sender Name',['class' => 'control-label']) !!}
    {!! Form::text('sender_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Sender Email Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('sender_email', 'Sender Email',['class' => 'control-label']) !!}
    {!! Form::text('sender_email', null, ['class' => 'form-control']) !!}
</div>

<!-- Sender Number Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('sender_number', 'Sender Number',['class' => 'control-label']) !!}
    {!! Form::text('sender_number', null, ['class' => 'form-control']) !!}
</div>

<!-- Receiver Name Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('receiver_name', 'Receiver Name',['class' => 'control-label']) !!}
    {!! Form::text('receiver_name', null, ['class' => 'form-control']) !!}
</div>

<!-- Receiver Email Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('receiver_email', 'Receiver Email',['class' => 'control-label']) !!}
    {!! Form::text('receiver_email', null, ['class' => 'form-control']) !!}
</div>

<!-- Receiver Phone Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('receiver_phone', 'Receiver Phone',['class' => 'control-label']) !!}
    {!! Form::text('receiver_phone', null, ['class' => 'form-control']) !!}
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('store_id', 'Store Id',['class' => 'control-label']) !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Total Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('total', 'Total',['class' => 'control-label']) !!}
    {!! Form::number('total', null, ['class' => 'form-control']) !!}
</div>

<!-- Amount Paid Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('amount_paid', 'Amount Paid',['class' => 'control-label']) !!}
    {!! Form::number('amount_paid', null, ['class' => 'form-control']) !!}
</div>

<!-- Payment Method Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('payment_method', 'Payment Method',['class' => 'control-label']) !!}
    {!! Form::text('payment_method', null, ['class' => 'form-control']) !!}
</div>

<!-- Refcode Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('refCode', 'Refcode',['class' => 'control-label']) !!}
    {!! Form::text('refCode', null, ['class' => 'form-control']) !!}
</div>

<!-- Paid Field -->
<div class="form-group col-sm-6">
    {!! Form::label('paid', 'Paid:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('paid', false) !!}
        {!! Form::checkbox('paid', '1', null) !!} 1
    </label>
</div>

<!-- Valid Field -->
<div class="form-group col-sm-6">
    {!! Form::label('valid', 'Valid:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('valid', false) !!}
        {!! Form::checkbox('valid', '1', null) !!} 1
    </label>
</div>

<!-- Collected Field -->
<div class="form-group col-sm-6">
    {!! Form::label('collected', 'Collected:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('collected', false) !!}
        {!! Form::checkbox('collected', '1', null) !!} 1
    </label>
</div>

<!-- Ip Field -->
<div class="form-group col-sm-12 label-floating is-empty">
    {!! Form::label('ip', 'Ip',['class' => 'control-label']) !!}
    {!! Form::text('ip', null, ['class' => 'form-control']) !!}
</div>


