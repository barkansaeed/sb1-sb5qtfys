export type ProjectCategory = 'simple' | 'medium' | 'complex';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  createdAt: Date;
  updatedAt: Date;
}