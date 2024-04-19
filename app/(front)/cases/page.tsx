import Casegrid from "../components/cards/Casegrid";

import React from "react";

const cases = async () => {
  return (
    <main className='wrap md:grid grid-cols-8'>
      <div className='mb-12 col-span-full'>
        <p className='tema text-primary max-w-2xl'>
          Bæredygtige, grønne forandringer i jeres organisation
        </p>
      </div>
      <div className='col-start-2 col-span-7 custom-space'>
        <Casegrid />
      </div>
    </main>
  );
};

export default cases;
