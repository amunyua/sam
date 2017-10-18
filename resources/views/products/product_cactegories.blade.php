


    <div class="content">
        <h1 class="pull-right">
            <a class="btn btn-primary btn-sm pull-right" href="#create-modal" data-toggle="modal" style="margin-top: -10px;margin-bottom: 5px">Add New</a>
        </h1>
        <div class="clearfix"></div>

        @include('flash::message')
        @include('adminlte-templates::common.errors')

        <div class="clearfix"></div>
        <div class="box box-info box-solid">
            <div class="box-header">
                <h3 class="box-title">All Product Categories</h3>
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
    <div class="modal fade" id="create-modal" role="dialog">
        {!! Form::open(['route' => 'productCategories.store']) !!}
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Create Product Categories</h4>
                </div>
                <div class="modal-body">
                    @include('product_categories.fields')
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
    <script>
        postsDataTables();
        function postsDataTables() {
//            alert('of');
            if (!$.fn.dataTable.isDataTable('#product-categories')) {
                $('#product-categories').DataTable({
                    dom: 'Bfrtip',
                    processing: true,
                    serverSide: true,
//                    order: [[0, 'desc']],
                    buttons: [
//                        'csv', 'excel', 'pdf', 'print', 'reset', 'reload'
                    ],
                    ajax: '{{ url('getProductCats') }}',
                    columns: [
                        {data: 'category_name', name: 'category_name'},
                        {data: 'parent_category', name: 'parent_category'},
                        {data: 'action', name: 'action'},
//                        {data: 'created_at', name: 'posts.created_at', width: '120px'},
//                        {data: 'updated_at', name: 'posts.updated_at', width: '120px'},
                    ],
                    order: [[0, 'desc']]
                });
            }
        }
    </script>
    @endpush