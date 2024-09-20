export default function SearchBar() {
    return(
        <>
            <div className="container mx-auto absolute">
            <div className="flex flex-col justify-center items-center gap-3 pb-5">
              <div className="font-light text-white text-lg">Find your next career at companies that you desire</div>

              <div className="w-[83%] bg-white px-20 py-2">
                <div className="flex items-end gap-56">
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="w-72 p-2 ps-12 text-sm bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Job title or keyword"
                    /> 
                  </div>
                  <div className="flex gap-10">
                    <div className="w-72 mx-auto">
                      <select
                        id="city"
                        name="city"
                        // value={''}
                        // onChange={''}
                        className="bg-white text-black mt-1 border-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">-- Pilih Kota --</option>
                        <option value="jakarta">Jakarta</option>
                        <option value="bogor">Bogor</option>
                        <option value="depok">Depok</option>
                        <option value="tangerang">Tangerang</option>
                        <option value="bekasi">Bekasi</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      type="submit"
                      className="absolute top-[47px] right-[150px] bg-[#4682B4] text-white font-bold text-lg px-4 pb-2 pt-2"
                    >
                      Search
                    </button>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </>
    )
}