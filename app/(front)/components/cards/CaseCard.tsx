import Link from "next/link";
import { Case } from "../../utils/interface";

interface CaseCardProps {
  case: Case;
}

const CaseCard = ({ case: caseData }: CaseCardProps) => {
  return (
    <Link href={`/case/${caseData?.slug?.current}`} className='group'>
      <div className='h-[400px] rounded-xl bg-primary mb-8'></div>
      <div>
        <h4 className='mb-2'>{caseData?.title}</h4>
        <p className='max-w-3xl'>{caseData?.excerpt}</p>
      </div>
    </Link>
  );
};

export default CaseCard;
