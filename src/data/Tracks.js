import track1 from "@/public/track1.svg";
import track2 from "@/public/track2.svg";
import track3 from "@/public/track3.svg";
import track4 from "@/public/track4.svg";

export const TRACKS = [
  {
    name: "Best Beginner",
    description:
      "For your hack to qualify as a Beginner Hack, Bearhack must be the first hackathon a majority of your team has attended.",
    image: track1,
    offset: "translate-y-8",
  },
  {
    name: "Best Hardware",
    description:
      "This project involves the best incorporation of hardware that meshes well with software.",
    image: track2,
    offset: "scale-150",
  },
  {
    name: "Best Startup",
    description:
      "Most viable business model for healthcare startup that addresses a pressing healthcare issue.",
    image: track3,
    offset: "translate-x-2 translate-y-2",
  },
  {
    name: "Best UI/UX",
    description:
      "Design most intuitive and visually appealing user interface for a healthcare application or device.",
    image: track4,
    offset: "translate-y-4",
  },
];

export default TRACKS;
