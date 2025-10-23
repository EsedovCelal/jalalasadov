import { useSelector } from "react-redux";
import translations from "../translations";
import email from "../assets/img/email.png";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact_me = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mgd184a",
        "template_oloyasb",
        form.current,
        "jMCg0Jigb24-2pAbC"
      )
      .then(
        (result) => {
          alert("Mesaj uğurla göndərildi");
          form.current.reset();
        },
        (error) => {
          alert("Xəta baş verdi" + error.text);
        }
      );
  };
  return (
    <Element
      name="Contact me"
      className="text-[#EEEEEE] pt-[120px] pb-[80px] px-8"
    >
      <div className="text-center">
        <p className="normal-case text-6xl">
          {translations[language]["contact_me"]["contact_me"]}
        </p>
      </div>
      <div className="bg-[#012840] mt-[30px] rounded-xl p-8 lg:flex justify-between gap-20">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 mb-[30px] lg:mb-0 "
        >
          <h2 className="text-3xl capitalize">
            {translations[language]["contact_me"]["get_in_touch"]}
          </h2>
          <p className="normal-case">
            {translations[language]["contact_me"]["text1"]}
          </p>
          <input
            name="name"
            type="text"
            placeholder={translations[language]["contact_me"]["your_name"]}
            className="bg-white h-12 rounded-xl placeholder:text-[lightgray] pl-2 text-[black] capitalize"
          />
          <input
            name="email"
            type="email"
            placeholder={translations[language]["contact_me"]["your_email"]}
            className="bg-white h-12 rounded-xl placeholder:text-[lightgray] pl-2 text-black capitalize"
          />
          <textarea
            name="message"
            required
            placeholder={translations[language]["contact_me"]["your_message"]}
            className="bg-white rounded-xl placeholder:text-[lightgray] pl-2 h-[250px] pt-2 text-black capitalize"
          />
          <button
            type="submit"
            className="bg-[#F4B459] h-10 rounded-xl font-bold text-[black] cursor-pointer"
          >
            {translations[language]["contact_me"]["send"]}
          </button>
        </form>
        <div className="flex flex-col gap-8 items-center">
          <div>
            <img src={email} className="w-60 md:w-80 h-60 md:h-80" />
          </div>
          <div>
            <div className="flex ml-5 mb-3 items-center">
              <CiMail className="mr-4 w-10 h-8" />
              <span>esedov.celal@gmail.com</span>
            </div>
            <div className="flex ml-5 mb-3 items-center">
              <CiPhone className="mr-4 w-10 h-8" />
              <span>+994 70 264 65 59</span>
            </div>
            <div className="flex ml-5 mb-3 items-center">
              <IoLocationOutline className="mr-4 w-10 h-8" />
              <p className=" capitalize">
                {translations[language]["contact_me"]["baku"]}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/c%C9%99lal-%C9%99s%C9%99dov-ba404823b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-12 h-12 cursor-pointer" />
            </a>
            <a
              href="https://github.com/EsedovCelal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-12 h-12 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contact_me;
