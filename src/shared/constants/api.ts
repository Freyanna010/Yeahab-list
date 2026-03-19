export const API_BASE_URL = 'https://api.yeatwork.ru' as const;

export const questionApiUrls = {
  getQuestionsList: 'questions/public-questions',
  getQuestionById: 'questions/public-questions/:questionId',
  getSkills: '/skills',
  getSpecializations: '/specializations',
} as const;

export const API_TAGS = {
  Questions: 'Questions',
} as const;
