<?php

namespace App\Http\Controllers\Admin;
use App\Models\UserKepribadian;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function authAdmin(){

        $role = User::find(Auth::id())->role;
    
        if ($role == "user") {
            return redirect()->route("home");
        } elseif ($role == "pakar") {
            return redirect()->route("pakar.index");
        }
    }
    public function index()
    {
        $this->authAdmin();
        $data = [
            'historis'=> User::with('kepribadians')->orderBy('id', 'asc')->get()
        ];
        return Inertia::render('Admin/HistoriDiagnosa',$data);
    }


    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $this->authAdmin();
        $user_kepribadian = UserKepribadian::where('user_id', $request->user_id)->where('diagnosa_id', $request->diagnosa_id);
        $user_kepribadian->delete();
        return redirect(route('admin.histori.index'));
    }
}
