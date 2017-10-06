@extends('layouts.app')

@section('content')

    <section class="content-header">
    @section("pageTitle","Users")
    @section("pageSubtitle","All system users")

    @section("breadcrumbs")
        <li>Home</li>
        <li>Users</li>
        @endsection
        <h1 class="pull-right">
          <a class="btn btn-primary btn-sm pull-right" href="#create-modal" data-toggle="modal" style="margin-top: -10px;margin-bottom: 5px">Add New</a>
        </h1>
    </section>
    <div class="content">
        <div class="clearfix"></div>
        @include('adminlte-templates::common.errors')
        @include('flash::message')

        <div class="clearfix"></div>
        <div class="box box-info box-solid">
         <div class="box-header">
                        <h3 class="box-title">All Users</h3>
                    </div>
            <div class="box-body">
                    @include('users.table')
            </div>
        </div>
    </div>
@endsection
@section('modals')
    <div class="modal fade" id="create-modal" role="dialog">
            {!! Form::open(['route' => 'users.store']) !!}
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Create Users</h4>
                    </div>
                    <div class="modal-body">
                        @include('users.fields')
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
                       <h4 class="modal-title">Edit Users</h4>
                   </div>
                   <div class="modal-body">
                       @include('users.fields')

                   </div>
                   <div class="modal-footer">
                        <input type="hidden" id="editDetails" value="{{ url("/users") }}">
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
                            <h4 class="modal-title">Delete Users</h4>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this Users?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    @endsection

