import CardFindJobs from "../_components/CardFindJobs";
import CustomBackground from "../_components/CustomBackground";
import SearchBar from "../_components/SearchBar";


export default function FindJobs() {
    return(
        <>
            <div className="homeHero w-full min-h-[80vh] flex items-center justify-center bg-raisin-black">
                <div className="homeHeroContent relative z-[1]">
                    <h1 className="font-bold text-white text-center text-4xl lg:text-5xl mb-[25px]">Discover more than <span className="text-celestial-blue">5000+ Job</span></h1>
                    <p className="text-slate-grey text-center text-[18px] mb-4">Find your next career at companies that you desire</p>
                    <SearchBar/>
                </div>
            </div>
            <div className="flex flex-row bg-white pl-40 py-20">
                <div className="w-[20%]">
                    <div>
                        <h3 className="text-black font-semibold pb-4 ">Type of Employment</h3>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Full Time
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={true} className="checkbox checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Part Time
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Intership
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
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
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Design
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Devs
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Intership
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Marketing
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Sales
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Businesss
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Human Resource
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={true} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Finance
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Tecnology
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
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
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 1jt - 4jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 5jt - 7jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 8jt - 10jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 11jt - 15jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 16jt - 20jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 21jt - 25jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 26jt - 30jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 31jt - 40jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                            Rp 41jt - 50jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 50jt - 70jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={false} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 70jt - 99jt
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" checked={true} className="checkbox  checkbox-sm border-2 border-gray-300" />
                            <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-light text-gray-700"
                            >
                           Rp 100jt ++
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-bold text-black">All Jobs</h3>
                            <h3 className="text-sm font-normal text-gray-700">Showing 73 results</h3>
                        </div>
                        <div className="flex flex-row">
                            <h3 className="pt-4 text-dark-grey-text">Sort by:</h3>
                            <select
                                name="Search"
                                id="Search"
                                // onChange={}
                                defaultValue={""}
                                className="bg-white outline-none text-black"
                                >
                                <option value="">Newest</option>
                                <option value="">Oldest</option>
                            </select>
                        </div>
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
                    <nav aria-label="Page navigation example" className="mt-7 ml-64">
                        <ul className="flex items-center -space-x-px h-8 text-base font-semibold">
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                1
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-white dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                2
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                aria-current="page"
                                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-50 hover:bg-steel-blue hover:text-white dark:bg-white dark:text-gray-400"
                                >
                                3
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                4
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-white dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                5
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
               
            </div>
        </>
    )
}