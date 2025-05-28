import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-full flex items-center">
      {/* Images */}
      <div className="w-1/2 relative h-0 pb-[40%]">
        <Image
          src="/images/register-bg.webp"
          alt=""
          fill
          className="object-contain opacity-75"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col w-1/2">
        {/* Title */}
        <h1 className="font-bold text-4xl pb-5">Sign Up</h1>

        {/* Form */}
        <form className="flex flex-col gap-5 items-start pb-5">
          <Input
            name="firstName"
            placeholder="Enter First Name"
            type="text"
            required
            autoComplete="given-name"
            className="px-5 py-7"
          />
          <Input
            name="lastName"
            placeholder="Enter Last Name"
            type="text"
            required
            autoComplete="family-name"
            className="px-5 py-7"
          />
          <Input
            name="username"
            placeholder="Enter Username"
            type="text"
            required
            autoComplete="username"
            className="px-5 py-7"
          />
          <Input
            name="email"
            placeholder="Enter Email"
            type="email"
            required
            autoComplete="email"
            className="px-5 py-7"
          />
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            required
            autoComplete="new-password"
            className="px-5 py-7"
          />
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            required
            autoComplete="new-password"
            className="px-5 py-7"
          />

          {/* Agree to all terms checkbox */}
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              name="agreeToAllTerms"
              id="agreeToAllTerms"
              className="w-4 h-4"
            />
            <label htmlFor="agreeToAllTerms" className="text-center">
              I agree to all terms
            </label>
          </div>

          <Button
            type="submit"
            variant="destructive"
            className="opacity-50 hover:opacity-100 px-10 py-7"
          >
            Register
          </Button>
        </form>

        {/* Sign Up */}
        <div>
          <span>Already have an account?</span>
          <Button asChild variant="link" className="text-blue-300 px-1">
            <Link href={"/login"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
