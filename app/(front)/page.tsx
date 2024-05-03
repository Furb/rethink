import Link from "next/link";
import Casegrid from "./components/cards/Casegrid";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className='page-wrap'>
      <div className='custom-space-small'>
        <p className='text-primary'>Rethink Event </p>
        <h1>Cirkulære forretningsmodeller</h1>
      </div>
      <div
        className=' 
      image aspect-video custom-space md:mb-36 rounded-xl bg-primary'
      >
        <Image
          src='/deco1.jpg'
          fill
          alt='dekoration til fest'
          className='rounded-xl'
        />
      </div>
      <p className='text-primary mb-4 lg:hidden'>Udvalgte Cases</p>
      <Casegrid limit={2} orderBy={"_createdAt desc"} />

      <section className='grid grid-cols-1 md:grid-cols-8 gap-16 max-md:mb-4 md:custom-space'>
        <div className='max-md:custom-space md:col-span-4 2xl:col-span-5'>
          <h2 className='custom-space-small'>
            Vi er et eventbureau, som arbejder for at skabe events, der gør en
            positiv forskel i verden. Relationelt. Miljømæssigt. Økonomisk.
            <br />
            <br />
            Med en praktisk tilgang forvandler vi fremtidens nødvendigheder til
            dagens handlinger og bidrager til et bedre i morgen.
          </h2>
          <Link href='/ydelser'>
            <button className='bg-primary border-2 border-primary text-light rounded-full px-8 py-4 font-normal text-[1.125rem] hover:bg-white hover:text-primary'>
              Se hvad vi kan gøre for jer
            </button>
          </Link>
        </div>

        <div className='relative aspect-square max-md:w-full md:w-96 rounded-xl bg-primary'>
          <Image
            src='/talks.jpg'
            fill
            alt='debatpanel'
            className='rounded-xl object-cover'
          />
        </div>
      </section>

      <section className='bg-light rounded-xl py-24 wrap max-md:mb-4 md:custom-space-small'>
        <h4 className='font-bold mb-8'>
          Vores ekspertise er events med varig værdi
        </h4>

        <div className='group'>
          <Link
            href='ydelser/eventradgivning'
            className='block py-4 md:py-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h3>Eventrådgivning</h3>
          </Link>
          <Link
            href='ydelser/eventmanagement'
            className='block py-4 md:py-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h3>Eventmanagement</h3>
          </Link>
          <Link
            href='ydelser/undervisning-and-facilitering'
            className='block py-4 md:py-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h3>Undervisning & facilitering</h3>
          </Link>
          <Link
            href='ydelser/debat-and-foredrag'
            className='block py-4 md:py-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h3>Debat & foredrag</h3>
          </Link>
        </div>
      </section>
    </main>
  );
}
