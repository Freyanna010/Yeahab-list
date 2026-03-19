type Creator = {
  id: string;
  username: string;
};

export type Specialization = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: Creator;
};

export type SpecializationsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Specialization[];
};
