import Link from "next/link";
import Casegrid from "./components/cards/Casegrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className='wrap'>
      <div className='custom-space-small'>
        <h1>
          Rethink Event - Er iøjeblikket ifærd med at bygge webisitet op med ny
          visuel identitet.
        </h1>
      </div>

      <div className='hidden image aspect-video custom-space md:mb-36 rounded-xl bg-primary'>
        <Image
          src='/hero1.jpg'
          fill
          alt='debatpanel'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='rounded-xl'
        />
      </div>

      <section className='grid grid-cols-1 md:grid-cols-8 gap-16 custom-space'>
        <h2 className='md:col-span-4 2xl:col-span-5'>
          Vi er et eventbureau, som arbejder for at skabe events, der gør en
          positiv forskel i verden. Relationelt. Miljømæssigt. Økonomisk.
          <br />
          <br />
          Med en praktisk tilgang forvandler vi fremtidens nødvendigheder til
          dagens handlinger og bidrager til et bedre i morgen.
        </h2>
        <div className='image w-96 rounded-xl bg-primary place-self-stretch'>
          <Image
            src='/talks.jpg'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt='debatpanel'
            className='rounded-xl'
          />
        </div>
      </section>
      <section className='bg-light rounded-xl py-48 wrap custom-space-small'>
        <h4 className='font-normal'>Vores ekspertise er</h4>
        <p className='h1 custom-space-small text-primary'>
          Events med varig værdi
        </p>
        <div className='container'>
          <Link
            href='ydelser/eventradgivning'
            className='block py-8 px-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h2>Eventrådgivning</h2>
          </Link>
          <Link
            href='ydelser/eventmanagement'
            className='block py-8 px-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h2>Eventmanagement</h2>
          </Link>
          <Link
            href='ydelser/undervisning-and-facilitering'
            className='block py-8 px-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h2>Undervisning & facilitering</h2>
          </Link>
          <Link
            href='ydelser/debat-and-foredrag'
            className='block py-8 px-8 md:px-24 border-b border-primary hover:text-light hover:bg-primary 2xl:hover:px-36'
          >
            <h2>Debat & foredrag</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
