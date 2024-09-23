import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // console.log("Req next url", request.nextUrl.pathname);
    // console.log("Req auth", request.nextauth.token);

    const pathName = request.nextUrl.pathname;

    if (
      pathName.startsWith("/admin") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }

    if (pathName.startsWith("/job-vacancy") && request.nextauth.token?.role === "company") {

        return NextResponse.rewrite(new URL("/denied", request.url));

    //   Swal.fire({
    //     icon: 'error',
    //     title: 'You are Unauthorized'
    //   })

    //   return redirect("/admin")

    //   .then(result => {
    //     if(result.isConfirmed) {
    //         return redirect("/admin")
    //     }
    //   });
    }

    if (
      (pathName.startsWith("/signUp") || pathName.startsWith("/signIn")) &&
      !!request.nextauth.token
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }

    return NextResponse.next(); // Allow other requests to proceed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/job-vacancy/:path*"],
};
