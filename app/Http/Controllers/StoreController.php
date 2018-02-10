<?php

namespace App\Http\Controllers;

use App\DataTables\StoreDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateStoreRequest;
use App\Http\Requests\UpdateStoreRequest;
use App\Repositories\StoreRepository;
use Carbon\Carbon;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Response;

class StoreController extends AppBaseController
{
    /** @var  StoreRepository */
    private $storeRepository;

    public function __construct(StoreRepository $storeRepo)
    {
        $this->storeRepository = $storeRepo;
    }

    /**
     * Display a listing of the Store.
     *
     * @param StoreDataTable $storeDataTable
     * @return Response
     */
    public function index(StoreDataTable $storeDataTable)
    {
        return $storeDataTable->render('stores.index');
    }

    /**
     * Show the form for creating a new Store.
     *
     * @return Response
     */
    public function create()
    {
        return view('stores.create');
    }

    /**
     * Store a newly created Store in storage.
     *
     * @param CreateStoreRequest $request
     *
     * @return Response
     */
    public function store(CreateStoreRequest $request)
    {
        $input = $request->all();
        $input["created_by"] = Auth::id();
//        var_dump($input);die();
        if($request->hasFile('image')){
            $ext = $request->image->getClientOriginalExtension();
//            var_dump($ext)

            $path = $request->file('image')->storeAs('documents',$string = str_replace(' ', '-', $request->store_name.'-'.Carbon::today()->toDateString()).'-'.Carbon::now()->timestamp.'.'.$ext);
            $input['image'] = asset('storage/'.$path);
        }
        $store = $this->storeRepository->create($input);

        Flash::success('Store saved successfully.');

        return redirect(route('stores.index'));
    }

    /**
     * Display the specified Store.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $store = $this->storeRepository->findWithoutFail($id);

       /* if (empty($store)) {
            Flash::error('Store not found');

            return redirect(route('stores.index'));
        }

        return view('stores.show')->with('store', $store);*/
        return response()->json($store);
    }

    /**
     * Show the form for editing the specified Store.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $store = $this->storeRepository->findWithoutFail($id);

        if (empty($store)) {
            Flash::error('Store not found');

            return redirect(route('stores.index'));
        }

        return view('stores.edit')->with('store', $store);
    }

    /**
     * Update the specified Store in storage.
     *
     * @param  int              $id
     * @param UpdateStoreRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateStoreRequest $request)
    {
        $store = $this->storeRepository->findWithoutFail($id);
        $input = $request->input();

        if (empty($store)) {
            Flash::error('Store not found');

            return redirect(route('stores.index'));
        }
        if($request->hasFile('image')){
            $ext = $request->image->getClientOriginalExtension();
//            var_dump($ext)
            $path = explode('storage/',$store->image);
            Storage::delete($path[1]);
            $path = $request->file('image')->storeAs('documents',$string = str_replace(' ', '-', $request->store_name.'-'.Carbon::today()->toDateString()).'-'.Carbon::now()->timestamp.'.'.$ext);
            $input['image'] = asset('storage/'.$path);
        }
        $store = $this->storeRepository->update($input, $id);

        Flash::success('Store updated successfully.');

        return redirect(route('stores.index'));
    }

    /**
     * Remove the specified Store from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $store = $this->storeRepository->findWithoutFail($id);

        if (empty($store)) {
            Flash::error('Store not found');

            return redirect(route('stores.index'));
        }

        $this->storeRepository->delete($id);
        $path = explode('storage/',$store->image);
        Storage::delete($path[1]);

        Flash::success('Store deleted successfully.');

        return redirect(route('stores.index'));
    }
}
