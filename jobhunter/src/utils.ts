import { nanoid } from "nanoid";

export const baseUrl = "http://localhost:3001";

export const generateId = () => {
  return nanoid(5);
};

// export const createDefaultProfile<T> = async (): Promise<T> => {

// }

const defaultCandidateProfile = {
  dateOfBirth: "",
  gender: "",
  phoneNumber: "",
  profilePicture: "",
  bio: "",
  currentCity: "",
  currentCountry: "",

  experience: [],

  education: [],

  skills: [],

  isEligible: false,

  resumeUrl: "",
  socialProfiles: {
    linkedin: "",
    github: "",
    portfolio: "",
  },
  desiredJobTitle: "",
  desiredSalary: 0,
  willingToRelocate: false,
  preferredWorkEnvironment: [],
  updatedAt: "",
};

const defaultCompanyProfile = {
  companyName: "",
  companyWebsite: "",
  industry: "",
  companySize: "",
  foundedYear: "",
  companyDescription: "",
  headquarters: "",
  logoUrl: "",
  socialProfiles: {
    linkedin: "",
    twitter: "",
  },
  benefits: [],
  culture: "",
  hiringProcess: "",
  isEligible: false,
  updatedAt: "",
};

export async function createDefaultProfile(
  role: User["role"],
  id: User["detailId"],
  userId: User["id"]
) {
  const createProfileUrl = baseUrl + "/profile";

  let newData = {};

  try {
    if (role === "candidate") {
      newData = {
        ...defaultCandidateProfile,
        id: id,
        userId: userId,
      } as CandidateProfile;
    } else {
      newData = {
        ...defaultCompanyProfile,
        id: id,
        userId: userId,
      } as CompanyProfile;
    }

    const res = await fetch(createProfileUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!res.ok) {
      return {message: "Failed to create user profile", status: res.status, error: res.statusText};
    }

    return { message: `${role}, ${res.text}`, status: res.status };
  } catch (error) {
    console.log(error); 
  }
}
