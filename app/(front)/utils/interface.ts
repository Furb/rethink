export interface Ydelse {
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  image: {
    alt: string;
  };
  undertitle: string;
  body: any;
  _id: string;
}

export interface Case {
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  image: {
    alt: string;
  };

  kategorier: Array<Kategori>;
  undertitle: string;
  body: any;
  _id: string;
}

export interface Kategori {
  title: string;
  slug: { current: string };
  _id: string;
}
