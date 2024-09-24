export type category =
  "technology"
  | "devs"
  | "finance"
  | "marketing"
  | "creative"
  | "engineering"
  | "education"
  | "administrative"
  | "hr"
  | "legal"
  | "freelance"
  | "remote";

export type location =
  "jakarta pusat"
  | "jakarta selatan"
  | "jakarta utara"
  | "jakarta barat"
  | "jakarta timur"
  | "depok"
  | "bekasi"
  | "tanggerang"
  | "surabaya"
  | "bogor"
  | "bandung"
  | "remote";

export type jobType = 
  "full-time" 
  | "part-time" 
  | "contract" 
  | "internship"
  | undefined;

declare global {
  interface JobVacancy {
    id: string;
    userId: string;
    category?: category;
    title: string;
    companyName: string;
    location: string;
    details: {
      description: string;
      requirements: string[];
      preferences: string[];
      benefits?: string[];
      salary: string
    };
    salary: number;
    applicationDeadline: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    jobType?: jobType;
    experienceLevel?: "entry" | "mid" | "senior" | "executive";
  }
}

export {};
