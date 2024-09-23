export default function CompanyProfile() {
  return (
    <>
      <div className="dashboardCompanyProfile py-4 px-5">
        <form>
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Company Logo
                </div>
                <div className="infoContent text-slate-grey capitalize text-[16px]">
                  This image will be shown publicly as company logo.
                </div>
              </div>
              <div className="inputWrap md:w-6/12">
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboardPostjobsSection my-5">
            <div className="flex flex-wrap">
              <div className="info md:w-6/12">
                <div className="infoLabel text-[16px] text-raisin-black capitalize">
                  Company Name
                </div>
                <button className="bg-steel-blue text-white font-bold border border-solid border-steel-blue text-center transition px-[24px] py-[12px] my-3 hover:text-steel-blue hover:bg-white">Save Profile</button>
            </form>
        </div>
    </>
  );
}
