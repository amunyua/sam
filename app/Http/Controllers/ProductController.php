<?php

namespace App\Http\Controllers;

use App\DataTables\ProductCategoryDataTable;
use App\DataTables\ProductDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductMenu;
use App\Repositories\ProductRepository;
use App\Uom;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Response;
use Yajra\DataTables\Facades\DataTables;

class ProductController extends AppBaseController
{
    /** @var  ProductRepository */
    private $productRepository;

    public function __construct(ProductRepository $productRepo)
    {
        $this->middleware('auth');
        $this->productRepository = $productRepo;

    }

    /**
     * Display a listing of the Product.
     *
     * @param ProductDataTable $productDataTable
     * @return Response
     */
    public function index(ProductDataTable $productDataTable)
    {
        return $productDataTable->render('products.index',[
            'products'=>Product::where('store_id','=',Auth::user()->store_id)->get() ,
            'parent_categories'=>ProductCategory::where('parent_category','=',null)->get(),
            'categories'=>ProductCategory::all()/*where('store_id','=',Auth::user()->store_id)->get()*/,
            'uoms'=>Uom::all()
        ]);
    }

    public function getProductCats(){
         $prodCats = ProductCategory::query()
            ->select([
                "*"
            ]);
         return DataTables::of($prodCats)
                 ->addColumn('action', 'product_categories.datatables_actions')
                 ->editColumn('parent_category',function(ProductCategory $category){
                     if($category->parent_category == null){
                         $cat = "No Parent";
                     }else{
                         $cat = ProductCategory::find($category->parent_category)->category_name;
                     }
                     return $cat;
                 })
             ->make(true);
    }

    public function getProducts(){
        $products = Product::all();
        return DataTables::of($products)
            ->addColumn('action', 'products.datatables_actions')
            ->editColumn('product_category',function(Product $product){
                if($product->product_category == null){
                    $cat = "No Category";
                }else{
                    $cat = ProductCategory::find($product->product_category)->category_name;
                }
                return $cat;
            })->make(true);
    }

    public function getProductMenus(){
//        $pMenus= ProductMenu::orderBy('id', 'DESC')->get();
        $pMenus= ProductMenu::where('created_by',Auth::id())
            ->orWhere('store_id',Auth::user()->store_id)
            ->orderByDesc('id')
            ->get();
        return DataTables::of($pMenus)
            ->editColumn('product_id', function (ProductMenu $pmenu){
                $p = Product::find($pmenu->product_id)->name;
                return $p;
            })
            ->editColumn('uom',function(ProductMenu $pmenu){
                if($pmenu->uom == null){
                    return "";
                }else{
                    return $uom = Uom::find($pmenu->uom)->name;
                }
            })
            ->make(true);
    }

    /**
     * Show the form for creating a new Product.
     *
     * @return Response
     */
    public function create()
    {
        return view('products.create');
    }

    /**
     * Store a newly created Product in storage.
     *
     * @param CreateProductRequest $request
     *
     * @return Response
     */
    public function store(CreateProductRequest $request)
    {
        $input = $request->all();
        $input["store_id"] = Auth::user()->store_id;
        $input["created_by"] = Auth::id();

        try{
        $product = $this->productRepository->create($input);
        } catch (QueryException $e){

        }

        Flash::success('Product saved successfully.');

        return redirect(route('products.index'));
    }

    /**
     * Display the specified Product.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('products.index'));
        }

//        return view('products.show')->with('product', $product);
        return response()->json($product);
    }

    /**
     * Show the form for editing the specified Product.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('products.index'));
        }

        return view('products.edit')->with('product', $product);
    }

    /**
     * Update the specified Product in storage.
     *
     * @param  int              $id
     * @param UpdateProductRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProductRequest $request)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('products.index'));
        }

        $product = $this->productRepository->update($request->all(), $id);

        Flash::success('Product updated successfully.');

        return redirect(route('products.index'));
    }

    /**
     * Remove the specified Product from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('products.index'));
        }

        $this->productRepository->delete($id);

        Flash::success('Product deleted successfully.');

        return redirect(route('products.index'));
    }
}
