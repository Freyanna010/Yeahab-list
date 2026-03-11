export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface SkillsResponse {
  total: number;
  page: number;
  limit: number;
  data: Skill[];
}
