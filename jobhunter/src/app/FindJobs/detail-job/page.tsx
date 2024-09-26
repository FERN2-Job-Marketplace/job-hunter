import CardDetail from "@/app/_components/CardDetail";

export default function DetailJob() {
    return(
        <>
            <div className="w-screen h-[350px]">
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
            </div>
        </>
    )
}