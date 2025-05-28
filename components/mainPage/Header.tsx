import Link from "next/link";
import { Button } from "../ui/button";

export default function MainHeader() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-lg backdrop-blur-md bg-purple shadow-2xl shadow-purple-500/50">
      {/* Логотип */}
      <div className="flex w-[300px] items-center justify-center text-3xl font-semibold text-white">
        <Link
          href="/dashboard"
          aria-label="ToDoVerse Dashboard"
          title="Go to Dashboard"
        >
          ToDo <span className="text-[var(--destructive)]">Verse</span>
        </Link>
      </div>

      {/* Кнопки */}
      <div className="flex gap-2">
        <Link href="/register">
          <Button variant="outline" className="cursor-pointer">
            Sign Up
          </Button>
        </Link>

        <Link href="/login">
          <Button variant="destructive" className="cursor-pointer">
            Sign In
          </Button>
        </Link>
      </div>
    </header>
  );
}
