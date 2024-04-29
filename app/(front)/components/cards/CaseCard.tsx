"use client";

import Link from "next/link";
import Image from "next/image";
import { Case } from "../../utils/interface";
import { urlForImage } from "@/sanity/lib/image";

interface CaseCardProps {
  case: Case;
}

const CaseCard = ({ case: caseData }: CaseCardProps) => {
  const imageUrl = urlForImage(caseData?.featuredImage);
  return (
    <Link href={`/cases/${caseData?.slug?.current}`} className='card group'>
      <div className='group-hover:translate-y-3 transition-all duration-200'>
        <div className='h-[400px] bg-primary relative rounded-t-xl '>
          {caseData?.featuredImage ? (
            <Image
              src={imageUrl}
              alt={caseData?.featuredImage?.alt}
              fill
              className='rounded-t-xl object-cover'
            />
          ) : (
            <div className='placeholder'>Placeholder Image</div>
          )}
        </div>
        <div className='pt-8 pb-12 px-8 bg-white shadow-md group-hover:shadow-xl rounded-b-xl'>
          <p className='mb-2'>{caseData?.title}</p>
          <h4 className='max-w-3xl'>{caseData?.undertitle}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
