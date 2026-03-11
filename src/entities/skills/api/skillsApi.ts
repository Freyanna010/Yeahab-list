import { baseApi } from '@/shared/config/query';
import { questionApiUrls } from '@/shared/constants';

import { type SkillsResponse } from '../model/types';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<SkillsResponse, void>({
      query: () => ({
        url: questionApiUrls.getSkills,
        params: { limit: 100 },
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
