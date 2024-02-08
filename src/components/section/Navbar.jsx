import React, { useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(location.pathname);

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Role", href: "/roles" },
    { name: "Users", href: "/Users" },
    { name: "Proker", href: "/proker" },
    { name: "Docs", href: "/docs" },
    { name: "Alumni", href: "/alumni" },
    { name: "Settings", href: "/settings" },
    { name: "Log Out", href: "/logout" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  return (
    <>
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex items-center gap-1">
          <img src="/logo_ukmik.svg" alt="Logo UKM IK" />
          <h1 className="font-semibold text-primary-4">ukmik</h1>
        </div>

        <Button onClick={() => setIsOpen(true)} variant="ghost">
          <HamburgerMenuIcon width={24} height={24} />
        </Button>

        <div
          className={`${
            !isOpen ? "-mr-[100%]" : ""
          } transition-all duration-700 absolute right-0 top-0 z-20 bg-primary-9 h-screen w-[65vw] text-center py-2 px-4 flex flex-col gap-2`}
        >
          {navItems.map(({ name, href }) => (
            <Link key={href} to={href}>
              <Button
                variant="link"
                className={`${
                  activeNav === href ? "bg-white" : "bg-none"
                } text-black w-full`}
              >
                <h1>{name}</h1>
              </Button>
            </Link>
          ))}

          <div className="mt-12 flex flex-col w-full items-center gap-[20px]">
            <div className="flex gap-[20px]">
              <Link>
                <img src="/facebook.svg" alt="Facebook" />
              </Link>
              <Link>
                <img src="/instagram.svg" alt="Instagram" />
              </Link>
              <Link>
                <img src="/youtube.svg" alt="Youtube" />
              </Link>
            </div>

            <div className="flex flex-col italic text-gray-700">
              <p className="text-xs">© 2024 UKMIK All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleClose}
        className={`${
          isOpen ? "opacity-50 z-10" : "opacity-0 -z-10"
        } absolute top-0 transition-all duration-700 w-screen h-screen bg-black`}
      />
    </>
  );
};

export default Navbar;
