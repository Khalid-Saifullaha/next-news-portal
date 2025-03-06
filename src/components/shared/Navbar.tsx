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
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center  lg:px-g">
        {/* Logo */}
        <div className="text-x font-bold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* News Link */}
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link href="/news">News</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown with Clickable Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link href="/services">
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
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Contact */}
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink asChild className="hover:text-red-500">
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile hamber menu */}
        <div className="lg:hidden">
          <Button variant="default">
            <AiOutlineMenu size={24} />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
