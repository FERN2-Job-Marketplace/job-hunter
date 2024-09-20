export default function CardFindJobs() {
    return(
        <div className="w-[800px] h-[120px] flex flex-row border-2 gap-8 items-center px-8 mt-5">
            <img src="/Company Logo.png" alt="icon" className="w-16 h-16"/>
            <div className="text-black">
                <h3 className="font-bold text-lg">
                    Social Media Assistant
                </h3>
                <div className="flex flex-row gap-1">
                    <h3>Nomad</h3>
                    <h3>Jakarta, Indonesia</h3>
                </div>
                <div className="flex flex-row gap-2 pt-2">
                    <button className="bg-emerald-50 text-center px-2 py-1 rounded-2xl text-green">Full-Time</button>
                    <button className="bg-white text-center px-2 py-1 rounded-2xl text-yellow border-2 border-yellow">Marketing</button>
                </div>
            </div>
            <button className="bg-steel-blue w-fit text-white font-semibold text-base ml-72 px-4 py-1" >Apply</button>
        </div>
    )
}