"use client";

import {
  Bold,
  ClipboardCheckIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListCollapseIcon,
  LogOut,
  TriangleAlertIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SideBar() {
  const pathname = usePathname();

  const links = [
    { icon: <LayoutDashboardIcon />, href: "/dashboard", label: "Dashboard" },
    { icon: <TriangleAlertIcon />, href: "/vitals", label: "Vital Task" },
    { icon: <ClipboardCheckIcon />, href: "/my-tasks", label: "My Task" },
    {
      icon: <ListCollapseIcon />,
      href: "/task-categories",
      label: "Task Categories",
    },
    { icon: <Bold />, href: "/settings", label: "Settings" },
    { icon: <HelpCircleIcon />, href: "/help", label: "Help" },
  ];

  return (
    <div className="fixed z-100 top-38 bottom-0 left-0 w-[350px] px-6 mt-0 bg-[var(--color-foreground)] rounded-tr-lg text-white flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        {/* Account */}
        <div className="flex flex-col -mt-15 items-center">
          <Image
            src={"/images/profile.webp"}
            alt=""
            width={128}
            height={128}
            className="rounded-full border border-white border-[2px]"
          />
          <div className="font-semibold text-lg">Kazbek</div>
          <div className="text-sm">37765@iitu.edu.kz</div>
        </div>

        {/* Aside */}
        <aside className="flex flex-col">
          <nav className="flex flex-col gap-8">
            {links.map(({ icon, href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex gap-4 ${pathname === href ? "font-bold" : ""}`}
              >
                {icon}
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* Logout */}
      <div className="flex items-center gap-2 cursor-pointer">
        <LogOut />
        <Button variant={"link"} className="text-white p-0 cursor-pointer">
          Logout
        </Button>
      </div>
    </div>
  );
}
