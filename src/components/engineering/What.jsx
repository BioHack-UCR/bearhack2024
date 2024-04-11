import Vertical from "@/public/vertical.webp";
import Image from "next/image";

const What = () => {
  return (
    <div className="flex flex-row items-center justify-evenly text-white w-full">
      <Image src={Vertical} alt="Web Pages" />
      <div className="w-1/3">
        <div className="text-4xl font-bold">What is Hackathon Website?</div>
        <div className="text-xl my-5">
          Hackathon Website serves as a template for all 5 of UC
          Riverside&apos;s hackathon events: Cutiehack, Rosehack, Bearhack,
          DesignVerse, and Citrushack. The purpose of this website is to
          centralize the hackathon management process for all participants and
          organizers. Providing a streamlined and uniform experience for all
          hackers.
        </div>
      </div>
    </div>
  );
};

export default What;
