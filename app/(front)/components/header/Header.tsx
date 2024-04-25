"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='py-6 wrap bg-white mb-24'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/rethink_logo_farve.svg'
            width={80}
            height={80}
            alt='logo'
          />
        </Link>
        <div className='hidden'>
          <NavLinks
            menu={
              isOpen
                ? "absolute top-24 left-0 right-0 bottom-0 bg-light bg-opacity-50"
                : "hidden lg:flex"
            }
          />
        </div>

        <Link href='#footerTop'>
          <button className='rounded-full px-8 py-2'>
            <p className='text-2xl font-normal hover:'> Kontakt</p>
          </button>
        </Link>

        <Link
          href='#'
          onClick={() => setIsOpen(!isOpen)}
          className='hidden menu-icon text-primary'
        >
          {isOpen ? (
            <XMarkIcon className='h-8' />
          ) : (
            <Bars3Icon className='h-8' />
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
