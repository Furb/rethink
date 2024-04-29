import { client } from "@/sanity/lib/client";
import { Case } from "../../utils/interface";
import { PortableText } from "@portabletext/react";

interface Params {
  params: {
    slug: string;
  };
}

const getCase = async (slug: string) => {
  const query = `*[_type == "cases" && slug.current == "${slug}"][0]{title, slug, undertitle, formaal, loesning, resultat,kategorier, featuredImage, mainImage}`;

  const caseItem = await client.fetch(query);
  return caseItem;
};

const singleCase = async ({ params }: Params) => {
  const caseItem: Case = await getCase(params?.slug);

  return (
    <main className='container'>
      <div>
        <p className='text-primary'>{caseItem?.title}</p>
        <h2 className='mb-16'>{caseItem?.undertitle}</h2>
      </div>

      <section className='lg:grid grid-cols-12'>
        <div className='col-start-3 col-span-9 custom-space space-y-16 lg:space-y-24 2xl:space-y-32'>
          <div className='lg:flex justify-between gap-8'>
            <div className='h4 mb-4'>Formål</div>
            <div className='richText'>
              <PortableText value={caseItem?.formaal || []} />
            </div>
          </div>
          <div className='lg:flex justify-between gap-8'>
            <div className='h4 mb-4'>Løsning</div>
            <div className='richText'>
              <PortableText value={caseItem?.loesning || []} />
            </div>
          </div>
          <div className='lg:flex justify-between gap-8'>
            <div className='h4 mb-4'>Resultat</div>
            <div className='richText'>
              <PortableText value={caseItem?.loesning || []} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default singleCase;
