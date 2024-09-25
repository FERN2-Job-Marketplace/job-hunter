"use client";

import { getCompanyDetail } from "@/fetch";
import { jobHunterUrl } from "@/utils";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function CompanyProfile() {
  const { data: session, status } = useSession();
  const [companyDetail, setCompanyDetail] = useState<CompanyProfile>();

  useEffect(() => {
    //function ini taruh di luar gpp kok
    async function fetchData() {
      const getDetail = await getCompanyDetail(session?.user?.id || "");
      setCompanyDetail(getDetail);
    }

    if (status === "authenticated") {
      fetchData();
    }
  }, [session, status]);

  async function handleUpdateDetail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    let data = {
      ...companyDetail,
      companyName: formData.get("companyName"),
      companyDescription: formData.get("companyDescription"),
      updatedAt: new Date().toISOString(),
    } as CompanyProfile;

    if (!data.companyName || !data.companyDescription) {
      data.isEligible = false;
    } else {
      data.isEligible = true;
    }
  }

  if (status === "loading") {
    return <>Loading ...</>;
  }

  return (
    <>
      <div className="dashboardCompanyProfile py-4 px-5">
        <form onSubmit={handleUpdateDetail}>
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Company Logo
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  This image will be shown publicly as company logo.
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Company Name
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Introduce your company core info quickly to users by fill up
                  company details
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  value={companyDetail?.companyName}
                  name="companyName"
                  type="text"
                  placeholder={`${companyDetail?.companyName}`}
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  About Company
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Brief description for your company. URLs are hyperlinked.
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  value={companyDetail?.companyDescription}
                  name="companyDescription"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Enter Description"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-steel-blue text-white font-bold border border-solid border-steel-blue text-center transition px-[24px] py-[12px] my-3 hover:text-steel-blue hover:bg-white"
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}
