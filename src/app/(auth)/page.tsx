"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }

  interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const handleSubmit = (e: React.FormEvent<SignInFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-12 md:col-span-6 w-full space-y-1 p-8 flex justify-center items-center py-8">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={162}
          height={82}
          className="absolute top-8 left-8"
        />
        <div className="flex justify-center items-center max-w-[400px] w-full">
          <Card className="w-full max-w-md bg-navy-950 text-white border-none">
            <CardHeader className="p-0">
              <CardTitle className="justify-start text-white text-[40px] font-bold ">
                Sign in
              </CardTitle>
              <p className="text-[#959595] text-lg font-normal">
                Please login to continue to your account.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      type="email"
                      className="p-4 rounded-[10px] border !border-[#d9d9d9] focus:!border-blue-500 !text-[#9a9a9a] !text-lg font-normal leading-[27px] h-[60px] outline-none focus-visible:outline-none"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Label htmlFor="password" className="sr-only">
                        Password
                      </Label>
                      <Input
                        id="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        className="p-4 rounded-[10px] border !border-[#d9d9d9] focus:!border-blue-500 !text-[#9a9a9a] !text-lg font-normal leading-[27px] h-[60px] outline-none focus-visible:outline-none pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-5 text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5" />
                        ) : (
                          <EyeOffIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" className="w-[18px] h-[18px] outline-2 cursor-pointer" />
                      <Label htmlFor="remember" className="text-[#9a9a9a] text-base font-medium">
                        Keep me logged in
                      </Label>
                    </div>
                    <Link
                      href="#"
                      className="text-[#9a9a9a] text-base font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 w-full space-y-1 rounded-3xl ">
        <Image
          src="/images/auth-image.png"
          alt="Auth Image"
          width={1500}
          height={1300}
          className="h-full  p-3 w-[100%] max-h-screen md:min-h-screen object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
