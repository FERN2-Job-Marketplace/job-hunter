export default function PostaJobs() {
  return (
    <>
      <div className="dashboardPostjobs py-4 px-5">
        <form>
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  job title
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Job titles must be describe one position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  type="text"
                  placeholder="Eg. Frontend Developer"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Type of Employment
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Select type of employements
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Select Type of Employments
                  </option>
                  <option>Full Time</option>
                  <option>Contract</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  salary
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  specify salary range
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  type="number"
                  placeholder="Rp"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Categories
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  You can select job categories
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Select Job Categories
                  </option>
                  <option>Technologies</option>
                  <option>Marketing</option>
                  <option>HR</option>
                  <option>Finance</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  location
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  You can select job categories
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Location
                  </option>
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
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Job Descriptions
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Job titles must be describe one position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Job Description"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Responsibilities
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe responsibilities of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Responsibilities"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Requirements
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Requirements of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Requirements"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Nice to Haves
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Nice to Haves of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Nice to Haves"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Perks and Benefits
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Perks and Benefits of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Perks and Benefits"
                ></textarea>
              </div>
            </div>
          </div>
          <button className="bg-steel-blue text-white font-bold border border-solid border-steel-blue text-center transition px-[24px] py-[12px] my-3 hover:text-steel-blue hover:bg-white">
            Post a Job
          </button>
        </form>
      </div>
    </>
  );
}
