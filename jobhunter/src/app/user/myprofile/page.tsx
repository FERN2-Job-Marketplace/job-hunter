'use client'

import EducationCardForm from "@/app/_components/EducationCardForm";
import ExperienceCardForm from "@/app/_components/ExperienceCardForm";
import { useMyProfile } from "./hooks";

export default function MyProfile() {
    const { input, handleChangeImage, handleChangeInput, handleSaveProfile } = useMyProfile()

  return (
    <>
        <div className="dashboardProfile py-4 px-5">
            <form>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text">Select Profile Image</span>
                    </div>
                    <input 
                    onChange={handleChangeImage}
                    name="image"
                    type="file" 
                    accept="image/*" 
                    className="file-input file-input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">full name</span>
                    </div>
                    <input 
                    value={input.name}
                    onChange={handleChangeInput}
                    type="text" 
                    placeholder="Full Name"
                    name="name"
                    className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">email</span>
                    </div>
                    <input 
                    value={input.email}
                    onChange={handleChangeInput}
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">phone number</span>
                    </div>
                    <input 
                    value={input.number}
                    onChange={handleChangeInput}
                    type="number" 
                    name="number"
                    placeholder="081234567890" 
                    className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">birth date</span>
                    </div>
                    <input 
                    value={input.birthdate}
                    onChange={handleChangeInput}
                    type="date" 
                    name="birthdate"
                    placeholder="Birth Date" 
                    className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">gender</span>
                    </div>
                    <select 
                        value={input.gender}
                        onChange={handleChangeInput}
                        name="gender"
                        defaultValue={""}
                        className="select select-bordered text-raisin-black w-full"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">Years of Experience</span>
                    </div>
                    <input 
                    value={input.yearsexperience}
                    onChange={handleChangeInput}
                    name="yearsexperience"
                    type="number" 
                    placeholder="Years of Experience" 
                    className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full max-w-sm mb-3">
                    <div className="label">
                        <span className="label-text capitalize text-slate-grey">about me</span>
                    </div>
                    <textarea 
                    value={input.about}
                    onChange={handleChangeInput}
                    name="about"
                    className="textarea textarea-bordered h-24" 
                    placeholder="About Me"></textarea>
                </label>    
                <ExperienceCardForm handleChangeInput={handleChangeInput} input={input} />
                <EducationCardForm handleChangeInput={handleChangeInput} input={input} />
                <div className="formCard border border-solid border-slate-300 rounded w-full max-w-lg p-3 my-5">
                    <div className="formCardHeader flex items-center justify-between mb-3">
                        <p className="m-0 text-raisin-black font-semibold capitalize text-[16px]">
                            skills
                        </p>
                    </div>
                    <textarea 
                    value={input.skills}
                    onChange={handleChangeInput}
                    name="skills"
                    className="textarea textarea-bordered h-36 w-full" 
                    placeholder="List Your Skills"></textarea>
                </div>
                <button 
                    type="button"
                    onClick={handleSaveProfile}
                    className="bg-steel-blue block text-white font-bold capitalize border border-solid border-steel-blue text-center transition px-[24px] py-[12px] hover:text-steel-blue hover:bg-white">
                    Save Profile
                </button>
            </form>
        </div>
    </>
  )
}
