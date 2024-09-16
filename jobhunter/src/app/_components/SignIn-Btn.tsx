import Link from "next/link";

export default function SignInBtn() {
  return (
    <Link href="/api/auth/signin" className="btn btn-outline">Sign In</Link>
  )
}
