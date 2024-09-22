import MyApplicationTableRow from "@/app/_components/MyApplicationTableRow"

export default function Myapplications() {
  return (
    <>
        <div className="overflow-x-auto">
            <table className="table text-raisin-black">
                <thead className="text-slate-grey">
                    <tr>
                        <th className="font-medium text-[16] capitalized">#</th>
                        <th className="font-medium text-[16] capitalized">Company Name</th>
                        <th className="font-medium text-[16] capitalized">Roles</th>
                        <th className="font-medium text-[16] capitalized">Date Applied</th>
                        <th className="font-medium text-[16] capitalized">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 10 }).map((_, i: number) => {
                            return <MyApplicationTableRow index={i + 1} key={i} />
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
