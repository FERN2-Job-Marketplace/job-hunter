"use client";

import DashboardHeader from "../_components/DashboardHeader";
import SidebarCompany from "../_components/SidebarCompany";
import JobProvider from "./context/Job-Context";

async function getListJobVacancy () {
  const res = await fetch(`http://localhost:3000/api/job-vacancy`, {
    method: "get"
  })

  const data = await res.json()

  if(!res.ok) {
    return
  }
  return data
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const listJob = await getListJobVacancy()

  // console.log("listJob: ", listJob);

  return (
    <>
    <JobProvider jobs={listJob}>
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
      </JobProvider>
    </>
  );
}
