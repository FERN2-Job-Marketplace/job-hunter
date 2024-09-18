export default function SignUpPage(){
    return(
        <div className="flex justify-center items-center w-full h-screen bg-white">
            <div className="p-5 shadow-md flex flex-col gap-3 justify-center bg-white">
                <div className="flex flex-row justify-center items-center gap-2">
                    <img 
                    src="/Vector.png" 
                    alt="icon" 
                    className="w-6 h-6"/>
                    <h1 className="text-steel-blue text-xl font-bold">JobHunter</h1>
                </div>
            <div className="flex flex-row justify-center items-center">
                <button className="w-24 px-2 py-2 text-steel-blue text-base font-semibold hover:bg-slate-300">Job Seeker</button>
                <button className="w-24 px-2 py-2 text-steel-blue text-base font-semibold hover:bg-slate-300">Company</button>
            </div>
            <label className="form-control w-80 ">
            <div className="label">
                <span className="text-base font-semibold tracking-widest text-dark-grey-text">Full Name</span>
            </div>
            <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                className="input text-black input-bordered w-full max-w-xs focus:border-steel-blue rounded-none bg-white"
            />
            </label>
            <label className="form-control w-80 ">
            <div className="label">
                <span className="text-base font-semibold tracking-widest text-dark-grey-text">Email</span>
            </div>
            <input
                type="text"
                name="Email"
                placeholder="Email"
                className="input text-black input-bordered w-full max-w-xs focus:border-steel-blue rounded-none bg-white"
            />
            </label>
            <label className="form-control w-80 ">
            <div className="label">
                <span className="text-base font-semibold tracking-widest text-dark-grey-text">Password</span>
            </div>
            <input
                type="password"
                name="password"
                placeholder="password"
                className="input text-black input-bordered w-full max-w-xs focus:border-steel-blue rounded-none bg-white"
            />
            </label>
            <button className="btn bg-steel-blue text-white font-semibold text-base border-0 rounded-none hover:bg-slate-400 mt-5">
                Register
            </button>
            <div className="flex flex-row justify-center items-center text-base text-dark-grey-text gap-1">
                <h1>Already Have an Account?</h1>
                <a href="signIn" className="text-steel-blue">Login</a>
            </div>
            <div className="w-80 text-xs text-dark-grey-text tracking-wide">
                By clicking 'Register', you acknowledge that you have read and accept the 
                <a href="" className="text-blue-300 gap-1">Terms of Service</a> and <a href="" className="text-blue-300 gap-1">Privacy Policy</a>
            </div>
        </div>
    </div>
    )
}