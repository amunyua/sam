


    <div class="content">
        <h1 class="pull-right">
            <a class="btn btn-primary btn-sm pull-right" href="#create-p-cat-modal" data-toggle="modal" style="margin-top: -10px;margin-bottom: 5px">Add New</a>
        </h1>
        <div class="clearfix"></div>

        {{--@include('flash::message')--}}
        {{--@include('adminlte-templates::common.errors')--}}
        <div v-show="success" class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <p><i class="icon fa fa-check"></i> Success! @{{ successMessage }}</p>
        </div>
        <div class="clearfix"></div>
        <div class="box box-info box-solid">
            <div class="box-header">
                <h3 class="box-title">All Product Categories </h3>
            </div>
            <div class="box-body">
                {{--@include('product_categories.table')--}}
                <table class="table" id="product-categories" style="width: 100%">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Parent Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    <div class="modal fade" id="create-p-cat-modal" role="dialog">
{{--        {!! Form::open(['route' => 'productCategories.store','id'=>'create-pcat-form']) !!}--}}
       <form  v-on:submit.prevent="savePCat" action="{{ route('productCategories.store') }}" method="post" id="create-pcat-form" >
           {{ csrf_field() }}
           {{--<input type="hidden" value="{{ route('productCategories.store') }}">--}}
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close-p-cat-modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Create Product Categories</h4>
                </div>
                <div class="modal-body">
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
                        {{--{!! Form::text('category_name', null, ['class' => 'form-control']) !!}--}}
                        <input type="text" name="category_name" class="form-control" required>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left " data-dismiss="modal">No</button>
                    <button type="submit" class="btn btn-primary" {{--v-on:click.prevent="savePCat()"--}}>Save</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
       </form>
        <!-- /.modal-dialog -->
        {{--{!! Form::close() !!}--}}
    </div>

    <div class="modal fade" id="edit-modal" role="dialog">
        <form method="post" id="edit-form">
            {{ csrf_field() }}
            <input name="_method" type="hidden" value="PATCH">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Edit Product Categories</h4>
                    </div>
                    <div class="modal-body">
                        @include('product_categories.fields')

                    </div>
                    <div class="modal-footer">
                        <input type="hidden" id="editDetails" value="{{ url("/productCategories") }}">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
        </form>
    </div>

    {{--delete modal--}}
    <div class="modal fade" id="delete-modal" role="dialog">
        <form id="delete-form" method="post">
            <input name="_method" type="hidden" value="DELETE">
            {{ csrf_field() }}
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Delete Product Categories</h4>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this Product Categories?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

@push('js')

    @endpush