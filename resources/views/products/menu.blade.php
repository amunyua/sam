<div class="content">
<div class="row">
    {{--<div class="box box-info box-solid">--}}
        {{--<div class="row">--}}
            <div class="col-md-12">
                <div class="col-md-8">
                    <div class="box box-solid box-primary">
                        <div class="box-body">
                            <input type="hidden" id="p-menu-dt" value="{{ url("/getPMenus") }}">
                            <table class="table" id="product-menus-tbl" style="width: 100%">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Unit of measure</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="overlay" id="p-menus-overlay" style="">
                            <i class="fa fa-spinner fa-spin"></i>
                        </div>
                    </div>
                </div>
                    <div class="col-md-3">
                        <div class="box box-solid box-primary">
                            <div class="box-body">
                                <div class="form-group">
                                    <h5><a href="#create-p-menu-modal" data-toggle="modal" class="btn btn-info btn-block">Add Item</a></h5>
                                </div>
                                <div class="form-group">
                                    <h5><button class="btn btn-success btn-block">Edit Item</button></h5>
                                </div>
                                <div class="form-group">
                                    <h5><button class="btn btn-danger btn-block">Delete Item</button></h5>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        {{--</div>--}}
    {{--</div>--}}
</div>
</div>

<div class="modal fade" id="create-p-menu-modal" role="dialog" data-backdrop="false">
    {{--        {!! Form::open(['route' => 'productCategories.store','id'=>'create-pcat-form']) !!}--}}
    <form  action="{{ route('productMenus.store') }}" method="post" id="create-menu-form" >
        {{ csrf_field() }}
        {{--<input type="hidden" value="{{ route('productCategories.store') }}">--}}
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="close-p-cat-modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Create Menu item</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Product</label>
                        <select name="product_id" class="form-control select2" required>
                            <option value="">select product</option>
                            @if(count($products))
                                @foreach($products as $product)
                                    <option value="{{ $product->id }}">{{ $product->name }}</option>
                                @endforeach
                            @endif
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" class="form-control" rows="2" ></textarea>
                    </div>
                    <div class="form-group">
                        <label>Unit of measure</label>
                        <select class="form-control select2" name="uom">
                            <option value="">Select uom</option>
                                @if(count($uoms))
                                    @foreach($uoms as $uom)
                                        <option value="{{ $uom->id }}">{{$uom->name}}</option>
                                        @endforeach
                                    @endif
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" name="price" class="form-control" >
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