
declare global {
  interface ApplyJob {
    id: string
    jobId: string
    candidateId: string
    note?: string
    isOffered: false
    appliedAt: string
  }
}

export {}