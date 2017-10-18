<div class="content">
    <div class="clearfix"></div>
    <h1 class="pull-right">
        <a class="btn btn-primary btn-sm pull-right" href="#create-product-modal" data-toggle="modal" style="margin-top: -10px;margin-bottom: 5px">Add New</a>
    </h1>

    @include('flash::message')
    @include('adminlte-templates::common.errors')

    <div class="clearfix"></div>
    <div class="box box-info box-solid">
        <div class="box-header">
            <h3 class="box-title">All Products</h3>
        </div>
        <div class="box-body">
            @include('products.table')
        </div>
    </div>
</div>

<div class="modal fade" id="create-product-modal" role="dialog">
    {!! Form::open(['route' => 'products.store']) !!}
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Create Products</h4>
            </div>
            <div class="modal-body">
                @include('products.fields')
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
    {!! Form::close() !!}
</div>

<div class="modal fade" id="edit-product-modal" role="dialog">
    <form method="post" id="edit-form">
        {{ csrf_field() }}
        <input name="_method" type="hidden" value="PATCH">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Edit Products</h4>
                </div>
                <div class="modal-body">
                    @include('products.fields')

                </div>
                <div class="modal-footer">
                    <input type="hidden" id="editDetails" value="{{ url("/products") }}">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </form>
</div>

{{--delete modal--}}
<div class="modal fade" id="delete-product-modal" role="dialog">
    <form id="delete-form" method="post">
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
                    <p>Are you sure you want to delete this Products?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </form>
</div>