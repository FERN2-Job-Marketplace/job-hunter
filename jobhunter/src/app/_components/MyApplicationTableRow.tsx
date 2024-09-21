export default function MyApplicationTableRow({index}: {index: number}) {
  return (
    <tr>
        <th>{index}</th>
        <td className="flex items-center gap-2">
            <img src="/logo-nomad.svg" alt="nomad" className="max-w-full h-auto"/>
            Nomad
        </td>
        <td>Fullstack Developer</td>
        <td>24 July 2024</td>
        <td>
            <div className="rounded-xl w-fit border border-solid border-yellow text-yellow capitalized text-center py-1 px-2">
                On Going
            </div>
        </td>
    </tr>
  )
}
