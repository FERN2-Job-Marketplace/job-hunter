
declare global {
  interface ApplyJob {
    id: string
    jobId: string
    candidateId: string
    note?: string
    status: "ongoing" | "offer" |"rejected"
    appliedAt: string
  }
}

export {}