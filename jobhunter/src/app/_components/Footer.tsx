export default function Footer(){
    return(
        <>
            <footer className="footerContainer">
                <div className="w-full py-12 px-24 grid grid-cols-3 bg-raisin-black">
                    <div className="flex flex-col">
                        <div className="flex flex-row pb-2">
                            <img 
                            src="/iconwhite.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                            <h1 className="text-white font-semibold text-xl">JobHunter</h1>
                        </div>
                        <h3 className="text-lavender text-sm mr-10">
                            Great platform for the job seeker that passionate about startups.Find your dream job easier.
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 text-lavender text-sm text-justify">
                        <div>
                            <p className="text-white font-semibold text-base pb-2">About</p>
                            <ul className="space-y-3">
                                <li>Companies</li>
                                <li>Terms</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    <div>
                            <p className="text-white font-semibold text-base pb-2">Resources</p>
                            <ul className="space-y-3">
                                <li>Guide</li>
                                <li>Contact Us</li>
                            </ul>
                    </div>
                    </div>
                    <div className="bg-raisin-black">
                        <h1 className="text-white font-semibold text-base pb-2">Get job notifications</h1>
                        <p className="text-lavender text-sm pb-2">The latest job news, articles, sent to your inbox weekly.</p>
                        <input 
                        type="text"
                        placeholder="Email address"
                        className="input text-black input-bordered w-64 h-12 focus:border-steel-blue rounded-none bg-white"/>
                        <button className="w-32 h-12 bg-steel-blue font-semibold text-white text-center mx-3">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="w-full px-24 bg-raisin-black">
                    <hr className="w-full h-px mx-auto bg-gray-100 border-0 dark:bg-dark-grey-text" />
                    <div className="flex justify-between text-sm text-gray-400 py-10">
                        <p>2024 @ JobHunter. All rights reserved.</p>
                        <div className="flex flex-row gap-2">
                            <img 
                            src="/Facebook.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                            <img 
                            src="/Instagram.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                            <img 
                            src="/Dribbble.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                            <img 
                            src="/LinkedIn.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                            <img 
                            src="/Twitter.png" 
                            alt="icon" 
                            className="w-6 h-6"/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}