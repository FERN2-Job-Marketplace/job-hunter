"use client";

import { signIn } from "next-auth/react";
import { useRef } from "react";
import GoogleButton from 'react-google-button'

export default function SignInPage() {
  let { current: usernameCurr } = useRef("");
  let { current: passwordCurr } = useRef("");

  //Kalo login sebagai admin akan diarahkan ke /admin. Tapi ntar itu
  const onSubmit = async () => {
    const res = await signIn("credentials", {
      username: usernameCurr,
      password: passwordCurr,
      redirect: true,
      callbackUrl: "/",
    });

    console.log("login: ", res);

  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div className="p-10 shadow-md flex flex-col gap-3 justify-center bg-white">
        <div className="flex flex-row justify-center items-center gap-2">
          <img 
          src="/Vector.png" 
          alt="icon" 
          className="w-6 h-6"/>
          <h1 className="text-steel-blue text-xl font-bold">JobHunter</h1>
        </div>
        <div className="flex flex-row justify-center items-center mt-2">
          <button className="w-24 px-2 py-1 text-steel-blue text-base font-semibold hover:bg-slate-300">Job Seeker</button>
          <button className="w-24 px-2 py-1 text-steel-blue text-base font-semibold hover:bg-slate-300">Company</button>
        </div>
        <label className="form-control w-80 ">
          <div className="label">
            <span className="text-base font-semibold tracking-widest text-dark-grey-text">Username</span>
          </div>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              usernameCurr = e.target.value;
            }}
            placeholder="username"
            className="input w-80 h-10 border-0 rounded-none bg-white"
          />
        </label>
        <label className="form-control w-80 ">
          <div className="label">
            <span className="text-base font-semibold tracking-widest text-dark-grey-text">Password</span>
          </div>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              passwordCurr = e.target.value;
            }}
            placeholder="password"
            className="input w-80 h-10 border-0 rounded-none bg-white"
          />
        </label>
        <button onClick={onSubmit} className="btn bg-steel-blue text-white font-semibold text-base border-0 rounded-none hover:bg-slate-400 mt-5">
          Login
        </button>
        <div className="flex justify-center w-full p-5">
        <GoogleButton onClick={() => signIn("google", {
          redirect:true,
          callbackUrl: '/'
        })} className="mx-auto p-3"/>
        </div>
      </div>
    </div>
  );
}
