'use client'

import { useEffect, useState } from "react";
import CardFindJobs from "../_components/CardFindJobs";
import SearchBar from "../_components/SearchBar";
import Checkbox from "../_components/Checkbox";
import Fuse from "fuse.js";
// import { jobType } from "../types/jobVacancy";

export default function FindJobs() {
    const [jobData, setJobData] = useState<JobVacancy[]>();
    const [locationFilter, setLocationFilter] = useState('');
    const [searchText, setSearchText] = useState('');
    const [checkBoxTypeEmployment, setCheckboxTypeEmployment] = useState<string[]>([]);
    const [checkBoxTypeCategory, setCheckboxTypeCategory] = useState<string[]>([]);
    const [checkBoxTypeRange, setCheckboxRange] = useState<string[]>([]);
    const [isDescending, setIsDescending] = useState(false);
    
    async function getData(props: {
        location?: string
        search: string
        descending?: boolean
    }) {
        let url ="http://localhost:3000/api/job-vacancy?page=1&per_page=100"

        const res = await fetch(url)
        const responseJson:JobVacancy[] = await res.json()
        let result:JobVacancy[] = []

        if (responseJson) {
            if (props.search !== '') {
                const options = {
                    keys: ['title', 'category', 'location', 'companyName'],
                    includeScore: true,
                }
                
                const fuse = new Fuse(responseJson, options)
                const fuseResult = fuse.search(props.search)
                
                result = fuseResult.map((e) => {
                    return e.item
                })
            } else {
                result = Array.isArray(responseJson) ? responseJson : []
            }

            if (props?.location) {
                result = result.filter(e => e.location === props.location);
            }

            if (checkBoxTypeEmployment.length > 0) {
                result = result.filter(e => {
                    if (checkBoxTypeEmployment.includes(e.jobType ?? '')) {
                        return true
                    }
                    return false
                });
            }

            if (checkBoxTypeCategory.length > 0) {
                result = result.filter(e => {
                    if (checkBoxTypeCategory.includes(e.category ?? '')) {
                        return true
                    }
                    return false
                });
            }

            if (checkBoxTypeRange.length > 0) {
                result = result.filter(e => {
                    if (checkBoxTypeRange.includes(e.details.salary ?? '')) {
                        return true
                    }
                    return false
                });
            }

            if (props.descending) {
                result = result.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt))
            } else {
                result = result.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
            }

            setJobData(result)
            return
        }
    }

    useEffect(() => {
        getData({location: locationFilter, search: searchText, descending: isDescending})
    }, []);

    function locationChange(value: string) {
        setLocationFilter(value);
        getData({location: value, search: searchText, descending: isDescending});
    }

    function handleSearch(text: string) {
        setSearchText(text)
        getData({location: locationFilter, search: text, descending: isDescending});
    }

    function handleApplyCheckbox() {
        getData({location: locationFilter, search: searchText, descending: isDescending})
    }

    function handleSort(value: string) {        
        setIsDescending(value === 'oldest')
        getData({location: locationFilter, search: searchText, descending: value === 'oldest'})
    }

    function handleChechbox(value : string, checkboxType : 'employment' | 'category' | 'sallary') {
        if (checkboxType === "employment") {
            handleChechboxEmployment(value)
        } else if (checkboxType === "category") {
            handleChechboxCategory(value)
        } else if (checkboxType === 'sallary') {
            handleChechboxRange(value)
        }
    }

    function handleChechboxEmployment(value : string) {
        if (checkBoxTypeEmployment.includes(value)) {
            const removeSelected = checkBoxTypeEmployment.filter(e => e !== value);
            setCheckboxTypeEmployment(removeSelected)
        } else {
            const selected = [...checkBoxTypeEmployment, value]
            setCheckboxTypeEmployment(selected)
        }
    }

    function handleChechboxCategory(value : string) {
        if (checkBoxTypeCategory.includes(value)) {
            const removeSelected = checkBoxTypeCategory.filter(e => e !== value);
            setCheckboxTypeCategory(removeSelected)
        } else {
            const selected = [...checkBoxTypeCategory, value]
            setCheckboxTypeCategory(selected)
        }
    }

    function handleChechboxRange(value : string) {
        if (checkBoxTypeRange.includes(value)) {
            const removeSelected = checkBoxTypeRange.filter(e => e !== value);
            setCheckboxRange(removeSelected)
        } else {
            const selected = [...checkBoxTypeCategory, value]
            setCheckboxRange(selected)
        }
    }

    return(
        <>
            <div className="homeHero w-full min-h-[80vh] flex items-center justify-center bg-raisin-black">
                <div className="homeHeroContent relative z-[1]">
                    <h1 className="font-bold text-white text-center text-4xl lg:text-5xl mb-[25px]">Discover more than <span className="text-celestial-blue">5000+ Job</span></h1>
                    <p className="text-slate-grey text-center text-[18px] mb-4">Find your next career at companies that you desire</p>
                    <SearchBar handleSearch={handleSearch}/>
                </div>
            </div>
            <div className="flex flex-row bg-white px-44 py-20 gap-32">
                <Checkbox 
                    selectedEmployment={checkBoxTypeEmployment} 
                    selectedCategory={checkBoxTypeCategory} 
                    selectedSallary={checkBoxTypeRange}                    
                    handleCheckbox={handleChechbox} 
                    handleApplyCheckbox={handleApplyCheckbox}
                />
                <div className="w-full flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-bold text-black">All Jobs</h3>
                            <h3 className="text-sm font-normal text-gray-700">Showing {jobData?.length} results</h3>
                        </div>
                        <div className="filterWrap flex items-center gap-4">
                            <select 
                            name="Search"
                            id="Search"
                            onChange={(e) => locationChange(e.target.value)}
                            defaultValue={""}
                            className="select select-bordered text-raisin-black bg-white">
                                    <option value="">Location</option>
                                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                                    <option value="Jakarta Utara">Jakarta Utara</option>
                                    <option value="Jakarta Barat">Jakarta Barat</option>
                                    <option value="Jakarta Timur">Jakarta Timur</option>
                                    <option value="Bogor">Bogor</option>
                                    <option value="Depok">Depok</option>
                                    <option value="Tangerang">Tangerang</option>
                                    <option value="Bekasi">Bekasi</option>
                            </select>
                            <div className="flex flex-row items-center">
                                <h3 className=" text-dark-grey-text">Sort by:</h3>
                                <select
                                    name="Search"
                                    id="Search"
                                    onChange={(e) => handleSort(e.currentTarget.value)}
                                    defaultValue={""}
                                    className="bg-white outline-none text-black"
                                    >
                                    <option value={'newest'}>Newest</option>
                                    <option value={'oldest'}>Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        {jobData && ( 
                            jobData?.map((el, index) => {
                                return <CardFindJobs key={index} jobData={el} />;
                            })
                        )}

                        {!jobData?.length && (
                            <div className="flex justify-center items-center">
                                <img src="/notjobs.png" alt="icon" className="w-96 justify-center items-center mt-5"/>
                            </div>
                        )}  
                    </div>
                    <nav aria-label="Page navigation example" className="mt-7 flex justify-center">
                        <ul className="flex items-center -space-x-px h-8 text-base font-semibold">
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                1
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-white dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                2
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                aria-current="page"
                                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-50 hover:bg-steel-blue hover:text-white dark:bg-white dark:text-gray-400"
                                >
                                3
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                4
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-white dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                5
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:text-gray-400 dark:hover:bg-steel-blue dark:hover:text-white"
                                >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
               
            </div>
        </>
    )
}