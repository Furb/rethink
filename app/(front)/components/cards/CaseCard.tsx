"use client";

import Link from "next/link";
import Image from "next/image";
import { Case } from "../../utils/interface";
import { urlForImage } from "@/sanity/lib/image";

interface CaseCardProps {
  case: Case;
}

const CaseCard = ({ case: caseData }: CaseCardProps) => {
  return (
    <Link href={`/cases/${caseData?.slug?.current}`}>
      <div className='hidden h-[400px] relative rounded-xl mb-8'></div>
      <div className='bg-light rounded-xl py-8 px-8 hover:bg-primary hover:text-white'>
        <h4 className='mb-2'>{caseData?.title}</h4>
        <p className='max-w-3xl'>{caseData?.undertitle}</p>
      </div>
    </Link>
  );
};

export default CaseCard;
