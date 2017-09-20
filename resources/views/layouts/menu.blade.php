{{--<li class="{{ Request::is('routes*') ? 'active' : '' }}">
    <a href="{!! route('routes.index') !!}"><i class="fa fa-edit"></i><span>Routes</span></a>
</li>--}}

<li class="{{ Request::is('roles*') ? 'active' : '' }}">
    <a href="{!! route('roles.index') !!}"><i class="fa fa-edit"></i><span>Roles</span></a>
</li>

