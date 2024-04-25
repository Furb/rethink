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
    <Link href={`/case/${caseData?.slug?.current}`}>
      <div className='h-[400px] relative rounded-xl mb-8'></div>
      <div>
        <h4 className='mb-2'>{caseData?.title}</h4>
        <p className='max-w-3xl'>{caseData?.undertitle}</p>
      </div>
    </Link>
  );
};

export default CaseCard;
