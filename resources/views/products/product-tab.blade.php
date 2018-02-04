<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header card-header-icon" data-background-color="rose">
                    <i class="material-icons">assignment</i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">Product Categories</h4>
                    <div class="toolbar">
                        <div class="row">
                            <div class="col-md-12">
                                <a class="btn btn-primary  pull-right btn-rose" href="#create-p-cat-modal" data-toggle="modal">Add Category</a>
                            </div>
                        </div>
                        @include('flash::message')
                        @include('adminlte-templates::common.errors')
                    </div>
                    <div class="material-datatables">
                        <input type="hidden" value="{{url('/getProductCats')}}" id="cats-dt">
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
                <!-- end content-->
            </div>
            <!--  end card  -->
        </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header card-header-icon" data-background-color="rose">
                        <i class="material-icons">assignment</i>
                    </div>
                    <div class="card-content">
                        <h4 class="card-title">Products</h4>
                        <div class="toolbar">
                            <div class="row">
                                <div class="col-md-12">
                                    <a class="btn btn-primary pull-right btn-rose" href="#create-product-modal" data-toggle="modal">Add Product</a>
                                </div>
                            </div>
                            {{--@include('flash::message')--}}
{{--                            @include('adminlte-templates::common.errors')--}}
                        </div>
                        <div class="material-datatables">
                        {{--@include('products.table')--}}
                        <input type="hidden" value="{{url('/getProducts')}}" id="products-dt">
                        <table class="table" id="products-table" style="width: 100%">
                            <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                        </table>
                        </div>
                    </div>
                    <div class="overlay" id="products-overlay" style="display: none">
                        <i class="fa fa-spinner fa-spin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

{{--product category modals--}}
<div class="modal fade" id="create-p-cat-modal" role="dialog">
    {{--        {!! Form::open(['route' => 'productCategories.store','id'=>'create-pcat-form']) !!}--}}
    <form action="{{ route('productCategories.store') }}" method="post" id="create-pcat-form" >
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

<div class="modal fade" id="edit-pcat-modal" role="dialog">
    <form method="post" id="edit-form">
        {{ csrf_field() }}
        <input name="_method" type="hidden" value="PATCH">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Edit Product Categorie</h4>
                </div>
                <div class="modal-body">
                    @include('product_categories.fields')

                </div>
                <div class="modal-footer">
                    <input type="hidden" id="editDetails" value="{{ url("/productCategories") }}">
                    <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary btn-simple">Save</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </form>
</div>
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
                    <h4 class="modal-title">Delete Product Category</h4>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this Product Category?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-danger btn-simple">Delete</button>
                </div>
            </div>
        </div>
    </form>
</div>

{{--Procucts modals--}}

<div class="modal fade" id="create-product-modal" role="dialog">
    {!! Form::open(['route' => 'products.store']) !!}
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Create Product</h4>
            </div>
            <div class="modal-body">
                @include('products.fields')
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary btn-simple">Save</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
    {!! Form::close() !!}
</div>

<div class="modal fade" id="edit-product-modal" role="dialog">
    <form method="post" id="edit-p-form">
        {{ csrf_field() }}
        <input name="_method" type="hidden" value="PATCH">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Edit Product</h4>
                </div>
                <div class="modal-body">
                    @include('products.fields')

                </div>
                <div class="modal-footer">
                    <input type="hidden" id="edit-p-Details" value="{{ url("/products") }}">
                    <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary btn-simple">Save</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </form>
</div>

{{--delete modal--}}
<div class="modal fade" id="delete-product-modal" role="dialog">
    <form id="delete-p-form" method="post">
        <input name="_method" type="hidden" value="DELETE">
        {{ csrf_field() }}
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Delete Products</h4>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete this Product?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">No</button>
                    <button type="submit" class="btn btn-danger btn-simple">Yes</button>
                </div>
            </div>
        </div>
    </form>
</div>

