import CardCategory from "../_components/CardCategory";
import CardJobs from "../_components/CardJobs";
import CustomBackground from "../_components/CustomBackground";
import Footer from "../_components/Footer";
import SearchBar from "../_components/SearchBar";

export default function Home() {
  return (
    <>
      <CustomBackground />
      <div className="w-screen h-screen bg-[#202430]">
        <div className="container w-[83%] mx-auto pt-56">
          <div className="pb-3 flex gap-2 justify-center items-center">
            <div className="font-bold text-white text-5xl">Discover more than</div>
            <div className="font-bold text-[#26A4FF] text-5xl">5000+ Job</div>
          </div>
        </div>
        <SearchBar />
        <div className="w-screen h-screen bg-[#202430]">
          <div className="container w-[80%] mx-auto pt-60">
            <div className="font-bold text-lg text-gray-500">Companies we helped grow</div>
            <div className="flex justify-between items-center py-14">
              <div className="font-bold text-lg text-gray-500"> vodafone </div>
              <div className="font-bold text-lg text-gray-500"> Intel </div>
              <div className="font-bold text-lg text-gray-500"> Tesla </div>
              <div className="font-bold text-lg text-gray-500"> Talkit </div>
              <div className="font-bold text-lg text-gray-500"> Apple </div>
            </div>
          </div>
          <div className="w-screen h-screen bg-[#202430]">
            <div className="container w-[80%] mx-auto pt-2">
              <div className="pb-3 flex justify-between">
                <div className="flex gap-2 justify-start items-start">
                  <div className="font-bold text-white text-5xl">Explore by</div>
                  <div className="font-bold text-[#26A4FF] text-5xl">category</div>
                </div>
                <div className="flex justify-end items-end">
                  <div className="font-light text-[#4997d0] text-lg">Show all jobs</div>
                </div>
              </div>
            </div>
            <div className="w-screen bg-[#202430]">
              <div className="container w-[80%]">
                <CardCategory />
              </div>
            </div>
            <div className="relative w-screen bg-[#202430]">
              <div className="relative container w-[80%] mx-auto pt-14">
                {/* Gambar ilustrasi */}
                <img
                  src="/homepage illustration.png" // Ubah path ini ke lokasi gambar yang ingin kamu gunakan
                  alt="Illustration"
                  className="max-w-full h-auto" />
                <div className="absolute top-[150px] left-[100px] font-normal text-4xl text-[#ffffff]">Start posting</div>
                <div className="absolute top-[190px] left-[100px] font-normal text-4xl text-[#ffffff]">jobs today</div>
                <div className="absolute top-[250px] left-[100px] font-normal text-base text-[#ffffff]">Start posting jobs for only Rp. 100k</div>
                <button className="absolute top-[300px] left-[100px] bg-[#ffffff] hover:bg-[#4997d0] text-[#4997d0] hover:text-[#ffffff] px-4 py-2 transition duration-300 font-bold">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="w-screen bg-[#202430]">
              <div className="container w-[80%] mx-auto pt-14">
                <div className="pb-3 flex justify-between">
                  <div className="flex gap-2 justify-start items-start">
                    <div className="font-bold text-white text-5xl">Featured</div>
                    <div className="font-bold text-[#26A4FF] text-5xl">jobs</div>
                  </div>
                  <div className="flex justify-end items-end">
                    <div className="font-light text-[#4997d0] text-lg">Show all jobs</div>
                  </div>
                </div>
              </div>
              <div className="w-screen bg-[#202430]">
                <div className="container h-[50vw]">
                  <CardJobs />
                </div>
                {/* <div className="w-screen bg-[#202430]">
                  <Footer />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="min-w-full min-h-screen flex flex-col gap-12">
    //   <div>Welcome to home page</div>
      
    //   <div>text</div>
    // </div>
  );
}
