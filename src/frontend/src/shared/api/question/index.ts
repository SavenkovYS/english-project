import instance from '@/shared/api/instance/instance';

export function fetchQuestions() {
  return instance.get('question/get-questions');
}
