import axios from 'axios';
import { createContext, useState, ReactNode } from 'react';
const API_ENDPOINT = 'https://opentdb.com/api.php?';

interface Props {
  children: ReactNode;
}

const AppContext = createContext({} as ContextGlobal);

const AppProvider = ({ children }: Props) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchQuestions = async (url: string) => {
    setloading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      console.log(data);

      if (data.length > 0) {
        setQuestions(data);
        setloading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setModalOpen(false);
  };

  const checkAnswer = (value: boolean) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };
  const handleSubmiting = (data: typeData) => {
    console.log(data.qnumber);
    console.log(data.category);
    console.log(data.difficulty);
    const url = `${API_ENDPOINT}amount=${data.qnumber}&category=${
      data.category
    }&difficulty=${data.difficulty.toLowerCase()}&type=multiple&token=9b5da807b2fca691111a4124177f8d421aab6805546aab1bfed88de3cd9e4c84`;
    fetchQuestions(url);
  };
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        modalOpen,
        checkAnswer,
        handleSubmiting,
        closeModal,
        nextQuestion,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
