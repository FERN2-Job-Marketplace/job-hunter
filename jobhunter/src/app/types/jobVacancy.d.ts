declare global {
  interface JobVacancy {
    id: string;
    adminId: string;
    title: string;
    companyName: string;
    location: {
      city: string;
      remote: boolean;
    };
    details: {
      description: string;
      requirements: string[];
      preferences: string[];
      salary: string
      benefits?: string[];
    };
    applicationDeadline: string; // ISO date string
    createdAt: string; // ISO date-time string
    updatedAt: string; // ISO date-time string
    isActive: boolean;
    jobType?: "full-time" | "part-time" | "contract" | "internship";
    experienceLevel?: "entry" | "mid" | "senior" | "executive";
  }
}

export {}
