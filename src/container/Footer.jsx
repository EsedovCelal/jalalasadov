import ScrollLinks from "./ScrollLinks";
const Footer = () => {
  return (
    <div className="min-h-[130px]">
      <div className="border-1 border-gray-300 mx-[30px]" />
      <div className="flex justify-between mt-[10px]">
        <span className="capitalize text-[white] text-[30px]">
          jalal asadov
        </span>
        <div>
          <ScrollLinks className="flex" />
          <br />
          <span className="text-[white] capitalize">
            © 2025 jalal asadov | all rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
