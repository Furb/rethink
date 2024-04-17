import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className='py-6 wrap bg-white mb-24'>
      <nav className='flex justify-between items-center w-full'>
        <Link href='/'>
          <Image
            src='/rethink_logo_farve.svg'
            width={80}
            height={80}
            alt='logo'
          />
        </Link>

        <NavLinks />

        <Link href='#'>
          <button className='bg-secondary text-light rounded-full px-8 py-2'>
            Hiv fat i os
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
