import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/ui/github";
import { Google } from "@/components/ui/google";
import { Input } from "@/components/ui/input";
import { Twitter } from "@/components/ui/twitter";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-full flex items-center text-[var(--accent)]">
      {/* Content */}
      <div className="flex flex-col w-1/2">
        {/* Title */}
        <h1 className="font-bold text-4xl pb-5">Sign In</h1>

        {/* Form */}
        <form className="flex flex-col gap-5 items-start pb-15">
          <Input
            name="username"
            placeholder="Enter Username"
            type="text"
            required
            autoComplete="username"
            className="px-5 py-7"
          />
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            required
            autoComplete="current-password"
            className="px-5 py-7"
          />

          {/* Remember me checkbox */}
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-4 h-4"
            />
            <label htmlFor="remember" className="text-center">
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            variant="destructive"
            className="opacity-50 hover:opacity-100 px-10 py-7"
          >
            Login
          </Button>
        </form>

        <div>
          {/* Github, Google, Twitter */}
          <div className="flex gap-3 items-center">
            <span>Or, Login with</span>
            <div className="flex flex-row justify-between w-[80px] h-4 gap-2 items-center cursor-pointer">
              <GitHub />
              <Google />
              <Twitter/>
            </div>
          </div>

          {/* Sign Up */}
          <div>
            <span>Don&apos;t have an account?</span>
            <Button asChild variant="link" className="text-blue-300 px-1">
              <Link href={"/register"}>Create one</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="w-1/2 relative h-0 pb-[40%]">
        <Image
          src="/images/login-bg.webp"
          alt=""
          fill
          className="object-contain opacity-75"
        />
      </div>
    </div>
  );
};

export default Page;
