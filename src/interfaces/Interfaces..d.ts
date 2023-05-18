interface QuestionsType {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
}
interface typeData {
  qnumber: number;
  category: string;
  difficulty: string;
}
interface ContextGlobal {
  waiting: boolean;
  modalOpen: boolean;
  loading: boolean;
  questions: QuestionsType[];
  index: number;
  correct: number;
  nextQuestion: () => void;
  checkAnswer(value: boolean): void;
  openModal: () => void;
  error: boolean;
  handleSubmiting: (data: typeData) => void;
  closeModal: () => void;
}

interface FieldError {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}
interface ErrorsType {
  qnumber: FieldError;
  category: FieldError;
  difficulty: FieldError;
}

interface ListType {
  name: string;
  id: number;
}
