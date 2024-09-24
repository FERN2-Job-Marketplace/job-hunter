'use client'

import dayjs from "dayjs";

export default function CardFindJobs(props: {jobData: JobVacancy}) {
    const jobDate = dayjs(props.jobData.updatedAt).format('DD MMMM YYYY');

    return(
        <div className="w-full h-[120px] flex flex-row border-2 gap-8 items-center px-8 mt-5 justify-between">
            <div className="flex flex-row gap-8 justify-center">
                <img src="/Company Logo.png" alt="icon" className="w-16 h-16 self-center"/>
                <div>
                    <div className="text-black">
                        <h3 className="font-bold text-lg">
                            {props.jobData?.title}
                        </h3>
                        <h3>{jobDate}</h3>
                        <div className="flex flex-row gap-1">
                            <h3>{props.jobData?.companyName} | </h3>
                            <h3>{props.jobData?.location}</h3>
                        </div>
                        <div className="flex flex-row gap-2 pt-2">
                            <button className="bg-emerald-50 text-center px-2 rounded-2xl text-green">{props.jobData?.jobType}</button>
                            <button className="bg-white text-center px-2 rounded-2xl text-yellow border-2 border-yellow">{props.jobData?.category}</button>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/"
            className="bg-steel-blue w-fit text-white font-semibold text-base px-4 py-1 border-2 border-steel-blue hover:text-steel-blue hover:bg-white" 
            >See Details</a>
        </div>
    )
}