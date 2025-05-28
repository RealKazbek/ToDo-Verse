// components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Header() {
  const [date, setDate] = useState<string>("");
  const [week, setWeek] = useState<string>("");

  useEffect(() => {
    const now = new Date();

    const weekday = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const formattedDate = now.toLocaleDateString("en-GB");

    setWeek(weekday);
    setDate(formattedDate);
  }, []);

  return (
    <header className="fixed z-100 w-full flex items-center justify-between px-6 py-4 shadow-md bg-[var(--secondary)]">
      {/* Логотип */}
      <div className="flex w-[300px] items-center justify-center text-3xl font-semibold">
        <Link href="/dashboard">
          ToDo <span className="text-[var(--destructive)]">Verse</span>
        </Link>
      </div>

      {/* Поиск */}
      <div className="flex-1 mx-6 max-w-3xl">
        <Input type="text" placeholder="Search your task here..." />
      </div>

      {/* Кнопки и дата */}
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-4">
          <Button variant="destructive" className="cursor-pointer">
            <Bell />
          </Button>
          <Button variant="destructive" className="cursor-pointer">
            <CalendarDays />
          </Button>
        </div>
        <span className="flex flex-col">
          <div className="text-[15px]">{week}</div>
          <div className="text-sm text-[var(--color-muted-foreground)]">
            {date}
          </div>
        </span>
      </div>
    </header>
  );
}
