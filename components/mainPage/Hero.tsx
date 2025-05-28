import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowBigRight, Upload } from "lucide-react";

const updates = [
  {
    title: "Upload Image",
    description: "New Feature - Apr 30, 2023",
  },
  {
    title: "Upload Image",
    description: "New Feature - Apr 30, 2023",
  },
  {
    title: "Upload Image",
    description: "New Feature - Apr 30, 2023",
  },
  {
    title: "Upload Image",
    description: "New Feature - Apr 30, 2023",
  },
];

export default function MainHero() {
  return (
    <div className="flex items-center h-full px-23 gap-16 text-white">
      {/* Content */}
      <div className="w-1/2 flex flex-col items-start gap-8">
        <h1 className="font-semibold text-7xl leading-tight text-[var(--secondary)]">
          Master Your Day with TodoVerse
        </h1>
        <p className="text-[var(--border)]">
          Welcome to TodoVerse — a dynamic space where productivity meets
          purpose. Join a growing community of doers, developers, and dreamers
          who organize, prioritize, and conquer their daily goals with style.
          Whether you are tracking personal tasks, managing team projects, or
          simply staying focused, TodoVerse gives you the tools to turn plans
          into progress. With intuitive features, clean UI, and seamless
          collaboration, it is more than just a to-do list — it is your universe
          of getting things done.
        </p>
        <Link href="/dashboard">
          <Button variant="destructive" className="py-4 px-6 text-lg">
            Try it now
          </Button>
        </Link>
      </div>

      {/* List of Updates */}
      <div className="w-1/2 flex justify-end">
        <div className="w-4/5 backdrop-blur-sm flex flex-col gap-5 p-5 border rounded-md bg-white/5">
          <h2 className="text-xl font-bold">Updates</h2>

          <div className="flex flex-col gap-3">
            {updates.map((update, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border rounded-md p-3"
              >
                <Upload className="text-[var(--secondary)]" />
                <div>
                  <h3 className="font-semibold">{update.title}</h3>
                  <p className="text-sm text-gray-300">{update.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href={"/dashboard"} className="flex justify-center">
            <Button variant="default" className="gap-2">
              <ArrowBigRight />
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
