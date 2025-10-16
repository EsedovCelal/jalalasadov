import ScrollLinks from "./ScrollLinks";
import translations from "../translations";
import { useSelector } from "react-redux";
const Footer = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  return (
    <div className="lg:min-h-[100px] min-h-[70px] text-[#EEEEEE] px-8">
      <div className="border-1 border-gray-300 mx-[30px] relative left-1/2 right-1/2 w-screen -ml-[50.4vw] -mr-[51vw]" />
      <div>
        <div className="lg:flex justify-between mt-[10px]">
          <span className="capitalize text-[30px] hidden lg:block">
            {translations[language]["home"]["Jalal"]}{" "}
            {translations[language]["home"]["Asadov"]}
          </span>
          <div className="text-right ">
            <div className="mb-[5px] hidden lg:block">
              <ScrollLinks />
            </div>
            <span className="capitalize">
              {` © 2025 ${translations[language]["home"]["Jalal"]}
              ${translations[language]["home"]["Asadov"]} | 
              ${translations[language]["footer"]["rights"]}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
