"use client";

import JoblistingTableRow from "@/app/_components/JoblistingTableRow";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getListJobVacancy } from "@/fetch";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function JobListing() {

// const [dataJob, setDataJob] = useState<JobVacancy[]>([]);
//   const { data: session } = useSession();

//   // console.log("session:", session?.user.id);
//   console.log(dataJob);

//   useEffect(() => {
//     async function fetchData() {
//       // const filterIndex = "_start=0&_end=5"
//       const result = await getListJobVacancy();
//       setDataJob(result);
//     }

//     fetchData();
//   }, []);

//   if (!session) {
//     return null;
//   }

//   const listJob = dataJob.filter((el) => el.userId === session.user.id);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table text-raisin-black">
          <thead className="text-slate-grey">
            <tr>
              <th className="font-medium text-[16] capitalized">Roles</th>
              <th className="font-medium text-[16] capitalized">
                Classifications
              </th>
              <th className="font-medium text-[16] capitalized">Date Posted</th>
              <th className="font-medium text-[16] capitalized">Job Type</th>
              <th className="font-medium text-[16] capitalized">Applicants</th>
              <th className="font-medium text-[16] capitalized">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i: number) => {
              return <JoblistingTableRow key={i} />;
            })}
            {/* {listJob.length > 0 && (
              <>
                {listJob.map((item) => (
                  <JoblistingTableRow key={item.id} item={item} />
                ))}
              </>
            )} */}
          </tbody>
        </table>
      </div>
    </>
  );
}



