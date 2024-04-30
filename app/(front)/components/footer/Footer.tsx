"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-dark pt-24 md:pt-48 pb-8 text-white wrap'>
      <div id='footerTop' className='page-wrap custom-space-small'>
        <div className='flex custom-space-small'>
          <h2 className='h1'>
            <span className='italic text-primary line-through'>Fremtidens</span>{" "}
            gæster skal have vedvarende oplevelser.
          </h2>
        </div>
        <div className='flex items-end gap-x-24'>
          <div className='logo text-primary hidden md:block'>
            <Link href='/'>
              <Image
                src='/rethink_logo_farve.svg'
                width={150}
                height={150}
                alt='logo'
              />
            </Link>
          </div>
          <div className='flex flex-col gap-8'>
            <ul>
              <li>
                <p className='h3 leading-normal'>+45 27 12 61 39</p>
              </li>
              <li>
                <Link href={"mailto:info@rethinkevent.dk"}>
                  <p className='h3 leading-normal hover:text-primary'>
                    info@rethinkevent.dk
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/company/rethink-event/"}>
                  <p className='h3 leading-normal hover:text-primary'>
                    Linkedin
                  </p>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <p className='h3 leading-normal'>I miljøet</p>
              </li>
              <li>
                <p className='h3 leading-normal'>Fredens Torv 8.2</p>
              </li>
              <li>
                <p className='h3 leading-normal'>8000 Aarhus C</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id='bottomFooter' className='flex gap-8 justify-between page-wrap'>
        <nav className='flex flex-col md:flex-row gap-8 lg:gap-24'>
          <Link href='/forretningsbetingelser'>
            <p className='text-xl hover:text-primary'>Forretningsbetingelser</p>
          </Link>
          <Link href='/privatlivspolitik'>
            <p className='text-xl hover:text-primary'>Privatlivspolitik</p>
          </Link>

          <Link href='#'>
            <p className='text-xl hover:text-primary'>Coockies</p>
          </Link>
        </nav>
        <p className='text-lg self-end'>CVR-NR: 35124616</p>
      </div>
    </footer>
  );
};

export default Footer;
