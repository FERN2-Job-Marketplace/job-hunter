
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import SignInBtn from "./SignIn-Btn";
import LogoutBtn from "./Logout-Btn";

export default async function Navbar() {

  const session = await getServerSession(options)

  // console.log("session Navbar: ", session);

  return (
    <div className="navbar bg-base-300 fixed justify-between">
      <div className="">
        <Link href="/" className="btn btn-ghost text-xl">Job Hunt</Link>
      </div>
      <div className="flex flex-row gap-5 text-xl tracking-widest">

        <Link href="/job" className="link link-hover hover:font-semibold active:text-primary rounded-md">Job Hunt!</Link>
      </div>
      <div>
        {session ? <LogoutBtn /> : <SignInBtn /> }
      </div>
    </div>
  );
}
