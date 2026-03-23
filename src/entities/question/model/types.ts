export interface Skill {
  id: number;
  title: string;
}

export interface Specialization {
  id: number;
  title: string;
  slug: string;
}

export interface Question {
  id: number;
  title: string;
  imageSrc: string;
  slug: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  complexity: number;
  rate: number;
  questionSkills: Skill[];
  questionSpecializations: Specialization[];
  createdAt: string;
}

export interface QuestionsResponse {
  total: number;
  page: number;
  limit: number;
  data: Question[];
}
