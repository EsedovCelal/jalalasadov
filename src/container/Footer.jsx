import ScrollLinks from "./ScrollLinks";
const Footer = () => {
  return (
    <div className="min-h-[100px] text-[#EEEEEE] px-8">
      <div className="border-1 border-gray-300 mx-[30px] relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]" />
      <div>
        <div className="flex justify-between mt-[10px]">
          <span className="capitalize text-[30px] hidden lg:block">
            jalal asadov
          </span>
          <div className="text-right ">
            <div className="mb-[5px] hidden lg:block">
              <ScrollLinks />
            </div>
            <br />
            <span className="capitalize">
              © 2025 jalal asadov | all rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
