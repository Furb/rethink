import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Ydelse } from "../../utils/interface";

interface YdelseExcpertProps {
  ydelse: Ydelse;
}

const YdelseExcpert = ({ ydelse }: YdelseExcpertProps) => {
  return (
    <div className='custom-space-small'>
      <Link
        href={`/ydelser/${ydelse?.slug?.current}`}
        className='flex group items-center gap-x-8 2xl:gap-x-14 gap-y-4 hover:gap-y-8'
      >
        {" "}
        <h2 className='group-hover:text-primary'>{ydelse?.title}</h2>
        <ArrowRightIcon className='h-8 group-hover:text-primary' />
      </Link>

      <h3 className='mr-4 mt-4 md:mt-8 max-w-2xl'>{ydelse?.excerpt}</h3>
    </div>
  );
};

export default YdelseExcpert;
