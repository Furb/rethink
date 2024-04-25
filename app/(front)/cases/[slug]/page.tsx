import { client } from "@/sanity/lib/client";
import { Case } from "../../utils/interface";
import { PortableText } from "@portabletext/react";

interface Params {
  params: {
    slug: string;
  };
}

const getCase = async (slug: string) => {
  const query = `*[_type == "cases" && slug.current == "${slug}"][0]{title, slug, undertitle}`;

  const caseItem = await client.fetch(query);
  return caseItem;
};

const singleCase = async ({ params }: Params) => {
  const caseItem: Case = await getCase(params?.slug);

  return (
    <main className='wrap'>
      <div>
        <p className='text-primary'>{caseItem?.title}</p>
      </div>

      <section className='richText max-w-3xl custom-space'>
        <h2 className='mb-16'>{caseItem?.undertitle}</h2>
        <PortableText value={caseItem?.body} />
      </section>
    </main>
  );
};

export default singleCase;
