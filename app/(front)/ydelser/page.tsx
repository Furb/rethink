import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Ydelse } from "../utils/interface";
import YdelseExcpert from "../components/ydelse/YdelseExcpert";
import Link from "next/link";

const getYdelser = async () => {
  const query = `*[_type == "ydelser"]{title, slug, excerpt, body, undertitle}`;
  const data = await client.fetch(query);
  return data;
};

const Ydelser = async () => {
  const ydelser: Ydelse[] = await getYdelser();
  console.log(ydelser);
  return (
    <main className='wrap'>
      <div className='custom-space-small'>
        <h1 className='mb-4'>Som din eventpartner</h1>
        <h2>
          <span className='text-primary'>
            {" "}
            Tilbyder vi omfattende rådgivning og planlægning af events
          </span>{" "}
          så du kan fokusere på det vigtigste - dine deltagere og dit budskab
        </h2>
      </div>
      <Link href='mailto:info@rethinkevent.dk'>
        <button className='border-2 border-primary text-primary rounded-full px-8 py-4 font-normal text-[1.125rem] hover:bg-dark hover:text-white hover:border-dark custom-space'>
          info@rethinkevent.dk
        </button>
      </Link>

      <div
        className=' 
      image aspect-video custom-space md:mb-36 rounded-xl bg-primary'
      >
        <Image
          src='/hero1.jpg'
          fill
          alt='dekoration til fest'
          className='rounded-xl'
        />
      </div>

      <div className='grid sm:grid-cols-8 gap-8 2xl:gap-24'>
        <div className='col-span-4'>
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
