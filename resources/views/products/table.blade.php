@section('css')
    @include('layouts.datatables_css')
@endsection

{{--{!! $dataTable->table(['width' => '100%']) !!}--}}

@section('scripts')
    @include('layouts.datatables_js')
    {{--<script src="{{ asset('products/products.js') }}"></script>--}}
    {!! $dataTable->scripts() !!}
@endsection