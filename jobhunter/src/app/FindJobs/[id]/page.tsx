'use client'

import CardDetail from "@/app/_components/CardDetail";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DetailJob({
  params,
}: {
  params: { id: string };
}) {

    const [detailData, setDetailData] = useState<JobVacancy>();
    const jobDate = dayjs(detailData?.updatedAt).format('DD MMMM YYYY'); 


    async function getDetailsJob() {
        let url =`http://localhost:3001/job-vacancy/${params.id}`
        const res = await fetch(url)
        const responseJson:JobVacancy = await res.json()
        setDetailData(responseJson)
      }
    
      useEffect(() => {
        getDetailsJob()
    }, []);

    return(
        <>
            <div className="detail pt-4">
                <div className="detailHeader bg-raisin-black flex items-center justify-center min-h-[350px] px-5">
                    <CardDetail detailData={detailData}/>
                </div>
                <div className="detailBody bg-white">
                    <div className="detailBodyWrap flex flex-wrap justify-center py-5 max-w-full md:max-w-[1200px] m-auto">
                        <div className="detailBodyLeft px-6 w-full md:w-8/12">
                            <div className="detailBodyLeftSection mb-6">
                                <h2 className="detailBodyLeftSectionTitle font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                    Description
                                </h2>
                                <p className="detailBodyLeftSectionDescription text-slate-grey m-0 text-[16px]">
                                    {detailData?.details.description}
                                </p>
                            </div>
                            <div className="detailBodyLeftSection mb-6">
                                <h2 className="detailBodyLeftSectionTitle font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                    Responsibilities
                                </h2>
                                <p className="detailBodyLeftSectionDescription text-slate-grey m-0 text-[16px]">
                                    {detailData?.details.responsibilities}
                                </p>
                            </div>
                            <div className="detailBodyLeftSection mb-6">
                                <h2 className="detailBodyLeftSectionTitle font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                    Requirements
                                </h2>
                                <p className="detailBodyLeftSectionDescription text-slate-grey m-0 text-[16px]">
                                    {detailData?.details.requirements}
                                </p>
                            </div>
                            <div className="detailBodyLeftSection mb-6">
                                <h2 className="detailBodyLeftSectionTitle font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                    Nice to Haves 
                                </h2>
                                <p className="detailBodyLeftSectionDescription text-slate-grey m-0 text-[16px]">
                                    {detailData?.details.preferences}
                                </p>
                            </div>
                            <div className="detailBodyLeftSection mb-6">
                                <h2 className="detailBodyLeftSectionTitle font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                    Perks and Benefits
                                </h2>
                                <p className="detailBodyLeftSectionDescription text-slate-grey m-0 text-[16px]">
                                    {detailData?.details.benefits}
                                </p>
                            </div>
                        </div>
                        <div className="detailBodyRight px-6 w-full md:w-4/12">
                            <h2 className="detailBodyLeftSectionTitle text-center md:text-left font-semibold text-raisin-black capitalize mb-3 text-[32px]">
                                About this role
                            </h2>
                            <div className="flex flex-wrap items-center justify-between mb-3">
                                <p className="m-0 text-slate-grey text-[16px]">
                                    Job Posted On
                                </p>
                                <p className="m-0 text-raisin-black text-[16px] md:text-right font-bold">
                                    {jobDate}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between mb-3">
                                <p className="m-0 text-slate-grey text-[16px]">
                                    Job Type
                                </p>
                                <p className="m-0 text-raisin-black text-[16px] md:text-right font-bold">
                                    {detailData?.jobType}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between mb-3">
                                <p className="m-0 text-slate-grey text-[16px]">
                                    Salary
                                </p>
                                <p className="m-0 text-raisin-black text-[16px] md:text-right font-bold">
                                    {detailData?.details.salary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-screen h-[350px]">
                <div className="w-screen h-[250px] bg-[#202430]">
                    <div className="container mx-auto">
                        <CardDetail />
                    </div>  
                </div>
                <div className="px-32 flex flex-col text-justify">
                    <div className="font-bold text-xl my-3">
                        <div>Description</div>
                        <div className="font-normal">Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</div>
                    </div>
                    <div className="font-bold text-xl my-3">
                        <div>Responsibilities</div>
                        <div className="font-normal">Community engagement to ensure that is supported and actively represented online</div>
                        <div className="font-normal">Focus on social media content development and publication</div>
                        <div className="font-normal">Marketing and strategy support</div>
                        <div className="font-normal">Stay on top of trends on social media platforms, and suggest content ideas to the team</div>
                        <div className="font-normal">Engage with online communities</div>
                    </div>
                    <div className="font-bold text-xl my-3">
                        <div>Requirements</div>
                        <div className="font-normal">Able to do public speakin</div>
                        <div className="font-normal">Good communicator</div>
                        <div className="font-normal">Can manage every social media</div>
                        <div className="font-normal">Know how to engage with every social media</div>
                        <div className="font-normal">You're a growth marketer and know how to run campaigns</div>
                    </div>
                    <div className="font-bold text-xl my-3">
                        <div>Nice-To-Haves</div>
                        <div className="font-normal">Fluent in English</div>
                        <div className="font-normal">Project management skills</div>
                        <div className="font-normal">Copy editing skills</div>
                    </div>
                    <div className="font-bold text-xl my-3">
                        <div>Perks & Benefits</div>
                        <div className="font-normal">Healthcare</div>
                        <div className="font-normal">Paid Leave</div>
                        <div className="font-normal">Good Money</div>
                    </div>
                </div>
            </div> */}
        </>
    )
}