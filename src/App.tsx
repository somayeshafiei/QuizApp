import Container from '@mui/material/Container';
import SetupQuiz from './pages/SetupQuiz';
import { useGlobalContext } from './hooks/useGlobalContext';
import { Box, Button, Typography } from '@mui/material';
import BasicModal from './components/Modal';

export default function App() {
  const {
    waiting,
    modalOpen,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupQuiz />;
  }
  if (modalOpen) {
    <BasicModal />;
  }
  const questionObject = questions[index];
  const question = questionObject ? questionObject.question : '';
  const incorrect_answer = questionObject
    ? questionObject.incorrect_answers
    : [];
  const correct_answer = questionObject ? questionObject.correct_answer : '';
  const answers = [...incorrect_answer, correct_answer].sort();

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          height: '100%',
          width: '100%',
          p: '2rem',
          px: '12rem',
          backgroundColor: '#f4f4f4',
          borderRadius: '20px',
        }}
      >
        <Box
          sx={{
            zIndex: '20',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '3rem',
            width: '100%',
          }}
        >
          <Typography
            component="p"
            sx={{
              alignSelf: 'end',
              color: 'green',
              fontStyle: 'bold',
              fontSize: '14px',
            }}
          >
            {`Correct answer: ${correct}/${index}`}
          </Typography>
          <Typography component="article">
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontStyle: 'bold',
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              dangerouslySetInnerHTML={{ __html: question }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '1.2rem',
                pt: '1.5rem',
              }}
            >
              {answers.map((answer, index) => {
                return (
                  <Button
                    key={index}
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '10px',
                      backgroundColor: 'pink',
                      color: 'black',
                      border: '1px',
                      borderRadius: '5px',
                    }}
                    onClick={() => checkAnswer(correct_answer === answer)}
                  >
                    {answer}
                  </Button>
                );
              })}
            </Box>
          </Typography>
          <Button
            sx={{
              width: '50%',
              alignSelf: 'end',
              backgroundColor: 'gray',
              color: 'pink',
              p: '1',
              borderRadius: '15px',
            }}
            onClick={() => {
              nextQuestion();
            }}
          >
            {questions.length === index ? 'final result' : 'Next Questions'}
          </Button>
          <BasicModal />
        </Box>
      </Container>
    </>
  );
}
