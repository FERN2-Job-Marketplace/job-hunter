import { baseUrl } from "@/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { getUserDetail } from "@/fetch";

export async function GET(
  request: NextRequest,
  { params }: { params: { detailId: string } }
) {
  const { href } = request.nextUrl;
  // console.log("job id:", userId);

  let query = "";

  if (!params.detailId) {
    return NextResponse.json(
      {
        error: "Resource Not Found",
      },
      { status: 404 }
    );
  }

  if (href.includes("?")) {
    query = href.split("?").pop() || "";
  }

  let detailUserUrl = baseUrl + `/profile/${params.detailId}`;

  if (query) {
    detailUserUrl += `?${query}`;
  }

  // console.log(detailJobUrl);

  const res = await fetch(detailUserUrl);

  const data: JobVacancy = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      {
        message: "No Data",
      },
      { status: res.status || 500 }
    );
  }

  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { detailId: string } }
) {
  const session = await getServerSession(options);

  if(!session?.user) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401}
    );
  }

  const req: CandidateProfile | CompanyProfile = await request.json();

  const updateProfileUrl = baseUrl + `/profile/${params.detailId}`;

  let newData = {} as CandidateProfile | CompanyProfile;

  const companyDetail = await getUserDetail(params.detailId || "")

  try {
    if (session?.user?.role === "candidate") {
      newData = {
        ...req,
        updatedAt: new Date().toISOString(),
      } as CandidateProfile;

      // const checkExpValidness = jobExperienceValidation(newData.experience)

      if (
        !newData.dateOfBirth ||
        !newData.gender ||
        !newData.phoneNumber ||
        !newData.profilePicture ||
        !newData.currentCity ||
        !newData.skills
      ) {
        newData.isEligible = false;
      } else newData.isEligible = true;
    } else if (session?.user?.role === "company") {
      newData = {
        ...req,
        updatedAt: new Date().toISOString(),
      } as CompanyProfile;

      if (!newData.companyName || !newData.companyDescription) {
        newData.isEligible = false;
      } else newData.isEligible = true;
    } else throw new Error("Unauthorized");

    const res = await fetch(updateProfileUrl, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: res.statusText,
        },
        { status: res.status || 500 }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
