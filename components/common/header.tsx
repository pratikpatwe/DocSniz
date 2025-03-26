import NavLink from "./nav-link";
import Image from "next/image";
import logo from "../../public/logo.svg";
// import { BadgeCheck } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <Image
            src={logo}
            alt="DocSniz Logo"
            className="h-8 w-8 lg:h-10 lg:w-10 text-gray-900 hover:rotate-12 hover:scale-110 transition-transform duration-200"
          />
          <span className="font-extrabold text-xl lg:text-2xl text-gray-900">DocSniz</span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>

        <SignedIn>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </SignedIn>

      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>

            {/* 
            <div className="px-2 py-[1px] text-amber-500 bg-amber-100 border-1 border-amber-200 rounded-xl flex items-center mx-0.5 justify-center">
              <p className="mb-[1px]">
                pro
              </p>
              <BadgeCheck className="ml-2" size={12} />
            </div> */}

            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </SignedIn>

        <SignedOut>
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        </SignedOut>
      </div>

    </nav>
  );
}