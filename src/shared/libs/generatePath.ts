import { generatePath } from 'react-router-dom';

import { ROUTE_PATH } from '../config/router';

export const getQuestionDetailsPath = (id: number | string) =>
  generatePath(ROUTE_PATH.question_details, { id: String(id) });
