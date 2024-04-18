import { Ydelse } from "@/app/(front)/utils/interface";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface YdelseExcpertProps {
  ydelse: Ydelse;
}

const YdelseExcpert = ({ ydelse }: YdelseExcpertProps) => {
  return (
    <div className='custom-space-small'>
      <Link
        href='/ydelse/${ydelse?.slug?.current}'
        className='flex items-center group gap-4 hover:gap-8'
      >
        {" "}
        <h2 className='mb-4 2xl:mb-14 group-hover:text-primary'>
          {ydelse?.title}
        </h2>
        <ArrowRightIcon className='h-8 mb-2 group-hover:text-primary' />
      </Link>

      <h3 className='mr-4'>{ydelse?.excerpt}</h3>
    </div>
  );
};

export default YdelseExcpert;
