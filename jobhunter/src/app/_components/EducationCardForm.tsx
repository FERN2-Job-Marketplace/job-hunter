export default function EducationCardForm() {
  return (
    <div className="formCardBody py-[24px]">
        <p className="mb-3 text-raisin-black font-semibold capitalize text-[18px]">
            Education
        </p>
        <input type="text" placeholder="Institution Name" className="input input-bordered w-full mb-3" />
        <input type="text" placeholder="Major" className="input input-bordered w-full mb-3" />
        <input type="Number" placeholder="Duration (Years)" className="input input-bordered w-full mb-3" />
        <textarea className="textarea textarea-bordered h-36 w-full" placeholder="Education Description"></textarea>
    </div>
  )
}
