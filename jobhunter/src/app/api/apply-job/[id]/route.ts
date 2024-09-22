import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { baseUrl, generateId, getDetailApplicant } from "@/utils";


// "applicantness" : [
//     {
//       "id": "a01",
//       "applied_id": "jv01", //Foreign Key dri job_vacancies[].id
//       "candidate_id": 1, //Foreign Key dri user[].id
//       "applied_at": "Date"
//     }
//   ],

// ID nya si JOB ID
export async function POST (request: NextRequest, {params} : {params: {id: string}}) {

  const session = await getServerSession(options)
  // console.log("session: ", session);
  
  const applyJobUrl = baseUrl + "/applicant";

  if(session?.user?.role !== "candidate") {
    return NextResponse.json({
      error: "Unauthorized",
    }, {status: 401 });
  }

  const newData: ApplyJob = {
    id: generateId(),
    isOffered: false,
    note: "",
    jobId: params.id,
    candidateId: session.user.id,
    appliedAt: new Date().toISOString() 
  }

  try {

    const res = await fetch(applyJobUrl, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })

    if(!res.ok) {
      return NextResponse.json({
        error: "Failed",
        message: "Something went wrong", 
  
      }, {status: res.status || 500});
    }

    return NextResponse.json({
      message: "Job successfully Applied"
    }, {status: 201})

  } catch (error) {
    console.error(error)
  } 
}

// INI ID Si Applicant
export async function DELETE (request: NextRequest, {params} : {params: {id: string}}) {

  const session = await getServerSession(options)

  // console.log(session);
  // console.log(params.id);
  
  let appliedUrl = baseUrl + `/applicant`;

  if(session?.user?.role !== "candidate") {
    return NextResponse.json({
      error: "Unauthorized",
    }, {status: 401 });
  }

  try {

    const detailApplicantRes: ApplyJob = await getDetailApplicant(params.id)

    console.log("detail: ", detailApplicantRes);
    
    if(detailApplicantRes.isOffered) {
      return NextResponse.json({
        message: "Offering is no longer Valid",
      }, {status: 403 });
    }

    appliedUrl += `/${detailApplicantRes.id}`

    // console.log(appliedUrl);

    const res = await fetch(appliedUrl, {
      method: 'delete'
    })

    if(!res.ok) {
      return NextResponse.json({
        error: "Failed",
        message: "Something went wrong", 
  
      }, {status: res.status || 500});
    }

    return NextResponse.json({
      message: "Applicant Successfully Deleted"
    }, {status: 200})

  } catch (error) {
    console.error(error)
  } 
}