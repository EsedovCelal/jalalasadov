import { useEffect, useState } from "react";
import translations from "../translations";
import { useSelector } from "react-redux";
const Line_Text = () => {
  const language = useSelector((state) => state.language.defaultlanguage);
  const all_ability = [
    translations[language]["text_line"]["fast_leaner"],
    translations[language]["text_line"]["result_driven"],
    translations[language]["text_line"]["growth_minded"],
    translations[language]["text_line"]["analytical_thinker"],
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % all_ability.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [all_ability.length]);
  return (
    <div className="h-[100px] flex justify-center bg-[#479b9c] relative left-1/2 right-1/2 w-screen -ml-[50.7vw] -mr-[50vw]">
      <div className="flex flex-col md:flex-row gap-4 lg:text-4xl text-2xl items-center text-[#EEEEEE]">
        <p className="p-10 text-3xl block md:hidden uppercase">
          {all_ability[index]}
        </p>
        {all_ability.map((ability, i) => (
          <p key={i} className="hidden md:block p-10 uppercase">
            {ability}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Line_Text;
