export default function ExperienceCardForm() {
  return (
    <>
        <div className="formCardBody py-[24px]">
            <p className="mb-3 text-raisin-black font-semibold capitalize text-[18px]">
                Job Experience
            </p>
            <input type="text" placeholder="Job Title" className="input input-bordered w-full mb-3" />
            <div className="flex items-center justify-between w-full mb-3">
                <input type="text" placeholder="Company Name" className="input input-bordered w-5/12" />
                <select className="select select-bordered text-raisin-black w-5/12">
                    <option disabled selected>Job Type</option>
                    <option>Full Time</option>
                    <option>Contract</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                </select>
            </div>
            <input type="Number" placeholder="Duration (Years)" className="input input-bordered w-full mb-3" />
            <select className="select select-bordered text-raisin-black w-full mb-3">
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
            <textarea className="textarea textarea-bordered h-36 w-full" placeholder="Job Description"></textarea>
        </div>
    </>
  )
}
