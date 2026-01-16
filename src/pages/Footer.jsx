import githubIcon from "../assets/images/icon-github.svg";
import linkedinIcon from "../assets/images/icon-linkedin.svg";
import frontendIcon from "../assets/images/icon-frontend-mentor.svg";

export default function Footer() {
  return (
    <footer className="bg-darkGray text-white mt-[-1px]">
      <div className="max-w-[1110px] mx-auto px-6 py-10">
        <div className="border-t border-white/30 pt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-around">
          <a href="#hero" className="text-[24px] leading-[32px] font-bold">
            adamkeyes
          </a>

          <nav className="flex items-center justify-center gap-6 ">
            <a
              href="https://github.com/mmiklovaitemm"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 duration-300"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </a>

            <a
              href="https://www.frontendmentor.io/profile/mmiklovaitemm"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 duration-300"
            >
              <img
                src={frontendIcon}
                alt="Frontend Mentor"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ugn%C4%97-miklovait%C4%97-88075a311/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 duration-300"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
