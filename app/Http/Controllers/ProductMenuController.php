<?php

namespace App\Http\Controllers;

use App\DataTables\ProductMenuDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateProductMenuRequest;
use App\Http\Requests\UpdateProductMenuRequest;
use App\ProductMenuCategory;
use App\Repositories\ProductMenuRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Response;

class ProductMenuController extends AppBaseController
{
    /** @var  ProductMenuRepository */
    private $productMenuRepository;

    public function __construct(ProductMenuRepository $productMenuRepo)
    {
        $this->productMenuRepository = $productMenuRepo;
    }

    /**
     * Display a listing of the ProductMenu.
     *
     * @param ProductMenuDataTable $productMenuDataTable
     * @return Response
     */
    public function index(ProductMenuDataTable $productMenuDataTable)
    {
        return $productMenuDataTable->render('product_menus.index');
    }

    /**
     * Show the form for creating a new ProductMenu.
     *
     * @return Response
     */
    public function create()
    {
        return view('product_menus.create');
    }

    /**
     * Store a newly created ProductMenu in storage.
     *
     * @param CreateProductMenuRequest $request
     *
     * @return Response
     */
    public function store(CreateProductMenuRequest $request)
    {
        $status=[];
        $input = $request->all();
        $input["created_by"]= Auth::id();
        $input["store_id"]= Auth::user()->store_id;
        $input["product_menu_cat"]= ProductMenuCategory::find(1)->id;
        try{
            $productMenu = $this->productMenuRepository->create($input);
            $status['status'] = "success";
            $status['message'] = "Item has been added";
        }catch (QueryException $exception){
            $status['status'] = 'failed';
            $status["message"] = "Something went wrong ".$exception->errorInfo[2];
        }
        return response()->json($status);
//        Flash::success('Product Menu saved successfully.');
//        return redirect(route('productMenus.index'));

    }

    /**
     * Display the specified ProductMenu.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $productMenu = $this->productMenuRepository->findWithoutFail($id);

//        if (empty($productMenu)) {
//            Flash::error('Product Menu not found');
//
//            return redirect(route('productMenus.index'));
//        }
        return response()->json($productMenu);

//        return view('product_menus.show')->with('productMenu', $productMenu);
    }

    /**
     * Show the form for editing the specified ProductMenu.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $productMenu = $this->productMenuRepository->findWithoutFail($id);

        if (empty($productMenu)) {
            Flash::error('Product Menu not found');

            return redirect(route('productMenus.index'));
        }

        return view('product_menus.edit')->with('productMenu', $productMenu);
    }

    /**
     * Update the specified ProductMenu in storage.
     *
     * @param  int              $id
     * @param UpdateProductMenuRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProductMenuRequest $request)
    {
        $state = [];
        $productMenu = $this->productMenuRepository->findWithoutFail($id);
        try{
            $productMenu = $this->productMenuRepository->update($request->all(), $id);
           $state["message"] = "Menu item has been updated";
            $state["status"]= "success";
        }catch (QueryException $e){
            $state["message"] = "Something went wrong";
            $state["status"]= "failed";
        }

//        Flash::success('Product Menu updated successfully.');
//
//        return redirect(route('productMenus.index'));
        return response()->json($state);
    }

    /**
     * Remove the specified ProductMenu from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $state = [];
        $productMenu = $this->productMenuRepository->findWithoutFail($id);
        try{
            $this->productMenuRepository->delete($id);
            $state['message'] = "The item has been deleted";
            $state['status'] = "success";
        }catch (QueryException $exception){
            $state['message'] = "Something went wrong";
            $state['status'] = 'failed';
        }
        return response()->json($state);
    }
}
