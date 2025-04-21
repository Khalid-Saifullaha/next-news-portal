"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md bg-purple-600 sticky top-0  z-40">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center  lg:px-g">
        <div className="text-x font-bold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* News Link */}
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={`${
                    pathname === "/news" ? "text-red-500 font-bold" : ""
                  } hover:text-red-500`}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown with Clickable Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link
                  href="/services"
                  className={`${
                    pathname === "/services" ? "text-red-500 font-bold" : ""
                  } hover:text-red-500`}
                >
                  <NavigationMenuTrigger className=" text-gray-700">
                    Services
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuContent>
                <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/web">Web Development</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/apps">Mobile App</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/seo">SEO</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "text-red-500 font-bold" : ""
                  } hover:text-red-500`}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Contact */}
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "text-red-500 font-bold" : ""
                  } hover:text-red-500`}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile hamber menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;
