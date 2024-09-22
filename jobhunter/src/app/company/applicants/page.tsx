import ApplicantsTableRow from "@/app/_components/ApplicantsTableRow"

export default function Applicants() {
  return (
    <div className="overflow-x-auto">
        <table className="table text-raisin-black">
            <tbody>
                {
                    Array.from({ length: 10 }).map((_, i: number) => {
                        return <ApplicantsTableRow key={i} />
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
