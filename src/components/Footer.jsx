import Link from "next/link";
import Image from "next/image.js";
import footer from "@/public/footer.svg";
import logo from "@/public/logo.webp";
import { AiFillHeart } from "react-icons/ai";
import { CONTACTS } from "@/data/Contacts.js";

const Footer = () => {
  return (
    <div className="w-full h-full text-white">
      <Image src={footer} alt="Footer" className="w-full" />
      <div className="flex flex-col items-center justify-center w-full ">
        <Image src={logo} alt="Logo" className="w-1/6 xl:w-1/12" />
        <div className="text-xs md:text-xl m-0 p-1 font-header">
          Made with <AiFillHeart className="inline" /> by the Bearhack team at
          University of California, Riverside
        </div>
        <div className="flex mb-8 gap-2">
          {CONTACTS.map((contact, index) => (
            <Link
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline text-2xl hover:cursor-pointer hover:!text-rosehack-teal hover:-translate-y-1 duration-200"
            >
              {contact.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
