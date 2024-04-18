import CaseCard from "./CaseCard";

const Casegrid = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-8 2xl:gap-24 custom-space cards'>
      <CaseCard />
      <CaseCard />
    </div>
  );
};

export default Casegrid;
