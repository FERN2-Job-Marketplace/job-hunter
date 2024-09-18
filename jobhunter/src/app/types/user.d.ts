declare global {
  interface User {
    id: string;
    name: string
    email: string;
    provider?: "google" | "twitter" | "facebook" | "github" | "none"
    detailId?: string
    password?: string; // jangan lupa di hash
    role: "candidate" | "company";
    createdAt: string;
    isVerified: boolean;
  }
}

export {};
