import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProgressBar from "@ramonak/react-progress-bar";
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Pertanyaan() {
    return(
        <>
        <Navbar>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[28px] font-poppins bg-[url('/img/wave.svg')] bg-no-repeat">
                <h1 className="text-center font-semibold my-3 text-3xl text-[#1A1919]">Tes Kepribadian</h1>
                <h2 className="text-center">Pilih <b>Ya</b> atau <b>Tidak</b></h2>

                <div className="my-10">
                    <div className="grid grid-cols-2 mx-2">
                        <h3 className="text-left">Progress</h3>
                        <h3 className="text-right">60%</h3>
                    </div>
                    <ProgressBar completed={60} baseBgColor="#D9D9D9" bgColor="#E5C727" height="11px" customLabel=" "/>
                </div>

                <div className="pt-10">
                    <h3 className="mb-5 ml-2 text-lg font-medium">Apakah kamu suka berbicara?</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                            <input type="radio" id="p1-yes" name="p1" value="p1-yes" className="hidden peer" required />
                            <label for="p1-yes" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#5F93D0] bg-white border-4 border-[#5F93D0] rounded-2xl cursor-pointer peer-checked:bg-[#5F93D0] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div class="w-full mx-auto text-lg text-center font-semibold">Ya</div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="p1-no" name="p1" value="p1-no" className="hidden peer" />
                            <label for="p1-no" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#FF0000] bg-white border-4 border-[#FF0000] rounded-2xl cursor-pointer peer-checked:bg-[#FF0000] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div className="w-full mx-auto text-lg text-center font-semibold">Tidak</div>
                            </label>
                        </li>
                    </ul>

                    <h3 className="mb-5 ml-2 mt-8 text-lg font-medium">Apakah kamu suka berbicara?</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                            <input type="radio" id="p2-yes" name="p2" value="p2-yes" className="hidden peer" required />
                            <label for="p2-yes" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#5F93D0] bg-white border-4 border-[#5F93D0] rounded-2xl cursor-pointer peer-checked:bg-[#5F93D0] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div class="w-full mx-auto text-lg text-center font-semibold">Ya</div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="p2-no" name="p2" value="p2-no" className="hidden peer" />
                            <label for="p2-no" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#FF0000] bg-white border-4 border-[#FF0000] rounded-2xl cursor-pointer peer-checked:bg-[#FF0000] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div className="w-full mx-auto text-lg text-center font-semibold">Tidak</div>
                            </label>
                        </li>
                    </ul>
                </div>

                    <h3 className="mb-5 ml-2 mt-8 text-lg font-medium">Apakah kamu suka berbicara?</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                            <input type="radio" id="p3-yes" name="p3" value="p3-yes" className="hidden peer" required />
                            <label for="p3-yes" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#5F93D0] bg-white border-4 border-[#5F93D0] rounded-2xl cursor-pointer peer-checked:bg-[#5F93D0] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div class="w-full mx-auto text-lg text-center font-semibold">Ya</div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="p3-no" name="p3" value="p3-no" className="hidden peer" />
                            <label for="p3-no" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#FF0000] bg-white border-4 border-[#FF0000] rounded-2xl cursor-pointer peer-checked:bg-[#FF0000] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div className="w-full mx-auto text-lg text-center font-semibold">Tidak</div>
                            </label>
                        </li>
                    </ul>

                    <h3 className="mb-5 ml-2 mt-8 text-lg font-medium">Apakah kamu suka berbicara?</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                            <input type="radio" id="p4-yes" name="p4" value="p4-yes" className="hidden peer" required />
                            <label for="p4-yes" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#5F93D0] bg-white border-4 border-[#5F93D0] rounded-2xl cursor-pointer peer-checked:bg-[#5F93D0] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div class="w-full mx-auto text-lg text-center font-semibold">Ya</div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="p4-no" name="p4" value="p4-no" className="hidden peer" />
                            <label for="p4-no" className="inline-flex items-center justify-between w-full h-10 p-5 text-[#FF0000] bg-white border-4 border-[#FF0000] rounded-2xl cursor-pointer peer-checked:bg-[#FF0000] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                                <div className="w-full mx-auto text-lg text-center font-semibold">Tidak</div>
                            </label>
                        </li>
                    </ul>
            </div>
        </Navbar>
        </>
    );
}
