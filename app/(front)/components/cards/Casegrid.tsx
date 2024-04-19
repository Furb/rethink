import CaseCard from "./CaseCard";
import { client } from "@/sanity/lib/client";
import { Case } from "../../utils/interface";

const getCases = async () => {
  const query = `*[_type == "cases"]{title, slug, excerpt}`;
  const data = await client.fetch(query);
  return data;
};

export const revalidate = 60;

const Casegrid = async () => {
  const cases: Case[] = await getCases();

  return (
    <section className='grid sm:grid-cols-2 gap-8 2xl:gap-24 custom-space cards'>
      {cases?.length > 0 &&
        cases?.map((caseItem) => (
          <CaseCard case={caseItem} key={caseItem._id} />
        ))}
    </section>
  );
};

export default Casegrid;
