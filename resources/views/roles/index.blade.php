@extends('layouts.dt-1')
@section("pageTitle","Users")
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-icon" data-background-color="purple">
                        <i class="material-icons">assignment</i>
                    </div>
                    <div class="card-content">
                        <h4 class="card-title">User Roles</h4>
                        <div class="toolbar">
                            <div class="row">
                                <div class="col-md-12">
                                    <a href="#create-modal" data-toggle="modal" class="btn btn-primary pull-right" style="margin-top: -10px;margin-bottom: 5px;" >Add New</a>
                                </div>
                            </div>
                            @include('flash::message')
                            @include('adminlte-templates::common.errors')
                        </div>
                        <div class="material-datatables">
                    @include('roles.table')
                        </div>
                    </div>
                    <!-- end content-->
                </div>
                <!--  end card  -->
            </div>
            <!-- end col-md-12 -->
        </div>
        <!-- end row -->
    </div>
@endsection
@section('modals')
    <div class="modal fade" id="create-modal" role="dialog">
            {!! Form::open(['route' => 'roles.store']) !!}
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Create Role</h4>
                    </div>
                    <div class="modal-body">
                        @include('roles.fields')
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
                       <h4 class="modal-title">Edit Role</h4>
                   </div>
                   <div class="modal-body">
                       @include('roles.fields')

                   </div>
                   <div class="modal-footer">
                       <input type="hidden" id="editDetails" value="{{ url("/roles") }}">
                       <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                       <button type="submit" class="btn btn-primary btn-simple">Save</button>
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
                            <h4 class="modal-title">Delete Roles</h4>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this Role?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-simple">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    {{--delete modal--}}
    <div class="modal fade" id="attach-permissions-modal" role="dialog">
        <form id="" method="post">
            {{--<input name="_method" type="hidden" value="DELETE">--}}

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Permissions</h4>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" id="crf-token" value="{{ csrf_token() }}">
                        <table class="table" id="permissions-table" style="width: 100%;">
                            <thead>
                            <tr>
                                {{--<th>Action</th>--}}
                                <th>Menu name</th>
                                <th>Attach/Detach</th>
                            </tr>
                            </thead>
                            <tbody></tbody>

                        </table>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" id="table-url" value="{{ url('/getRoutes') }}">
                        <input type="hidden" id="id-holder">
                        <input type="hidden" id="attach-route" value="{{ url('/give-permission') }}">
                        <button type="button" class="btn btn-success pull-right" data-dismiss="modal">Ok</button>
                        {{--<button type="submit" class="btn btn-primary">Save</button>--}}
                    </div>
                </div>
            </div>
        </form>
    </div>
    @endsection
@push('js')
    <script src="{{URL::asset('js/custom/roles.js') }}"></script>
@endpush

