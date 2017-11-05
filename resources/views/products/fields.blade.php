<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control','required'=>'required','autocomplete'=>'off']) !!}
</div>

<!-- Product Category Field -->
<div class="form-group">
    {!! Form::label('parent_category', 'Parent Category:') !!}
    <select name="product_category" class="form-control select2" id="product_category" required>
        {{--<option value="">select parent category</option>--}}
        {{--<option value="">No Parent</option>--}}
        @if(count($categories))
            @foreach($categories as $category)
                <option value="{{ $category->id }}">{{ $category->category_name }}</option>
            @endforeach
        @endif
    </select>
</div>

{{--<!-- Store Id Field -->
<div class="form-group">
    {!! Form::label('store_id', 'Store Id:') !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Created By Field -->
<div class="form-group">
    {!! Form::label('created_by', 'Created By:') !!}
    {!! Form::number('created_by', null, ['class' => 'form-control']) !!}
</div>--}}
