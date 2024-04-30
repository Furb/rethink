import Casegrid from "../components/cards/Casegrid";
import React from "react";

const cases = async () => {
  return (
    <main className='page-wrap'>
      <div className='custom-space col-span-full'>
        <h1 className='text-primary'>
          Events med grønne <br /> kvalitative løsninger
        </h1>
      </div>
      <div className='col-start-2 col-span-7 custom-space'>
        <Casegrid limit={12} orderBy={"_createdAt desc"} />
      </div>
    </main>
  );
};

export default cases;
