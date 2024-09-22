import JoblistingTableRow from "@/app/_components/JoblistingTableRow"

export default function Applicants() {
  return (
    <>
        <div className="overflow-x-auto">
            <table className="table text-raisin-black">
                <thead className="text-slate-grey">
                    <tr>
                        <th className="font-medium text-[16] capitalized">Roles</th>
                        <th className="font-medium text-[16] capitalized">Classifications</th>
                        <th className="font-medium text-[16] capitalized">Date Posted</th>
                        <th className="font-medium text-[16] capitalized">Job Type</th>
                        <th className="font-medium text-[16] capitalized">Applicants</th>
                        <th className="font-medium text-[16] capitalized">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 10 }).map((_, i: number) => {
                            return <JoblistingTableRow key={i} />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
