"use client";

import ApplicantsTableRow from "@/app/_components/ApplicantsTableRow";
import { getAllApplicant, getAllUser, getListJobVacancy } from "@/fetch";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

//List all applicant berdasarkan id aja
//Dapatin Job list yg dibuat oleh user company patokan session
//Buat array baru nampung list si job yg dibuat company.
//Array baru namanya joblisting, joblisting tadi id nya difilter dg jobId List all aplicant
//Dapatlah applicant" nya
//Applicant" ini ditampung ke array baru, lalu candidate ID nya difilter dengan user id
//Dapatdeh list user nya

// function processApplicants (item: UserFiltered, filteredApplicant: ApplyJob) {
//  const result = filteredApplicant
// }

export default function Applicants() {
  const [listJob, setListJob] = useState<JobVacancy[]>([]);
  const [listApplicant, setListApplicant] = useState<ApplyJob[]>([]);
  const [listUser, setListUser] = useState<UserFiltered[]>([]);
  const { data: session, status } = useSession();

  const filterIndex = `userId=${session?.user.id}`;

  // console.log("session:", session?.user.id);
  // console.log(listJob);

  useEffect(() => {
    
    async function fetchData() {
      const resultJobs = await getListJobVacancy(filterIndex); //udah difilter job yg hanya di buat oleh signed in user company
      const resultAplicants = await getAllApplicant();
      const resultUser = await getAllUser();
      setListJob(resultJobs);
      setListApplicant(resultAplicants);
      setListUser(resultUser);

      // console.log("result user: ", resultAplicants);
    }

    fetchData();
  }, [session]);

  if(status === "loading") {
    return <>Loading ...</>
  }

  if (!session) {
    return null;
  }

  // console.log("listApplicant:", listApplicant);

  //Dapatin applicants yg daftar di job si company signed in
  const filteredApplicants = listApplicant.filter((item) => {
    for (let i = 0; i < listJob.length; i++) {
      if (item.jobId === listJob[i].id) {
        return item;
      }
    }
  });

  // console.log("filtered: ", filteredApplicants);

  //Dapatin detail si applicants
  const findCandidate = filteredApplicants.filter((item) => {
    for (let i = 0; i < listUser.length; i++) {
      if (item.candidateId === listUser[i].id) {
        return true;
      } else false;
    }
  });

  // console.log("find candidate:", findCandidate);
  // return () => filteredApplicants.filter(el => el === item)

  return (
    <div className="overflow-x-auto">
      <table className="table text-raisin-black">
        <tbody>
          {/* {Array.from({ length: 10 }).map((_, i: number) => {
            return <ApplicantsTableRow key={i} />;
          })} */}
          {
            findCandidate.length > 0 && (
                <>
                {
                    findCandidate.map((applicant, index) => (
                        //process applicants harus return applicants yg sama dengan user
                        // <ApplicantsTableRow key={user.id} item={user} applicants={processApplicants(user, filteredApplicants[index])} />
                        <ApplicantsTableRow key={applicant.id} applicant={applicant} listUser={listUser} listJob={listJob} />
                    ))
                }
                </>
            )
          }
        </tbody>
      </table>
    </div>
  );
}