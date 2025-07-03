"use client";
import { Button, Drawer } from "antd";
import React from "react";
import HamburgerToggle from "./HumbergerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DefaultButton from "./DefaultButton";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();

  const onClose = () => {
    setOpen(false);
  };

  const NavItems = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 4,
      label: "About",
      href: "#about",
    },
    {
      id: 2,
      label: "Projects",
      href: "#projects",
    },
    {
      id: 3,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="w-full  h-[100px] shrink-0 flex items-center text-black [background:#FFF]">
      <div className="container px-4 mx-auto h-full w-full flex items-center justify-between px-4s">
        <div className="flex items-center justify-between w-full h-full">
          <div className="text-mirage  text-3xl font-bold leading-[normal] tracking-[0.6px]">
            <span className="text-primary">Port</span>folio.
          </div>
          <nav className="hidden lg:flex lg:gap-x-10 space-x-4">
            {NavItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`text-base uppercase leading-[normal] tracking-[0.6px] text-mirage hover:text-primary transition-all duration-300 ${
                  pathName === item.href
                    ? "text-primary font-bold"
                    : "text-[#757B82] font-normal"
                } `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <DefaultButton rounded="md" title="Contact me" />
          </div>

          <div className="flex lg:hidden">
            <HamburgerToggle isOpen={open} setIsOpen={setOpen} />
          </div>

          <Drawer
            title="Basic Drawer"
            placement="left"
            width={"80%"}
            closable={{ "aria-label": "Close Button" }}
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
