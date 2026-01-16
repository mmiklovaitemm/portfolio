import githubIcon from "../assets/images/icon-github.svg";
import linkedinIcon from "../assets/images/icon-linkedin.svg";
import frontendIcon from "../assets/images/icon-frontend-mentor.svg";
import profilePicMobile from "../assets/images/image-profile-mobile.webp";
import profilePicTablet from "../assets/images/image-profile-tablet.webp";
import profilePicDesktop from "../assets/images/image-profile-desktop.webp";
import patternCircle from "../assets/images/pattern-circle.svg";
import patternRings from "../assets/images/pattern-rings.svg";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-dark text-white overflow-x-hidden m-[-1px]"
    >
      {/* HERO WRAPPER */}
      <div className="relative max-w-[1110px] mx-auto px-5 sm:px-8">
        {/* TABLET/DESKTOP PHOTO*/}
        <div className="hidden sm:block absolute right-0 top-0 z-0 lg:right-8">
          {/* TABLET */}
          <img
            src={profilePicTablet}
            alt="Profile Picture"
            className="block lg:hidden w-[280px] h-[490px] object-cover"
          />
          {/* DESKTOP */}
          <img
            src={profilePicDesktop}
            alt="Profile Picture"
            className="hidden lg:block w-[400px] h-[600px] object-cover"
          />

          {/* circle pattern (tablet/desktop) */}
          <img
            src={patternCircle}
            alt=""
            className="absolute right-[-4rem] top-[23.5rem] sm:size-28 pointer-events-none select-none lg:top-[27rem] lg:right-[21.5rem]"
          />
        </div>

        {/* HEADER */}
        <header className="relative z-20 flex flex-col items-center gap-5 pt-6 sm:flex-row sm:justify-between ">
          <h3 className="text-[24px] leading-[32px] font-bold">adamkeyes</h3>

          <nav className="flex items-center justify-center gap-6">
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
        </header>

        {/* MOBILE PHOTO + RINGS (only mobile) */}
        <div className="relative mt-[-3rem] flex justify-center sm:hidden">
          <img
            src={patternRings}
            alt=""
            className="absolute left-[-17rem] top-[12rem] pointer-events-none select-none"
          />
          <img
            src={patternCircle}
            alt=""
            className="absolute right-[-5.5rem] top-[23rem] pointer-events-none select-none sm:top-[25rem]"
          />
          <img
            src={profilePicMobile}
            alt="Profile Picture"
            className="relative z-10 w-[240px] h-[500px] object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-[450px] mx-auto flex flex-col items-center gap-6 px-5 sm:px-0 sm:mx-0 sm:items-start sm:pt-16 lg:max-w-[710px] lg:pt-[6.5rem]">
          {/* rings pattern (tablet/desktop) */}
          <img
            src={patternRings}
            alt=""
            className="hidden sm:block absolute left-[-17rem] top-[6rem] pointer-events-none select-none sm:top-[1rem] lg:left-[-16rem] lg:top-[2rem]"
          />

          <h1 className="text-[48px] leading-[52px] font-bold text-center mt-10 sm:mt-0 sm:text-left sm:text-[54px] sm:leading-[58px] sm:mb-4 lg:text-[78px] lg:leading-[88px] lg:tracking-[-2.5px] lg:max-w-[710px]">
            Nice to <br className="hidden sm:block lg:hidden" />
            meet you! I&apos;m
            <br className="hidden sm:block lg:hidden" />{" "}
            <span className="underline decoration-accent underline-offset-8">
              Adam Keyes
            </span>
            .
          </h1>

          <p className=" text-[18px] leading-[32px] text-gray text-center sm:text-left sm:max-w-[400px] sm:mb-[2rem] sm:text-sm sm:leading-[22px] lg:text-[20px] lg:leading-[28px] lg:max-w-[445px]">
            Based in the UK, I&apos;m a front-end developer
            <br className="hidden sm:block lg:hidden" /> passionate about
            building accessible web apps
            <br className="hidden sm:block lg:hidden" /> that users love.
          </p>

          <Button href="#contact">Contact Me</Button>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-b border-white lg:mt-[10rem]" />
      </div>
    </section>
  );
}
