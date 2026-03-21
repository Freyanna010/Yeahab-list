import { baseApi } from '@/shared/config/query';
import { questionApiUrls } from '@/shared/constants';

import type { Question, QuestionsResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<
      QuestionsResponse,
      {
        page?: number;
        limit?: number;
        titleOrDescription?: string;
        skills?: string[];
        skillFilterMode?: 'ALL' | 'ANY';
        specializationId?: number;
        complexity?: number[];
        rate?: number;
      }
    >({
      query: ({
        page = 1,
        limit = 10,
        titleOrDescription,
        skills,
        skillFilterMode = 'ALL',
        specializationId,
        complexity,
        rate,
      }) => ({
        url: questionApiUrls.getQuestionsList,
        params: {
          page,
          limit,
          titleOrDescription,
          skills: skills?.join(','),
          skillFilterMode,
          specializationId,
          rate,
          complexity: complexity?.join(','),
        },
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
