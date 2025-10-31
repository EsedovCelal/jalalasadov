import jalalasadov from "../assets/img/jalalasadov.png";
const Img = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        >
          <div className="w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-30"></div>
        </div>
        <div
          className="relative"
          style={{ animation: "tilt 6s ease-in-out infinite" }}
        >
          <div className="md:w-90 md:h-90 w-70 h-70 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-3xl shadow-2xl shadow-red-500/40 overflow-hidden">
            <img
              src={jalalasadov}
              alt="jalalasadov"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-900/20"
              style={{ animation: "pulse 5s ease-in-out infinite" }}
            ></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes tilt {
          0%,
          100% {
            transform: perspective(400px) rotateY(0deg);
          }
          50% {
            transform: perspective(400px) rotateY(15deg);
          }
        }
      `}</style>
    </div>
  );
};
export default Img;
