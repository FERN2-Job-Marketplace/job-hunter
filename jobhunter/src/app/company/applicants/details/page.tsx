export default function ApplicantDetails() {
  return (
    <>
      <div className="dashboardApplicantDetails py-4 px-5">
        <div className="dashboardApplicantDetailsSection my-3 max-w-[700px]">
          <p className="font-semibold text-raisin-black capitalize text-[18px] mb-3">
            personal info
          </p>
          <div className="flex flex-wrap gap-5 mb-3">
            <div className="info">
              <div className="infoLabel text-[16px] text-slate-grey capitalize">
                full name
              </div>
              <div className="infoContent text-raisin-black capitalize text-[16px]">
                john Doe
              </div>
            </div>
            <div className="info">
              <div className="infoLabel text-[16px] text-slate-grey capitalize">
                gender
              </div>
              <div className="infoContent text-raisin-black capitalize text-[16px]">
                male
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mb-3">
            <div className="info">
              <div className="infoLabel text-[16px] text-slate-grey capitalize">
                birth date
              </div>
              <div className="infoContent text-raisin-black capitalize text-[16px]">
                March 23, 1995
              </div>
            </div>
            <div className="info">
              <div className="infoLabel text-[16px] text-slate-grey capitalize">
                address
              </div>
              <div className="infoContent text-raisin-black capitalize text-[16px]">
                12th avenue street
              </div>
            </div>
          </div>
        </div>
        <hr className="max-w-[700px]"/>
        <div className="dashboardApplicantDetailsSection my-3 max-w-[700px]">
          <p className="font-semibold text-raisin-black capitalize text-[18px] mb-3">
            professional info
          </p>  
          <div className="info mb-3">
            <div className="infoLabel text-[16px] text-slate-grey capitalize">
              about me
            </div>
            <div className="infoContent text-raisin-black capitalize text-[16px]">
              I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
              For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
            </div>
          </div>
          <div className="info mb-3">
            <div className="infoLabel text-[16px] text-slate-grey capitalize">
              Current/Latest job
            </div>
            <div className="infoContent text-raisin-black capitalize text-[16px]">
              product designer
            </div>
          </div>
          <div className="info mb-3">
            <div className="infoLabel text-[16px] text-slate-grey capitalize">
              experience in years
            </div>
            <div className="infoContent text-raisin-black capitalize text-[16px]">
              4 years
            </div>
          </div>
          <div className="info mb-3">
            <div className="infoLabel text-[16px] text-slate-grey capitalize">
              Skills
            </div>
            <div className="infoContent text-raisin-black capitalize text-[16px]">
              I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
              For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
            </div>
          </div>
        </div>
        <div className="dashboardApplicantDetailsSection my-3 max-w-[700px]">
          <div className="formCard border border-solid border-slate-300 rounded w-full max-w-lg p-3 my-5">
              <div className="formCardHeader flex items-center justify-between">
                  <p className="m-0 text-raisin-black font-semibold capitalize text-[16px]">
                      experiences
                  </p>
              </div>
              <div className="formCardBody py-[24px] border-b border-solid border-slate-grey">
                <p className="mb-3 text-raisin-black font-semibold capitalize text-[18px]">
                  product designer
                </p>
                <p className="mb-3 font-medium capitalize text-raisin-black text-[16px]">
                  <b>Twitter</b> - full time - 4 years
                </p>
                <p className="mb-3 font-medium capitalize text-raisin-black text-[16px]">
                  jakarta, indonesia
                </p>
                <p className="font-medium text-raisin-black text-[16px]">
                  Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.
                </p>
              </div>
              <div className="formCardBody py-[24px] border-b border-solid border-slate-grey">
                <p className="mb-3 text-raisin-black font-semibold capitalize text-[18px]">
                  product designer
                </p>
                <p className="mb-3 font-medium capitalize text-raisin-black text-[16px]">
                  <b>Twitter</b> - full time - 4 years
                </p>
                <p className="mb-3 font-medium capitalize text-raisin-black text-[16px]">
                  jakarta, indonesia
                </p>
                <p className="font-medium text-raisin-black text-[16px]">
                  Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
