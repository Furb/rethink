import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Ydelse } from "../utils/interface";
import YdelseExcpert from "@/app/components/ydelse/YdelseExcpert";

async function getYdelser() {
  const query = `*[_type == "ydelser"]{
title,slug,excerpt}`;

  const data = await client.fetch(query);
  return data;
}

const Ydelser = async () => {
  const ydelser: Ydelse[] = await getYdelser();
  console.log(ydelser);
  return (
    <main className='wrap'>
      <div className='custom-space-small col-span-full'>
        <h1>
          Som din eventpartner{" "}
          <span className='text-primary'>
            {" "}
            tilbyder vi omfattende rådgivning og planlægning af events
          </span>{" "}
          så du kan fokusere på det vigtigste - dine deltagere og dit budskab
        </h1>

        <div className='hidden gap-4 md:gap-8 flex-col md:flex-row'>
          <div className='image aspect-video custom-space md:mb-36 rounded-xl bg-primary'>
            <Image
              src='/deco1.jpg'
              fill
              alt='eventsetting'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-xl'
            />
          </div>
          <div className='image aspect-video custom-space md:mb-36 rounded-xl bg-primary'>
            <Image
              src='/deco1.jpg'
              fill
              alt='eventsetting'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-xl'
            />
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-8 gap-8 2xl:gap-24'>
        <div className='col-span-6'>
          {ydelser?.length > 0 &&
            ydelser?.map((ydelse) => (
              <YdelseExcpert ydelse={ydelse} key={ydelse._id} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Ydelser;
