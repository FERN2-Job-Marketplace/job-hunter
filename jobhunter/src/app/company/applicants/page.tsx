"use client"

import ApplicantsTableRow from "@/app/_components/ApplicantsTableRow";
import { getListJobVacancy } from "@/fetch";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

//List all applicant berdasarkan id aja
//Dapatin Job list yg dibuat oleh user company patokan session
  //Buat array baru nampung list si job yg dibuat company.
//Array baru namanya joblisting, joblisting tadi id nya difilter dg jobId List all aplicant
  //Dapatlah applicant" nya
//Applicant" ini ditampung ke array baru, lalu candidate ID nya difilter dengan user id
  //Dapatdeh list user nya

export default function Applicants() {

  const [listJob, setListJob] = useState<JobVacancy[]>([]);
  const { data: session } = useSession();

  const filterIndex = `userId=${session?.user.id}`;

  // console.log("session:", session?.user.id);
  console.log(listJob);

  useEffect(() => {
    async function fetchData() {
      const result = await getListJobVacancy(filterIndex);
      setListJob(result);
    }

    fetchData();
  }, []);

  if (!session) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table text-raisin-black">
        <tbody>
          {Array.from({ length: 10 }).map((_, i: number) => {
            return <ApplicantsTableRow key={i} />;
          })}
          {/* {
            listJob.length > 0 && (
                <>
                {
                    listJob.map(item => (
                        <ApplicantsTableRow key={item.id} item={item}/>
                    ))
                }
                </>
            )
          } */}
        </tbody>
      </table>
    </div>
  );
}

// const [listJob, setListJob] = useState<JobVacancy[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const filterIndex = "_start=0&_end=5";
//       await getListJobVacancy(filterIndex);
//       setListJob(listJob);
//     }

//     fetchData();
//   }, []);
