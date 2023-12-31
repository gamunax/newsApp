export interface News {
  articles: Articles[];
  status: string;
  totalResults: number;
}

export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface Source {
  id: string;
  name: string;
}
