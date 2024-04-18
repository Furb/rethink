import React from "react";

const CaseCard = () => {
  return (
    <picture>
      <div className='h-[400px] rounded-xl bg-primary mb-8'></div>
      <div>
        <h4 className='mb-2'>Folkemødet</h4>
        <p className='max-w-3xl'>
          Fokus på, hvordan bæredygtige initiativer og produkter kan rykke
          forbrugeres adfærd via markedsføring.
        </p>
      </div>
    </picture>
  );
};

export default CaseCard;
