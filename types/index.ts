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
  subtitle: string | null;
  authorId: string;
  date: string | null;
  slug: string;
  category: string;
  tag: string[];
  status: string;
  thumbnailUrl: string | null;
  id: string;
}

interface BoardCategory {
  idx: number;
  name: string;
  priority: number;
  serviceYn: boolean;
}

export interface Content {
  boardIdx: number;
  boardName: string | null;
  postIdx: number;
  writer: number;
  password: string;
  postTitle: string;
  createYmdt: string;
  updateYmdt: string | null;
  serviceYn: boolean;
  replyYn: number;
  postType: string;
  seriesIdx: number;
  seriesOrder: number;
  contents: string;
  thumbnail: string;
}

export interface ContentResultData {
  boardIdx: number;
  boardPriority: number;
  manager: number;
  serviceYn: boolean;
  boardName: string;
  boardType: string;
  createYmdt: string;
  updateYmdt: string;
  category: BoardCategory;
  postList: Content[];
}

export interface ContentResponse {
  code: number;
  message: string | null;
  resultData: ContentResultData;
}
