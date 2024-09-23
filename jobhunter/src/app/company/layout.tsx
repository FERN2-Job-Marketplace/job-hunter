"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "../_components/DashboardHeader";
import SidebarCompany from "../_components/SidebarCompany";
import JobProvider from "./context/Job-Context";

async function getListJobVacancy() {
  const res = await fetch(`http://localhost:3000/api/job-vacancy`, {
    method: "get",
  });

  const data = await res.json();

  if (!res.ok) {
    return;
  }
  return data;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const listJob = getListJobVacancy()

  const [listJob, setListJob] = useState<JobVacancy[]>([]);

  useEffect(() => {
    async function fetchData() {
      const getListData = await getListJobVacancy();
      console.log(getListData);
      setListJob(getListData);
    }
    fetchData();
  }, []);

  return (
    <>
      <style jsx global>{`
        .navbar {
          display: none;
        }
        .footer {
          display: none;
        }
      `}</style>
      <div className="dashboard bg-white flex min-h-screen">
        <SidebarCompany />
        <div className="dashboardContent container w-full md:w-9/12 py-4">
          <DashboardHeader />
          <JobProvider jobs={listJob}>{children}</JobProvider>
        </div>
      </div>
    </>
  );
}
