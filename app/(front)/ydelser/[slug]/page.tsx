import { client } from "@/sanity/lib/client";
import { Ydelse } from "../../utils/interface";
import { PortableText } from "@portabletext/react";

interface Params {
  params: {
    slug: string;
  };
}

const getYdelse = async (slug: string) => {
  const query = `*[_type == "ydelser" && slug.current == "${slug}"][0]{title, slug, body, undertitle}`;

  const ydelse = await client.fetch(query);
  return ydelse;
};

const singleYdelse = async ({ params }: Params) => {
  const ydelse: Ydelse = await getYdelse(params?.slug);
  

  return (
    <main className='wrap'>
      <div className='flex items-center justify-center h-[60vh]'>
        <h1>{ydelse?.title}</h1>
      </div>

      <section className='richText container max-w-3xl custom-space'>
        <h2 className='mb-16'>{ydelse?.undertitle}</h2>
        <PortableText value={ydelse?.body} />
      </section>
    </main>
  );
};

export default singleYdelse;
