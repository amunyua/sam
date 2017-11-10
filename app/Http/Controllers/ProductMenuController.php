<?php

namespace App\Http\Controllers;

use App\DataTables\ProductMenuDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateProductMenuRequest;
use App\Http\Requests\UpdateProductMenuRequest;
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
        try{
            $productMenu = $this->productMenuRepository->create($input);
            $status['status'] = "success";
            $status['message'] = "Item has been added";
        }catch (QueryException $exception){
            $status['status'] = 'failed';
            $status["message"] = "Something went wrong";
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

        if (empty($productMenu)) {
            Flash::error('Product Menu not found');

            return redirect(route('productMenus.index'));
        }

        return view('product_menus.show')->with('productMenu', $productMenu);
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
        $productMenu = $this->productMenuRepository->findWithoutFail($id);

        if (empty($productMenu)) {
            Flash::error('Product Menu not found');

            return redirect(route('productMenus.index'));
        }

        $productMenu = $this->productMenuRepository->update($request->all(), $id);

        Flash::success('Product Menu updated successfully.');

        return redirect(route('productMenus.index'));
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
        $productMenu = $this->productMenuRepository->findWithoutFail($id);

        if (empty($productMenu)) {
            Flash::error('Product Menu not found');

            return redirect(route('productMenus.index'));
        }

        $this->productMenuRepository->delete($id);

        Flash::success('Product Menu deleted successfully.');

        return redirect(route('productMenus.index'));
    }
}
