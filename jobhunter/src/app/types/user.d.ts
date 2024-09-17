
declare global {
  interface User {
    id: string | number
    username: string
    name:string
    email: string
    password?: string
    role: "candidate" | "admin"
  }
}

export {}