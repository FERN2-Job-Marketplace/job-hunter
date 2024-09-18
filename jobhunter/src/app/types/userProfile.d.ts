declare global {
  interface CandidateProfile {
    userId: string; // Referensi ke user id
    dateOfBirth: Date;
    currentCity: string;
    currentCountry?: string; //kita pake city aja, tapi kalo mau tambahin negara bolehh
    phoneNumber: string;
    profilePicture?: string; // URL ke profile picture, defaultnya ntar aku buat static url gambar profile hambar
    bio: string;
    skills: string[]; // Array of Strings
    experience: { //Array of Objects, kalo di CV tuh sprt work experiences
      title: string;
      company: string;
      startDate: Date;
      endDate?: Date;
      description: string;
    }[];
    education: { //Array of Objects, edukasi
      degree: string;
      institution: string;
      graduationYear: number;
    }[];

    //nah ini ga wajib semua
    resumeUrl?: string;
    socialProfiles?: { 
      linkedin?: string;
      github?: string;
      portfolio?: string;
    };
    desiredJobTitle?: string;
    desiredSalary?: number;
    willingToRelocate?: boolean;
    preferredWorkEnvironment?: ("onsite" | "remote" | "hybrid")[];
    updatedAt: string
  }

  interface CompanyProfile {
    userId: string; // Referensi ke user id
    companyName: string;
    companyWebsite?: string;
    industry: string;
    companySize?: string;
    foundedYear?: number;
    companyDescription?: string;
    headquarters?: string;
    logoUrl?: string;
    socialProfiles?: { //akun company
      linkedin?: string;
      twitter?: string;
    };
    benefits?: string[];
    culture?: string;
    hiringProcess?: string;
    updatedAt: string
  }
}

export {};
