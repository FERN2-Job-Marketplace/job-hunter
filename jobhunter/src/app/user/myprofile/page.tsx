import EducationCard from "@/app/_components/EducationCard";
import ExperienceCard from "@/app/_components/ExperienceCard";

export default function MyProfile() {
  return (
    <>
        <div className="dashboardProfile py-4 px-5">
            <form>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text">Select Profile Image</span>
                    </div>
                    <input type="file" accept="image/*" className="file-input file-input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">full name</span>
                    </div>
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">email</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">phone number</span>
                    </div>
                    <input type="number" placeholder="081234567890" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">birth date</span>
                    </div>
                    <input type="date" placeholder="Birth Date" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">gender</span>
                    </div>
                    <select className="select select-bordered text-raisin-black w-full">
                        <option disabled selected>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Apache Helicopter</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">Years of Experience</span>
                    </div>
                    <input type="number" placeholder="Years of Experience" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">about me</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="About Me"></textarea>
                </label>    
                <ExperienceCard/>
                <EducationCard/>
                <div className="formCard border border-solid border-slate-300 rounded w-full max-w-lg p-3 my-5">
                    <div className="formCardHeader flex items-center justify-between mb-3">
                        <p className="m-0 text-raisin-black font-semibold capitalize text-[16px]">
                            skills
                        </p>
                    </div>
                    <textarea className="textarea textarea-bordered h-36 w-full" placeholder="List Your Skills"></textarea>
                </div>
            </form>
        </div>
    </>
  )
}
