
<div class="form-group">
    {!! Form::label('parent_category', 'Parent Category:') !!}
    <select name="parent_category" class="form-control select2" id="parent_category">
        {{--<option value="">select parent category</option>--}}
        <option value="">No Parent</option>
        @if(count($parent_categories))
            @foreach($parent_categories as $parent_category)
                <option value="{{ $parent_category->id }}">{{ $parent_category->category_name }}</option>
                @endforeach
            @endif
    </select>
</div>
<!-- Category Name Field -->
<div class="form-group">

    {!! Form::label('category_name', 'Category Name:') !!}
    {!! Form::text('category_name', null, ['class' => 'form-control']) !!}
</div>

{{--<!-- Created By Field -->--}}
{{--<div class="form-group">--}}
    {{--{!! Form::label('created_by', 'Created By:') !!}--}}
    {{--{!! Form::number('created_by', null, ['class' => 'form-control']) !!}--}}
{{--</div>--}}

{{--<!-- Store Id Field -->--}}
{{--<div class="form-group">--}}
    {{--{!! Form::label('store_id', 'Store Id:') !!}--}}
    {{--{!! Form::number('store_id', null, ['class' => 'form-control']) !!}--}}
{{--</div>--}}

<!-- Submit Field

-->
