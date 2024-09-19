import { baseUrl, createDefaultProfile, generateId } from "@/utils";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.formData();
  const registerUrl = baseUrl + "/user";

  const name = req.get("name")?.toString();
  const email = req.get("email")?.toString();
  const password = req.get("password")?.toString();
  const role = req.get("role")?.toString();

  if (!name) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Name is required.",
      },
      { status: 400 }
    );
  }

  if (!email) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Password is required.",
      },
      { status: 400 }
    );
  }

  if (!password) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Password is required.",
      },
      { status: 400 }
    );
  }

  if (role !== "candidate" && role !== "company") {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Role is required.",
      },
      { status: 400 }
    );
  }

  const newUser: User = {
    id: generateId(),
    name: name,
    email: email,
    password: password,
    role: role,
    detailId: generateId(),
    provider: "none",
    createdAt: new Date().toISOString(),
    isVerified: false,
  };

  const res = await fetch(registerUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const resultProfile = await createDefaultProfile(role, newUser.detailId, newUser.id)

  if(resultProfile?.error) {
    return NextResponse.json({
      error: resultProfile.error,
      message: resultProfile.message,
      
    }, {status: resultProfile.status})
  }

  if (!res.ok) {
    return NextResponse.json({
      error: "Failed to register user",
      message: "Something went wrong", 

    }, {status: res.status || 500});
  }

  return NextResponse.json({
    message: "User registered successfully"
  }, {status: 201})
}
