import { useGetQuestionsQuery } from '@/entities/question/api/questionsApi';
import { Card } from '@/shared/ui/Card';

import classes from './QuestionsPage.module.scss';

const QuestionsPage = () => {
  // Запрашиваем первую страницу (limit по умолчанию 10)
  const { data, isLoading, error } = useGetQuestionsQuery({ page: 1 });

  if (isLoading) return <div>⏳ Грузим вопросы...</div>;

  if (error)
    return (
      <div style={{ color: 'red' }}>❌ Ошибка: {JSON.stringify(error)}</div>
    );

  return (
    <div className={classes.flex}>
      <Card>
        <div style={{ padding: '20px' }}>
          <h1>Список вопросов (Проверка API)</h1>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data?.data.map((question) => (
              <li
                key={question.id}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  listStyle: 'none',
                }}
              >
                <strong>{question.title}</strong>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  {question.description}
                </p>
              </li>
            ))}
          </ul>

          {data?.data.length === 0 && <p>Вопросов пока нет 🤷‍♂️</p>}
        </div>
      </Card>

      <Card size="small">
        <div>ddddd</div>
      </Card>
    </div>
  );
};

export default QuestionsPage;
