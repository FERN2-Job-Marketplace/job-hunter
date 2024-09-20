
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import SignInBtn from "./SignIn-Btn";
import LogoutBtn from "./Logout-Btn";

export default async function Navbar() {

  const session = await getServerSession(options)

  // console.log("session Navbar: ", session);

  return (
    <div className="w-screen mx-auto bg-[#202430] fixed z-20 top-0 start-0">
      <div className="w-screen px-10 py-0.5">
        <div className="container mx-auto px-16 w-[100%] flex justify-center items-center">
          <div className="font-bold text-[#ffffff] text-xl">jobhunter</div>
                  
          <div className="w-[55%] px-10 flex gap-4 mt-[3px]">
            <button className="font-normal px-2.5 py-2 hover:bg-[#4D7EA8] text-[#ffffff] text-sm">Cari Perusahaan</button>
            <button className="font-normal px-2.5 py-2 hover:bg-[#4D7EA8] text-[#ffffff] text-sm">Cari Lowongan</button>
          </div>
                  
          <div className="w-[38%] px-2 py-2 flex justify-end items-end gap-4">
            <button className="uppercase px-2.5 py-2 hover:bg-[#4D7EA8] text-sm font-normal text-[#ffffff]">Login</button> 
            <button className="uppercase px-2.5 py-2 hover:bg-[#4D7EA8] text-sm font-normal text-[#ffffff]">Register</button>
            <div>
              {session ? <LogoutBtn /> : <SignInBtn /> }
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="navbar bg-base-300 fixed justify-between">
    //   <div className="">
    //     <Link href="/" className="btn btn-ghost text-xl">Job Hunt</Link>
    //   </div>
    //   <div className="flex flex-row gap-5 text-xl tracking-widest">

    //     <Link href="/job" className="link link-hover hover:font-semibold active:text-primary rounded-md">Job Hunt!</Link>
    //   </div>
    // </div>
  );
}
