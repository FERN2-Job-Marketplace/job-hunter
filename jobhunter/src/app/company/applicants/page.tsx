import ApplicantsTableRow from "@/app/_components/ApplicantsTableRow";

export default function Applicants() {
  

  return (
    <div className="overflow-x-auto">
      <table className="table text-raisin-black">
        <tbody>
            test
          {Array.from({ length: 10 }).map((_, i: number) => {
            return <ApplicantsTableRow key={i} />;
          })}
          {/* {
            listJob.length > 0 && (
                <>
                {
                    listJob.map(item => (
                        <ApplicantsTableRow key={item.id} item={item}/>
                    ))
                }
                </>
            )
          } */}
        </tbody>
      </table>
    </div>
  );
}

// const [listJob, setListJob] = useState<JobVacancy[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const filterIndex = "_start=0&_end=5";
//       await getListJobVacancy(filterIndex);
//       setListJob(listJob);
//     }

//     fetchData();
//   }, []);
