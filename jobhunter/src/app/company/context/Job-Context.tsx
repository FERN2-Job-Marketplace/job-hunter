
import { createContext, ReactNode } from "react";

const JobContext = createContext<JobVacancy[]>([]);

// Context provider component
export default function JobProvider({
  jobs,
  children,
}: {
  jobs: any[];
  children: ReactNode;
}) {
  return (
    <JobContext.Provider value={jobs}>
      {children}
    </JobContext.Provider>
  );
}