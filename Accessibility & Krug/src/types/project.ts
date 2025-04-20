export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  link?: string;
}

export type ProjectCategory = 'all' | 'python' | 'javascript' | 'csharp' | 'java' | 'other'; 