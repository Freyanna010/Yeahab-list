import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { LoaderPage } from '@/shared/ui/LoaderPage';
import { ROUTE_PATH } from '@/shared/config/router';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainLayout } from '@/app/layuots/MainLayout';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { QuestionDetailsPage } from '@/pages/QuestionDetailsPage';

export const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<LoaderPage />}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: ROUTE_PATH.questions,
          element: <QuestionsPage />,
        },
        {
          path: ROUTE_PATH.question_details,
          element: <QuestionDetailsPage />,
        },
      ],
    },
    {
      path: ROUTE_PATH.not_found,
      element: (
        <Suspense fallback={<LoaderPage />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ],
  {
    basename: '/',
  }
);
