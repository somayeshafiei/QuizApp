import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../hooks/useGlobalContext';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};
const BasicModal = () => {
  const { correct, questions, closeModal, modalOpen } = useGlobalContext();
  const corrextPercent = (correct / questions.length) * 100;
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`congrate!  You answered ${corrextPercent.toFixed(
              0
            )}% of questions correctly`}
          </Typography>
          <Button
            onClick={closeModal}
            sx={{
              width: '100%',
              mt: '20px',
              p: '5px',
              backgroundColor: 'green',
              borderRadius: '10px',
              border: '1px solid black',
              color: 'gray',
            }}
          >
            Play again
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
