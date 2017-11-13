<?php

namespace App\Http\Controllers;

use App\DataTables\UOMDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateUOMRequest;
use App\Http\Requests\UpdateUOMRequest;
use App\Repositories\UOMRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Support\Facades\Auth;
use Response;

class UOMController extends AppBaseController
{
    /** @var  UOMRepository */
    private $uOMRepository;

    public function __construct(UOMRepository $uOMRepo)
    {
        $this->uOMRepository = $uOMRepo;
    }

    /**
     * Display a listing of the UOM.
     *
     * @param UOMDataTable $uOMDataTable
     * @return Response
     */
    public function index(UOMDataTable $uOMDataTable)
    {
        return $uOMDataTable->render('u_o_m_s.index');
    }

    /**
     * Show the form for creating a new UOM.
     *
     * @return Response
     */
    public function create()
    {
        return view('u_o_m_s.create');
    }

    /**
     * Store a newly created UOM in storage.
     *
     * @param CreateUOMRequest $request
     *
     * @return Response
     */
    public function store(CreateUOMRequest $request)
    {
        $input = $request->all();
        $input['created_by'] = Auth::id();
        $input['store_id'] = Auth::user()->store_id;

        $uOM = $this->uOMRepository->create($input);

        Flash::success('U O M saved successfully.');

        return redirect(route('uOMS.index'));
    }

    /**
     * Display the specified UOM.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $uOM = $this->uOMRepository->findWithoutFail($id);

//        if (empty($uOM)) {
//            Flash::error('U O M not found');
//
//            return redirect(route('uOMS.index'));
//        }
        return response()->json($uOM);
//        return view('u_o_m_s.show')->with('uOM', $uOM);
    }

    /**
     * Show the form for editing the specified UOM.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $uOM = $this->uOMRepository->findWithoutFail($id);

        if (empty($uOM)) {
            Flash::error('U O M not found');

            return redirect(route('uOMS.index'));
        }

        return view('u_o_m_s.edit')->with('uOM', $uOM);
    }

    /**
     * Update the specified UOM in storage.
     *
     * @param  int              $id
     * @param UpdateUOMRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateUOMRequest $request)
    {
        $uOM = $this->uOMRepository->findWithoutFail($id);

        if (empty($uOM)) {
            Flash::error('U O M not found');

            return redirect(route('uOMS.index'));
        }

        $uOM = $this->uOMRepository->update($request->all(), $id);

        Flash::success('U O M updated successfully.');

        return redirect(route('uOMS.index'));
    }

    /**
     * Remove the specified UOM from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $uOM = $this->uOMRepository->findWithoutFail($id);

        if (empty($uOM)) {
            Flash::error('U O M not found');

            return redirect(route('uOMS.index'));
        }

        $this->uOMRepository->delete($id);

        Flash::success('U O M deleted successfully.');

        return redirect(route('uOMS.index'));
    }
}
