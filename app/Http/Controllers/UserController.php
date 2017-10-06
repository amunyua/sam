<?php

namespace App\Http\Controllers;

use App\DataTables\UserDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\Store;
use App\Models\User;
use App\Repositories\UserRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Response;

class UserController extends AppBaseController
{
    /** @var  UserRepository */
    private $userRepository;

    public function __construct(UserRepository $userRepo)
    {
        $this->userRepository = $userRepo;
        $this->middleware('auth');
    }
    public function index(UserDataTable $userDataTable)
    {
        $role = Role::where('role_status','=',true)->get();
        return $userDataTable->render('users.index',[
            'roles'=>$role
        ]);
    }


    public function create()
    {
        return view('users.create');
    }


    public function store(Request $request)
    {
        $input = $request->all();
        $this->validate($request,[
           'email'=>'required|unique:users,email|',
            'name' => 'required|unique:users,name',
            'role_id' => 'required',
//            'remember_token' => 'string',
            'phone_number' => 'required|unique:users,phone_number',
            'id_number' => 'required',
        ]);

//        $user = $this->userRepository->create($input);
        //create the user if validation is passed
        DB::transaction(function ()use($request){
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt(123456);
            $user->phone_number = $request->phone_number;
            $user->id_number = $request->id_number;
            $user->status = true;

            $user->save();

            $user->roles()->attach($request->role_id);
        });



        Flash::success('User saved successfully.');

        return redirect(route('users.index'));
    }


    public function show($id)
    {
        $user = $this->userRepository->findWithoutFail($id);

//        if (empty($user)) {
//            Flash::error('User not found');
//
//            return redirect(route('users.index'));
//        }
//
//        return view('users.show')->with('user', $user);
        return response()->json($user);
    }


    public function edit($id)
    {
        $user = $this->userRepository->findWithoutFail($id);

        if (empty($user)) {
            Flash::error('User not found');

            return redirect(route('users.index'));
        }

        return view('users.edit')->with('user', $user);
    }

    public function update($id, UpdateUserRequest $request)
    {
        $user = $this->userRepository->findWithoutFail($id);

        if (empty($user)) {
            Flash::error('User not found');

            return redirect(route('users.index'));
        }

        $user = $this->userRepository->update($request->all(), $id);

        Flash::success('User updated successfully.');

        return redirect(route('users.index'));
    }

    /**
     * Remove the specified User from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $user = $this->userRepository->findWithoutFail($id);

        if (empty($user)) {
            Flash::error('User not found');

            return redirect(route('users.index'));
        }

        $this->userRepository->delete($id);

        Flash::success('User deleted successfully.');

        return redirect(route('users.index'));
    }
}
