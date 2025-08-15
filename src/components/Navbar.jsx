"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>Postlee</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer text-4xl"
        >
          {open ? "x" : "="}
        </div>

        {/* MOBILE LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center pt-36 absolute top-16 ${
            open ? "right-0" : "right-full"
          } bg-[#e6e6ff] transition-all duration-200`}
        >
          <div className="flex flex-col items-center gap-12 text-xl">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/" className="">
              Trending
            </Link>
            <Link to="/" className="">
              Most Popular
            </Link>
            <Link to="/" className="">
              About
            </Link>
            <Link to="/login">
              <button className="p-2 px-4 bg-blue-800 text-white rounded-full cursor-pointer">
                Login 👋️
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="" className="">
          Home
        </Link>
        <Link to="" className="">
          Trending
        </Link>
        <Link to="" className="">
          Most Popular
        </Link>
        <Link to="" className="">
          About
        </Link>
        <SignedOut>
          <Link to="/login">
            <button className="p-2 px-4 bg-blue-800 text-white rounded-full">
              Login 👋️
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
