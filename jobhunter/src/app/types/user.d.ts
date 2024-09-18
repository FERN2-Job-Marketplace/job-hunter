declare global {
  interface User {
    id: string;
    name: string
    email: string;
    provider?: "google" | "twitter" | "facebook" | "github" | "none"
    password?: string; // jangan lupa di hash
    role: "candidate" | "company";
    createdAt: string;
    isVerified: boolean;
  }
}

export {};
