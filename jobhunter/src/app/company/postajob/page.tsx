"use client"

import { checkEligibleCompany, jobHunterUrl } from "@/utils";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function PostaJobs() {

  const {data: session} = useSession()

  const router = useRouter()

  async function handlePostJob (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const isEligible = await checkEligibleCompany(session?.user?.id || "")

    if(!isEligible) {
      Swal.fire({
        icon: "error",
        title: "Complete Your Company Profile first",
        showCloseButton: true,
      });

      return router.push("/company/profile")
    }

    const data = {
      title: formData.get("title"),
      companyName: session?.user?.name,
      jobType: formData.get("jobType"),
      location: formData.get("location"),
      details: {
        description: formData.get("description"),
        requirements: formData.get("requirements"),
        preferences: formData.get("preferences"),
        benefits: formData.get("benefits"),
      },
      salary: formData.get("salary"),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    }

    const res = await fetch(jobHunterUrl + "/api/job-vacancy", {
      method: "post",
      body: JSON.stringify(data),
    });

    Swal.fire({
      icon: "success",
      title: "Register Success",
      showCloseButton: true,
    });

    if (!res.ok) throw new Error("Error adding data");

    router.push("/company/joblisting")

  } 

  return (
    <>
      <div className="dashboardPostjobs py-4 px-5">
        <form onSubmit={handlePostJob}>
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  job title
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Job titles must be describe one position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  type="text"
                  name="title"
                  placeholder="Eg. Frontend Developer"
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
                  Type of Employment
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Select type of employements
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select name="jobType" className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Select Type of Employments
                  </option>
                  <option value="full time">Full Time</option>
                  <option value="part time">Contract</option>
                  <option value="contract">Part Time</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  salary
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  specify salary range
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  name="salary"
                  type="number"
                  placeholder="Rp"
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
                  Categories
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  You can select job categories
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select name="jobCategories" className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Select Job Categories
                  </option>
                  <option value="devs">Devs</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="creative">Creative</option>
                  <option value="engineering">Engineering</option>
                  <option value="education">Education</option>
                  <option value="administrative">Administrative</option>
                  <option value="hr">HR</option>
                  <option value="legal">Legal</option>
                  <option value="legal">Scientist</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  location
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  You can select job categories
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <select name="location" className="select select-bordered text-raisin-black w-full max-w-sm">
                  <option disabled selected>
                    Location
                  </option>
                  <option value="jakarta pusat">Jakarta Pusat</option>
                  <option value="jakarta selatan">Jakarta Selatan</option>
                  <option value="jakarta utara">Jakarta Utara</option>
                  <option value="jakarta barat">Jakarta Barat</option>
                  <option value="jakarta timur">Jakarta Timur</option>
                  <option value="bogor">Bogor</option>
                  <option value="depok">Depok</option>
                  <option value="tangerang">Tangerang</option>
                  <option value="bekasi">Bekasi</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Job Descriptions
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Job titles must be describe one position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  name="description"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Job Description"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Responsibilities
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe responsibilities of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  name="responsibilities"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Responsibilities"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Requirements
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Requirements of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  name="requirements"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Requirements"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Preferences
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Preferences of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  name="preferences"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Nice to Haves"
                ></textarea>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Perks and Benefits
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  Describe Perks and Benefits of this position
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <textarea
                  name="benefits"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Perks and Benefits"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-steel-blue text-white font-bold border border-solid border-steel-blue text-center transition px-[24px] py-[12px] my-3 hover:text-steel-blue hover:bg-white">
            Post a Job
          </button>
        </form>
      </div>
    </>
  );
}
