type category = 
  | 'technology'
  | 'devs'
  | 'finance'
  | 'marketing'
  | 'creative'
  | 'engineering'
  | 'education'
  | 'administrative'
  | 'hr'
  | 'legal'
  | 'freelance'
  | 'remote';

  type location =
    "jakarta" | "depok" | "bekasi" | "tanggerang" | "surabaya" | "bogor" | "bandung" | "remote"
  

declare global {
  interface JobVacancy {
    id: string;
    userId: string;
    category?: category
    title: string;
    companyName: string;
    location: string
    details: {
      description: string;
      requirements: string[];
      preferences: string[];
      benefits?: string[];
    };
    salary: number
    applicationDeadline: string;
    updatedAt: string; 
    isActive: boolean;
    jobType?: "full-time" | "part-time" | "contract" | "internship";
    experienceLevel?: "entry" | "mid" | "senior" | "executive";
  }
}

export {}
