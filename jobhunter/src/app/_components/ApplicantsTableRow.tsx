import Link from "next/link";

export default function ApplicantsTableRow() {
  return (
    <>
        <tr>
            <td className="flex items-center gap-2">
                <img src="/img-user.svg" alt="nomad" className="max-w-full h-auto"/>
                John Doe
            </td>
            <td>
                <div className="rounded-xl w-fit border border-solid border-yellow text-yellow capitalized text-center py-1 px-2">
                    On Going
                </div>
            </td>
            <td>24 July 2024</td>
            <td>Fullstack Developer</td>
            <td>
                <Link href={"/company/applicants/details"} className="bg-steel-blue text-white font-bold capitalize border border-solid border-steel-blue text-center transition px-[24px] py-[12px] hover:text-steel-blue hover:bg-white">see details</Link>
            </td>
        </tr>
    </>
  )
}
