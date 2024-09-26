export default function CardDetail() {
    return (
        <>
            <div className="w-screen my-10">
                <div className="flex justify-center items-center gap-10 px-32 py-10">
                    <div className="flex justify-between items-start w-[80%] bg-[#ffffff] hover:bg-[#4D7EA8] text-black hover:text-[#ffffff] transition-colors px-3 py-8">
                        <img src="/Company Logo.png" alt="icon" className="w-16 h-16 self-center"/>
                        <div className="font-bold text-lg mt-2">Sosial Media Assistant</div>
                        <div className="flex gap-10 justify-between items-center">
                            <div className="font-bold text-lg mt-2">Button Share</div>
                            <div className="text-sm font-bold mt-2 text-gray-400">235 jobs available</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}