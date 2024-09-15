import React from "react";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className=" p-4 bg-blue-600 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Quizzy</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/Quiz">Quiz</Link>
          <Link href="/Create Quiz">Create Quiz</Link>
          <Link href="/contact">Contact Us</Link>
          
        </div>

        <LoginLink>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
           
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
           
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Quizzy</SheetTitle>
              <SheetDescription>
              <div className="text-white flex flex-col gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/Quiz">Quize</Link>
          <Link href="/Create Quiz">Create Quiz</Link>
          <Link href="/contact">Contact</Link>
          
        <Button className="mx-1  text-sm" variant="outline">
          Login
        </Button>
        <Button className="mx-1 text-sm" variant="outline">
          SignUp
        </Button>
        </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;