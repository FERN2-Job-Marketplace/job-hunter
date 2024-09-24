import AuthOptionBtn from "@/app/_components/AuthOptionBtn";


export default function SignUpPage(){
 
    return(
        <>
            <style jsx global>{`
            .navbarMain {
                display: none;
            }
            .footer{
                display: none;
            }
            `}</style>
            <div className="flex justify-center items-center w-full h-screen bg-white">
                <div className="p-5 flex flex-col gap-3 justify-center bg-white md:min-w-[405px]">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <img 
                        src="/Vector.png" 
                        alt="icon" 
                        className="w-6 h-6"/>
                        <h1 className="text-steel-blue text-xl font-bold">JobHunter</h1>
                    </div>
                    <AuthOptionBtn/>
                    <label className="form-control w-full">
                    <div className="label">
                        <span className="text-base font-semibold tracking-widest text-dark-grey-text">Full Name</span>
                    </div>
                    <input
                        type="text"
                        name="Full Name"
                        placeholder="Full Name"
                        className="input text-black input-bordered w-full focus:border-steel-blue rounded-none bg-white"
                    />
                    </label>
                    <label className="form-control w-full">
                    <div className="label">
                        <span className="text-base font-semibold tracking-widest text-dark-grey-text">Email</span>
                    </div>
                    <input
                        type="text"
                        name="Email"
                        placeholder="Email"
                        className="input text-black input-bordered w-full focus:border-steel-blue rounded-none bg-white"
                    />
                    </label>
                    <label className="form-control w-full">
                    <div className="label">
                        <span className="text-base font-semibold tracking-widest text-dark-grey-text">Password</span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input text-black input-bordered w-full focus:border-steel-blue rounded-none bg-white"
                    />
                    </label>
                    <button className="btn bg-steel-blue text-white font-semibold text-base border-0 rounded-none hover:bg-slate-400 mt-5">
                        Register
                    </button>
                    <div className="flex flex-row justify-center text-base text-dark-grey-text gap-1">
                        <h1>Already Have an Account?</h1>
                        <a href="signIn" className="text-steel-blue">Login</a>
                    </div>
                    <div className="w-80 text-xs text-dark-grey-text tracking-wide  m-auto">
                        By clicking 'Register', you acknowledge that you have read and accept the 
                        <a href="" className="text-blue-300 gap-1">Terms of Service</a> and <a href="" className="text-blue-300 gap-1">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}