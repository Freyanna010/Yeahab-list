import { baseApi } from '@/shared/config/query';
import { questionApiUrls } from '@/shared/constants';

import type { SpecializationsResponse } from '../model/types';

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<SpecializationsResponse, void>({
      query: () => ({
        url: questionApiUrls.getSpecializations,
        params: { limit: 100 },
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
