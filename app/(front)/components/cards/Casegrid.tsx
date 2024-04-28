import CaseCard from "./CaseCard";
import { client } from "@/sanity/lib/client";
import { Case } from "../../utils/interface";

const getCases = async (limit = 12, orderBy = "_createdAt desc") => {
  const query = `*[_type == "cases"] | order(${orderBy}) [0...${limit}]{_id, title, slug, undertitle, mainImage}`;
  const data = await client.fetch(query);
  return data;
};

export const revalidate = 60;

const Casegrid = async ({
  limit,
  orderBy,
}: {
  limit: number;
  orderBy: string;
}) => {
  const cases: Case[] = await getCases(limit, orderBy);

  return (
    <section className='casegrid grid sm:grid-cols-2 gap-4 md:gap-8 2xl:gap-24 custom-space cards'>
      {cases?.length > 0 &&
        cases?.map((caseItem) => (
          <CaseCard case={caseItem} key={caseItem._id} />
        ))}
    </section>
  );
};

export default Casegrid;
