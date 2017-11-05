<?php

namespace App\Http\Controllers;

use App\DataTables\ProductCategoryDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateProductCategoryRequest;
use App\Http\Requests\UpdateProductCategoryRequest;
use App\Models\ProductCategory;
use App\Repositories\ProductCategoryRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Response;

class ProductCategoryController extends AppBaseController
{
    /** @var  ProductCategoryRepository */
    private $productCategoryRepository;

    public function __construct(ProductCategoryRepository $productCategoryRepo)
    {
        $this->middleware("auth");
        $this->productCategoryRepository = $productCategoryRepo;
    }

    /**
     * Display a listing of the ProductCategory.
     *
     * @param ProductCategoryDataTable $productCategoryDataTable
     * @return Response
     */
    public function index(ProductCategoryDataTable $productCategoryDataTable)
    {

        return $productCategoryDataTable->render('product_categories.index',[
            'parent_categories'=>ProductCategory::where('parent_category','=',null)->get()
        ]);
    }

    /**
     * Show the form for creating a new ProductCategory.
     *
     * @return Response
     */
    public function create()
    {
        return view('product_categories.create');
    }

    /**
     * Store a newly created ProductCategory in storage.
     *
     * @param CreateProductCategoryRequest $request
     *
     * @return Response
     */
    public function store(CreateProductCategoryRequest $request)
    {
        $input = $request->all();
        $input['created_by'] = Auth::id();
        $input['store_id'] = Auth::user()->store_id;
//        print_r($input);die;

        $status = false;
        try{
            $productCategory = $this->productCategoryRepository->create($input);
            $message = "Product Category saved successfully.";
            $status = true;
            Flash::success('Product Category saved successfully.');
        }catch (QueryException $exception){
            $message = "Failed ".$exception->errorInfo;

        }
        response()->json(['status'=>$status,'message'=>$message]);
        return redirect()->back();
    }

    /**
     * Display the specified ProductCategory.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $productCategory = $this->productCategoryRepository->findWithoutFail($id);

//        if (empty($productCategory)) {
//            Flash::error('Product Category not found');
//
//            return redirect(route('productCategories.index'));
//        }
//
//        return view('product_categories.show')->with('productCategory', $productCategory);
        return response()->json($productCategory);
    }

    /**
     * Show the form for editing the specified ProductCategory.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $productCategory = $this->productCategoryRepository->findWithoutFail($id);

        if (empty($productCategory)) {
            Flash::error('Product Category not found');

            return redirect(route('productCategories.index'));
        }

        return view('product_categories.edit')->with('productCategory', $productCategory);

    }

    /**
     * Update the specified ProductCategory in storage.
     *
     * @param  int              $id
     * @param UpdateProductCategoryRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProductCategoryRequest $request)
    {
        $productCategory = $this->productCategoryRepository->findWithoutFail($id);

        if (empty($productCategory)) {
            Flash::error('Product Category not found');

            return redirect(route('productCategories.index'));
        }

        $productCategory = $this->productCategoryRepository->update($request->all(), $id);

        Flash::success('Product Category updated successfully.');

        return redirect(route('products.index'));
    }

    /**
     * Remove the specified ProductCategory from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $productCategory = $this->productCategoryRepository->findWithoutFail($id);

        if (empty($productCategory)) {
            Flash::error('Product Category not found');

            return redirect(route('productCategories.index'));
        }

        $this->productCategoryRepository->delete($id);

        Flash::success('Product Category deleted successfully.');

//        return redirect(route('productCategories.index'));
        return redirect()->back();
    }
}
