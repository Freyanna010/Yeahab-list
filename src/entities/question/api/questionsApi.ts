import { baseApi } from '@/shared/config/query';
import { questionApiUrls } from '@/shared/constants';

import type { Question, QuestionsResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<
      QuestionsResponse,
      { page?: number; limit?: number; titleOrDescription?: string }
    >({
      query: ({ page = 1, limit = 10, titleOrDescription }) => ({
        url: questionApiUrls.getQuestionsList,
        params: { page, limit, titleOrDescription },
      }),
      providesTags: ['Questions'],
    }),

    getQuestionById: build.query<Question, number>({
      query: (questionId) => ({
        url: questionApiUrls.getQuestionById.replace(
          ':questionId',
          String(questionId)
        ),
      }),
      providesTags: ['Questions'],
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
