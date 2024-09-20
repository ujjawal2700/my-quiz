import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";


const Navbar = () => {

  return (
    <nav className=" p-4 bg-blue-600 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Quizzy</Link>
        </div>
        <div className="flex gap-5">
          <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
