// "use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 flex justify-between items-center ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer regular-16 text-grey-50 transition-all hover:font-bold "
            >
              {link.label}
            </Link>
          );
        })}
      </ul>

      <Button
        title="Login"
        type="button"
        varient="btn_dark_green"
        icon="./user.svg"
      ></Button>

      <GiHamburgerMenu className="md:hidden"></GiHamburgerMenu>
    </nav>
  );
};

export default Navbar;
