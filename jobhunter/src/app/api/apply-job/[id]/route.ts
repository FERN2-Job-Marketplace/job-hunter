import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { baseUrl, generateId, getDetailApplicant } from "@/utils";

//Route API GET detail apply job ada juga di utils

//disini /[id] = applicant id
export async function GET(
  requets: NextRequest,
  { params }: { params: { id: string } }
) {
  const appliedUrl = baseUrl + `/applicant/${params.id}`;

  // console.log("id:", id);
  // console.log("url:", appliedUrl);

  const res = await fetch(appliedUrl);

  // console.log(res);

  if (!res.ok) {
    return {
      error: "Get Applicant Detail Error",
      status: res.status || 500,
    };
  }

  const data: ApplyJob = await res.json();

  // console.log("this is data: ", data);

  return data;
}

//Untuk apply job baru
// ID nya si JOB ID
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(options);
  // console.log("session: ", session);

  const applyJobUrl = baseUrl + "/applicant";

  if (session?.user?.role !== "candidate") {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  //validasi utk cek apakah user sudah ada job id yg sama
  // if()

  const newData: ApplyJob = {
    id: generateId(),
    status: "ongoing",
    note: "",
    jobId: params.id,
    candidateId: session.user.id,
    appliedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(applyJobUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "Failed",
          message: "Something went wrong",
        },
        { status: res.status || 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Job successfully Applied",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { detailId: string } }
) {
  const session = await getServerSession(options);

  if (session?.user?.role !== "company") {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  try {
    const req: ApplyJob = await request.json();

    // console.log("req: ", req);

    const updateApplicantUrl = baseUrl + `/applicant/${params.detailId}`;

    // let newData = {} as ApplyJob;

    // newData = {
    //   ...req,
    // } as ApplyJob;

    // if (!newData.companyName || !newData.companyDescription) {
    //   newData.isEligible = false;
    // } else newData.isEligible = true;

    // console.log("newData: ", newData);

    const res = await fetch(updateApplicantUrl, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: res.statusText,
        },
        { status: res.status || 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Applicant successfully Updated",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
  }
}

// INI ID Si Applicant
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(options);

  // console.log(session);
  // console.log(params.id);

  let appliedUrl = baseUrl + `/applicant`;

  if (session?.user?.role !== "candidate") {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  try {
    const detailApplicantRes: ApplyJob = await getDetailApplicant(params.id);

    console.log("detail: ", detailApplicantRes);

    if (
      detailApplicantRes.status === "ongoing" ||
      detailApplicantRes.status === "rejected"
    ) {
      return NextResponse.json(
        {
          message: "Job Applied is no longer Valid",
        },
        { status: 403 }
      );
    }

    appliedUrl += `/${detailApplicantRes.id}`;

    // console.log(appliedUrl);

    const res = await fetch(appliedUrl, {
      method: "delete",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "Failed",
          message: "Something went wrong",
        },
        { status: res.status || 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Applicant Successfully Deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
}
