export default function DashboardUser() {
  return (
    <>
        <div className="dashboardHome flex flex-wrap items-center gap-6 py-4 px-5">
            <div className="dashboardHomeCard overflow-hidden border border-lavender border-solid bg-white relative p-[24px] md:min-w-[258px]">
                <p className="text-raisin-black font-semibold text-[20px] capitalize mt-0 mb-2">
                    Total Jobs Applied
                </p>
                <p className="text-raisin-black font-semibold text-[72px] uppercase">
                    45
                </p>
            </div>
            <div className="dashboardHomeCard overflow-hidden border border-lavender border-solid bg-white relative p-[24px] md:min-w-[258px]">
                <p className="text-raisin-black font-semibold text-[20px] capitalize mt-0 mb-2">
                    On Going
                </p>
                <p className="text-raisin-black font-semibold text-[72px] uppercase">
                    45
                </p>
            </div>
            <div className="dashboardHomeCard overflow-hidden border border-lavender border-solid bg-white relative p-[24px] md:min-w-[258px]">
                <p className="text-raisin-black font-semibold text-[20px] capitalize mt-0 mb-2">
                    Completed
                </p>
                <p className="text-raisin-black font-semibold text-[72px] uppercase">
                    45
                </p>
            </div>
        </div>
    </>
  )
}
