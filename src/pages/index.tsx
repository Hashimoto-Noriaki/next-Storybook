import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="text-5xl text-blue-600">StoryBookをやるぞー</h1>
  );
}
