"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = ({ menu }: { menu: string }) => {
  const navlinks = [
    {
      title: "Hvad vi tilbyder",
      path: "/ydelser",
    },

    {
      title: "Hvad vi har lavet",
      path: "/cases",
    },
  ];

  const activelink = usePathname();

  return (
    <div
      className={`${menu} flex-col lg:flex-row gap-x-16 text-xl font-normal pt-[10vh] lg:pt-0 pb-16 lg:pb-0`}
    >
      {navlinks.map((navlink) => (
        <Link href={navlink.path} key={navlink.title} className='mb-4'>
          <p
            className={`py-2 px-4 text-2xl font-light lg:text-[1.125rem] lg:font-normal  ${
              activelink === navlink.path
                ? "bg-light text-dark py-2 rounded-full"
                : ""
            }`}
          >
            {navlink.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
