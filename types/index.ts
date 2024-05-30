export interface Posts {
  id: number;
  description: string;
  title: string;
}

export interface HANTEO_MAMBER {
  id: number;
  name: string;
  role: string;
  department: string;
  stack: string[];
  residence: string;
  dateOfEmployment: string;
  info: string;
  linkedIn: string;
  email: string;
  gmail: string;
  github: string;
  phone: string;
  likeFood: string[];
}

export interface TABS {
  id: number;
  name: string;
  active: boolean;
  href: string;
}

export interface Tech {
  _id: string;
  title: string;
  subtitle: string;
  authorId: string;
  date: string | null;
  slug: string;
  category: string;
  tag: string[];
  status: string;
  thumbnailUrl: string | null;
}
