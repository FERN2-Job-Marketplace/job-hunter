import { jobHunterUrl } from "./utils"


export async function getListJobVacancy (query?: string) {

  let endpointUrl = jobHunterUrl + '/api/job-vacancy'

  if(query) {
    endpointUrl += `?${query}`
  }

  const res = await fetch(endpointUrl, {
    method: "get",
    // cache: "no-store"
  })

  const data = await res.json()

  if(!res.ok) {
    return
  }
  return data
}
