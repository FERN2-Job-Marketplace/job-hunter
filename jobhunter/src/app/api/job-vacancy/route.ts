import { getServerSession } from "next-auth"
import { options } from "../auth/[...nextauth]/options"
import { NextRequest, NextResponse } from "next/server"
import { baseUrl, generateId } from "@/utils";

export async function POST (request: NextRequest) {

  const session = await getServerSession(options)
  
  const req: JobVacancy = await request.json()
  
  const jobVacancyUrl = baseUrl + "/job-vacancy";

  if(!session?.user || session?.user?.role !== "company" ) {
    return NextResponse.json({
      error: "Unauthorized",
    }, {status: 401 });
  }

  const newData: JobVacancy = {
    ...req,
    id: generateId(),
    adminId: session.user.id,
    // isActive: true,
    // createdAt: new Date().toISOString(),
    // updatedAt: new Date().toISOString(), 
  }

  try {

    const res = await fetch(jobVacancyUrl, {
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
      message: "Job successfully added"
    }, {status: 201})

  } catch (error) {
    console.error(error)
  } 
}