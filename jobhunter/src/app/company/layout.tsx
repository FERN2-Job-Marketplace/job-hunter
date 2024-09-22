"use client";

import DashboardHeader from "../_components/DashboardHeader";
import SidebarCompany from "../_components/SidebarCompany";

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
          .footer{
              display: none;
          }
      `}</style>
      <div className="dashboard bg-white flex min-h-screen">

          <SidebarCompany/>
          <div className="dashboardContent container w-full md:w-9/12 py-4">
              <DashboardHeader/>
              {children}
          </div>
      </div>
    </>
  );
}
