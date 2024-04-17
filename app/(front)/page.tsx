import Link from "next/link";
import Casegrid from "../components/cards/Casegrid";

export default function Home() {
  return (
    <main className='wrap'>
      <div className='mb-12'>
        <p className='tema'>Rethink Event - </p>
        <h1>People, Planet, Profit</h1>
      </div>
      <div className='image h-[60vh] custom-space md:mb-36 rounded-xl bg-primary'></div>
      <Casegrid />
      <section className='grid grid-cols-1 md:grid-cols-8 gap-16 custom-space'>
        <h2 className='md:col-span-5 2xl:col-span-6'>
          Vi er et eventbureau, som arbejder for at skabe events, der gør en
          positiv forskel i verden. Relationelt. Miljømæssigt. Økonomisk.
          <br />
          <br />
          Med en praktisk tilgang forvandler vi fremtidens nødvendigheder til
          dagens handlinger og bidrager til et bedre i morgen.
        </h2>
        <div className='min-h-96 w-96 rounded-xl bg-primary'></div>
      </section>
      <section className='bg-light rounded-xl py-48 wrap custom-space'>
        <h4 className='font-normal'>Vores ekspertise er</h4>
        <p className='h1 custom-space text-primary'>Events med varig værdi</p>
        <div className='container'>
          <Link
            href='#'
            className='block py-8 px-24 border-b border-primary hover:text-light hover:bg-primary hover:px-56'
          >
            <h2>Eventrådgivning</h2>
          </Link>
          <Link
            href='#'
            className='block py-8 px-24 border-b border-primary hover:text-light hover:bg-primary hover:px-56'
          >
            <h2>Eventmanagement</h2>
          </Link>
          <Link
            href='#'
            className='block py-8 px-24 border-b border-primary hover:text-light hover:bg-primary hover:px-56'
          >
            <h2>Undervisning & facilitering</h2>
          </Link>
          <Link
            href='#'
            className='block py-8 px-24 border-b border-primary hover:text-light hover:bg-primary hover:px-56'
          >
            <h2>Debat & foredrag</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
