import CaseCard from "./CaseCard";

const Casegrid = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-8 mb-24 cards'>
      <CaseCard />
      <CaseCard />
    </div>
  );
};

export default Casegrid;
