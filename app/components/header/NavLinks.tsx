"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const navlinks = [
    {
      title: "Hvad har vi lavet",
      path: "/cases",
    },

    {
      title: "Hvad vi tilbyder",
      path: "/ydelser",
    },

    {
      title: "Venner",
      path: "/netvaerk",
    },

    {
      title: "Scrapbogen",
      path: "/scrapbogen",
    },
  ];

  const activelink = usePathname();

  return (
    <nav className='flex gap-x-16 text-xl font-normal'>
      {navlinks.map((navlink) => (
        <Link href={navlink.path} key={navlink.title}>
          <p
            className={`py-2 px-4 text-[1.125rem] hover:bg-light  hover:py-2 rounded-full ${
              activelink === navlink.path
                ? "bg-secondary text-white py-2 rounded-full"
                : ""
            }`}
          >
            {navlink.title}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
