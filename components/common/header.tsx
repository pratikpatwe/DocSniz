import NavLink from "./nav-link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Button } from "@/components/ui/button";


export default function Header() {
  const isLoggedIn = false;
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
        <NavLink href="#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Dashboard</NavLink>}

      </div>

      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        )}
      </div>

    </nav>
  );
}