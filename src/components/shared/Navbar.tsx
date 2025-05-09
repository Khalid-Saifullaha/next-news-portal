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
    <header className="py-4 shadow-md bg-purple-800 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center lg:px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={`transition-colors duration-300 ${
                    pathname === "/news"
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-200"
                  }`}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`bg-transparent px-0 text-white hover:text-yellow-200 ${
                  pathname === "/services" ? "text-yellow-300 font-bold" : ""
                }`}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-gray-800 p-4 rounded-md shadow-lg min-w-[220px]">
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web"
                        className="block hover:text-purple-600"
                      >
                        Web Development
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/apps"
                        className="block hover:text-purple-600"
                      >
                        Mobile App
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/seo"
                        className="block hover:text-purple-600"
                      >
                        SEO
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={`transition-colors duration-300 ${
                    pathname === "/about"
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-200"
                  }`}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={`transition-colors duration-300 ${
                    pathname === "/contact"
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-200"
                  }`}
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right-side controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Dark Mode</span>
            <Switch />
          </div>
          <Button
            variant="secondary"
            className="bg-cyan-600 text-white hover:bg-cyan-500 cursor-pointer transition"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;
