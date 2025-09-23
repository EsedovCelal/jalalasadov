import { useEffect, useState } from "react";
const Line_Text = () => {
  const all_ability = [
    "FAST LEANER",
    "RESULT-DRIVEN",
    "GROWTH-MINDED",
    "ANALYTICAL THINKER",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % all_ability.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [all_ability.length]);
  console.log(index);
  return (
    <div className="flex justify-center bg-[#3E5F44]">
      <div className="flex flex-col md:flex-row gap-4 lg:text-4xl text-2xl items-center text-[#EEEEEE]">
        <p className="p-10 text-4xl block md:hidden">{all_ability[index]}</p>
        {all_ability.map((ability, i) => (
          <p key={i} className="hidden md:block p-10 ">
            {ability}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Line_Text;
