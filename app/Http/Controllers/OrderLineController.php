<?php

namespace App\Http\Controllers;

use App\DataTables\OrderLineDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateOrderLineRequest;
use App\Http\Requests\UpdateOrderLineRequest;
use App\Repositories\OrderLineRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Response;

class OrderLineController extends AppBaseController
{
    /** @var  OrderLineRepository */
    private $orderLineRepository;

    public function __construct(OrderLineRepository $orderLineRepo)
    {
        $this->middleware('auth');
        $this->orderLineRepository = $orderLineRepo;
    }

    /**
     * Display a listing of the OrderLine.
     *
     * @param OrderLineDataTable $orderLineDataTable
     * @return Response
     */
    public function index(OrderLineDataTable $orderLineDataTable)
    {
        return $orderLineDataTable->render('order_lines.index');
    }

    /**
     * Show the form for creating a new OrderLine.
     *
     * @return Response
     */
    public function create()
    {
        return view('order_lines.create');
    }

    /**
     * Store a newly created OrderLine in storage.
     *
     * @param CreateOrderLineRequest $request
     *
     * @return Response
     */
    public function store(CreateOrderLineRequest $request)
    {
        $input = $request->all();

        $orderLine = $this->orderLineRepository->create($input);

        Flash::success('Order Line saved successfully.');

        return redirect(route('orderLines.index'));
    }

    /**
     * Display the specified OrderLine.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $orderLine = $this->orderLineRepository->findWithoutFail($id);

        if (empty($orderLine)) {
            Flash::error('Order Line not found');

            return redirect(route('orderLines.index'));
        }

        return view('order_lines.show')->with('orderLine', $orderLine);
    }

    /**
     * Show the form for editing the specified OrderLine.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $orderLine = $this->orderLineRepository->findWithoutFail($id);

        if (empty($orderLine)) {
            Flash::error('Order Line not found');

            return redirect(route('orderLines.index'));
        }

        return view('order_lines.edit')->with('orderLine', $orderLine);
    }

    /**
     * Update the specified OrderLine in storage.
     *
     * @param  int              $id
     * @param UpdateOrderLineRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrderLineRequest $request)
    {
        $orderLine = $this->orderLineRepository->findWithoutFail($id);

        if (empty($orderLine)) {
            Flash::error('Order Line not found');

            return redirect(route('orderLines.index'));
        }

        $orderLine = $this->orderLineRepository->update($request->all(), $id);

        Flash::success('Order Line updated successfully.');

        return redirect(route('orderLines.index'));
    }

    /**
     * Remove the specified OrderLine from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $orderLine = $this->orderLineRepository->findWithoutFail($id);

        if (empty($orderLine)) {
            Flash::error('Order Line not found');

            return redirect(route('orderLines.index'));
        }

        $this->orderLineRepository->delete($id);

        Flash::success('Order Line deleted successfully.');

        return redirect(route('orderLines.index'));
    }
}
