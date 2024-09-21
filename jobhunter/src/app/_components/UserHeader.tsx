import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function UserHeader() {
    const currentPath = usePathname();
  return (
    <>
        <div className="dashboardContentHeader flex items-center justify-between py-4 px-5 border-b border-solid border-slate-300">
            <h1 className="font-semibold text-raisin-black text-[32px]">
                {currentPath === "/user/dashboard" ? "Dashboard" : currentPath === "/user/myapplications" ? "My Applications" : currentPath === "/user/myprofile" ? "My Profile" : "Page"}
            </h1>
            <Link href={"/"} className="border border-steel-blue border-solid text-steel-blue py-2 px-3 rounded transition hover:bg-steel-blue hover:text-white d-block">
                Back to Home
            </Link>
        </div>
    </>
  )
}
