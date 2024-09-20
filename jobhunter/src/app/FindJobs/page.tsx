import CardFindJobs from "../_components/CardFindJobs";
import CustomBackground from "../_components/CustomBackground";
import SearchBar from "../_components/SearchBar";


export default function FindJobs() {
    return(
        <>
            <CustomBackground />
            <div className="w-screen h-[475px] bg-cale">
                <div className="container w-[83%] mx-auto pt-32">
                    <div className="pb-5 flex gap-2 justify-center items-center">
                        <div className="font-bold text-white text-5xl">Find your</div>
                        <div className="font-bold text-[#26A4FF] text-5xl">dream job</div>
                    </div>
                </div>
                <SearchBar />
            </div>
            <div className="flex flex-row bg-white pl-40 py-20">
                <div className="w-[20%]">
                    <div>
                        <h3 className="text-black font-semibold pb-4 ">Type of Employment</h3>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Full Time
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={true} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Part Time
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Intership
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Contract
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-black font-semibold pb-4 pt-5">Categories</h3>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Design
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Devs
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Intership
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Marketing
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Sales
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Businesss
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Human Resource
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Finance
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Tecnology
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Engineering
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-black font-semibold pb-4 pt-5">Salary Range</h3>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 1jt - 4jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 5jt - 7jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 8jt - 10jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 11jt - 15jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 16jt - 20jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 21jt - 25jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 26jt - 30jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 31jt - 40jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 41jt - 50jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 50jt - 70jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 70jt - 99jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-primary checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 100jt ++
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-bold text-black">All Jobs</h3>
                        <h3 className="text-sm font-normal text-gray-700">Showing 73 results</h3>
                    </div>
                    <div className="mt-5">
                        <CardFindJobs/>
                        <CardFindJobs/>
                        <CardFindJobs/>
                        <CardFindJobs/>
                        <CardFindJobs/>
                        <CardFindJobs/>
                        <CardFindJobs/>
                    </div>
                </div>
            </div>
        </>
    )
}