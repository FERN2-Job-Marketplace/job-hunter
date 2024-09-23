export default function SearchBar() {
    return(
        <>
          <div className="container p-[24px] max-w-full bg-white rounded">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-2 lg:gap-0">
              <label className="input input-bordered flex items-center gap-2 w-full lg:w-auto">
                <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.0183 18.4851L21.5423 22" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" className="grow" placeholder="Job title or keyword" />
              </label>  
              <select className="select select-bordered text-raisin-black w-full lg:w-4/12">
                    <option disabled selected>Location</option>
                    <option>Jakarta Pusat</option>
                    <option>Jakarta Selatan</option>
                    <option>Jakarta Utara</option>
                    <option>Jakarta Barat</option>
                    <option>Jakarta Timur</option>
                    <option>Bogor</option>
                    <option>Depok</option>
                    <option>Tangerang</option>
                    <option>Bekasi</option>
              </select>
              <button className="bg-steel-blue block text-white font-bold capitalize border border-solid border-steel-blue text-center transition px-[24px] py-[12px] hover:text-steel-blue hover:bg-white w-full lg:w-fit">
                search
              </button>
            </div>
          </div>
        </>
    )
}