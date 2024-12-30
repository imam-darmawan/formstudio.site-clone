import { secondaryLinks, socialLinks } from "../data/content";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Footer = () => {
  const brandNameRef = useRef();

  useGSAP(() => {
    gsap.from(brandNameRef.current.children, {
      y: "100%",
      duration: 1,
      stagger: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: brandNameRef.current,
        toggleActions: "restart none none none",
      },
    });
  });

  return (
    <div>
      {/* Video */}
      <div className="h-screen w-full">
        <video
          src="https://framerusercontent.com/assets/sagu9WJMRc7UvZaZc4N2cUQ68Z4.mp4"
          poster="https://framerusercontent.com/images/wliymflpHJV7DvV0MbCsghDF6e4.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        ></video>
      </div>

      {/* Social links */}
      <div className="mt-3">
        <ul className="grid grid-cols-4">
          {socialLinks.map((link) => (
            <li
              key={link.label}
              className="col-span-2 p-3 text-center min-[512px]:col-span-1"
            >
              <Button label={link.label} url={link.url} />
            </li>
          ))}
        </ul>
      </div>

      {/* Brand name */}
      <div className="mt-12">
        <p
          className="overflow-hidden text-nowrap text-center text-[clamp(6rem,30cqi,15rem)] font-extrabold leading-none"
          ref={brandNameRef}
        >
          {"Form".split("").map((char) => (
            <span key={char} className="inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>

      {/* Footer links */}
      <div className="my-6 min-[512px]:mb-0">
        <ul className="grid grid-cols-4">
          {secondaryLinks.map((link) => (
            <li
              key={link.label}
              className="col-span-2 px-3 py-2 text-center min-[512px]:col-span-1 min-[512px]:text-left"
            >
              <a
                href={link.url}
                className="inline-block max-w-40 text-xs hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
