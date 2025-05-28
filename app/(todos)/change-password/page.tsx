import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col gap-7">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="relative text-2xl font-semibold after:content-[''] after:block after:w-[70%] after:h-[3px] after:bg-[var(--destructive)] after:mt-2">Change Password</h1>
        <Button asChild variant={"link"}>
          <Link href={"/dashboard"} className="p-0">
            Go Back
          </Link>
        </Button>
      </div>

      {/* Account */}
      <div className="flex items-center gap-5">
        <Image
          src={"/images/profile.webp"}
          alt=""
          width={96}
          height={96}
          className="rounded-full border border-gray-400 border-[2px]"
        />
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-xl">Kazbek</div>
          <div>37765@iitu.edu.kz</div>
        </div>
      </div>

      {/* Reset Password */}
      <div className="border px-6 pt-15 pb-20 mb-6 rounded-lg shadow-md border-gray-400">
        <form className="flex flex-col gap-5 items-start pb-6">
          <label className="w-full">
            <span className="block mb-1">Current Password</span>
            <Input
              name="currentPassword"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3"
            />
          </label>

          <label className="w-full">
            <span className="block mb-1">New Password</span>
            <Input
              name="newPassword"
              type="password"
              required
              autoComplete="new-password"
              className="w-full px-4 py-3"
            />
          </label>

          <label className="w-full">
            <span className="block mb-1">Confirm New Password</span>
            <Input
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              className="w-full px-4 py-3"
            />
          </label>

          <div className="flex gap-4 mt-4">
            <Button
              type="submit"
              variant="destructive"
              className="opacity-80 hover:opacity-100"
            >
              Update Password
            </Button>
            <Button
              type="button"
              variant="outline"
              className="opacity-80 hover:opacity-100"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
