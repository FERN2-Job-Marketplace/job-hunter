"use client";

import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";

export default function LogoutBtn() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    const result = await Swal.fire({
      icon: "question",
      title: "Are you Sure want to Logout?",
      showCancelButton: true,
      showCloseButton: true,
    });

    if (result.isConfirmed) {
      await signOut();
    }
  };

  return (
    <div className="flex flex-row gap-3">
      {/* <span>
        Welcome, {session?.user?.name} the {session?.user?.role}
      </span> */}

      <button className="bg-steel-blue text-white font-bold capitalize border border-solid border-steel-blue text-center transition px-[24px] py-[12px] hover:text-steel-blue hover:bg-white" onClick={() => handleLogout()}>
        Sign Out
      </button>
    </div>
  );
}
