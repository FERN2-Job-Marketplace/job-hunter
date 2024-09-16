"use client";

import { signIn } from "next-auth/react";
import { useRef } from "react";

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
    <div className="flex justify-center items-center w-full h-screen">
      <div className="p-3 shadow-md rounded-md flex flex-col gap-3 justify-center bg-slate-800">
        <label className="form-control w-80 ">
          <div className="label">
            <span className="text-xs tracking-widest">Username?</span>
          </div>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              usernameCurr = e.target.value;
            }}
            placeholder=". . ."
            className="input w-80 bg-transparent"
          />
        </label>
        <label className="form-control w-80 ">
          <div className="label">
            <span className="text-xs tracking-widest">Password?</span>
          </div>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              passwordCurr = e.target.value;
            }}
            placeholder=". . ."
            className="input w-80 bg-transparent"
          />
        </label>
        <button onClick={onSubmit} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}
