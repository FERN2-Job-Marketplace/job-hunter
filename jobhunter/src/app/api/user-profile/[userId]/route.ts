import { baseUrl } from "@/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";

export async function GET (request: NextRequest, {params} : {params: {userId: string}}) {
  const {href} = request.nextUrl
  // console.log("job id:", userId);

  let query = ""

  if(!params.userId) {
    return NextResponse.json({
      error: "Resource Not Found",
    }, {status: 404 });
  }

  if(href.includes("?")) {
    query = href.split('?').pop() || ""
  }

  let detailUserUrl = baseUrl + `/profile/${params.userId}`

  if(query) {
    detailUserUrl += `?${query}`
  }

  // console.log(detailJobUrl);

  const res = await fetch(detailUserUrl)
  
  const data: JobVacancy = await res.json()

  if(!res.ok) {
    return NextResponse.json({
      message: "No Data"
    }, {status: res.status || 500 });
  }

  return NextResponse.json(data)
}

// export async function PUT (request: NextRequest, {params} : {params: {userId: string}}) {

//   const session = getServerSession(options)

//   const updateProfileUrl = baseUrl + `/profile/${params.userId}`

//   let newData = {} as CandidateProfile | CompanyProfile

//   if(role === "candidate") {

//     newData = {
//       ...prop,
//     updatedAt: new Date().toISOString()
//     } as CandidateProfile

    
//     // const checkExpValidness = jobExperienceValidation(newData.experience)
    
//     if(
//       !newData.dateOfBirth 
//       || !newData.gender 
//       || !newData.phoneNumber 
//       || !newData.profilePicture 
//       || !newData.currentCity
//       || !newData.skills
//     ) {
//       newData.isEligible = false
//     } else newData.isEligible = true
//   } else if(role === "company") {
//     newData = {
//       ...prop,
//     updatedAt: new Date().toISOString()
//     } as CompanyProfile

//     if(
//       !newData.companyName
//       || !newData.industry
//       || !newData.companyDescription
//     ) {
//       newData.isEligible = false
//     } else newData.isEligible = true 
//   } else throw new Error("Unauthorized")

//   try {
//     const res = await fetch(updateJobUrl, {
//       method: "put",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newData)
//     })

//     if(!res.ok) {
//       return
//     }

//     await Swal.fire({
//       icon: "success",
//       title: "Update",
//       text: `${res.status}`
//     })

//     revalidatePath("/FindJobs")

//   } catch (error) {
//     console.error(error)
//   }
// }