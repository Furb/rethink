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
          Vi er et eventbureau, arbejder for at skabe events, der gør en positiv
          forskel i verden. Relationelt. Miljømæssigt. Økonomisk.
          <br />
          <br />
          Med en praktisk tilgang forvandler vi fremtidens nødvendigheder til
          dagens handlinger og bidrager til et bedre i morgen.
        </h2>
        <div className='min-h-96 w-96 rounded-xl bg-primary'></div>
      </section>
      <section className='bg-light rounded-xl py-48 min-h-svh'>
        <h2 className='px-48 pb-16 font-medium'>
          Med vores ekspertise skaber <br /> vi events med varig værdi
        </h2>
        <Link href='#'>
          <div className='py-8 px-48 border-b border-primary hover:text-light hover:bg-primary '>
            <h2>Eventrådgivning</h2>
          </div>
        </Link>
        <Link href='#'>
          <div className='py-8 px-48 border-b border-primary hover:text-light hover:bg-primary'>
            <h2>Eventrådgivning</h2>
          </div>
        </Link>
        <Link href='#'>
          <div className='py-8 px-48 border-b border-primary hover:text-light hover:bg-primary'>
            <h2>Eventrådgivning</h2>
          </div>
        </Link>
        <Link href='#'>
          <div className='py-8 px-48 hover:text-light hover:bg-primary'>
            <h2>Eventrådgivning</h2>
          </div>
        </Link>
      </section>
    </main>
  );
}
