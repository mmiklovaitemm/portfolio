import patternRings from "../assets/images/pattern-rings.svg";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-darkGray text-white relative overflow-hidden mt-[-1px]"
    >
      <div className="max-w-[1110px] mx-auto px-6 py-16">
        {/* rings */}
        <img
          src={patternRings}
          alt=""
          className="absolute left-[-20rem] bottom-[7rem] pointer-events-none select-none"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-[40px] leading-[40px] font-bold">Contact</h2>
            <p className="mt-5 text-gray leading-[26px] sm:text-lg md:text-xl">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          {/* RIGHT */}
          <form className="flex flex-col gap-6">
            <input
              className="bg-transparent border-b border-white/30 px-4 py-4 uppercase tracking-widest outline-none focus:border-accent sm:text-base text-sm"
              placeholder="Name"
            />
            <input
              className="bg-transparent border-b border-white/30 px-4 py-4 uppercase tracking-widest outline-none focus:border-accent sm:text-base text-sm"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-b border-white/30 px-4 py-4 uppercase tracking-widest outline-none focus:border-accent min-h-[120px] resize-none sm:text-base text-sm"
              placeholder="Message"
            />

            <div className="self-end">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
