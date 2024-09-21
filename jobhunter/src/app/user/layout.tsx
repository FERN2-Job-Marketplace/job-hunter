"use client";
import SidebarUser from "../_components/SidebarUser";
import UserHeader from "../_components/UserHeader";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <style jsx global>{`
                .navbar {
                    display: none;
                }
            `}</style>
            <div className="dashboard bg-white flex min-h-screen">

                <SidebarUser/>
                <div className="dashboardContent container w-full md:w-9/12 py-4">
                    <UserHeader/>
                    {children}
                </div>
            </div>
        </>
    )
  }