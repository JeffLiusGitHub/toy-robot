import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { setClose } from '../store/InfoSlice';
import { useSelector, useDispatch } from 'react-redux';
const Snackbars = props => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.info.error);
  const command = useSelector(state=>state.info.command);
  const open = useSelector(state=>state.info.isOpen)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setClose());
  };

  // export const setSnackBarCommand=(dispatch,info)=>{
  //   dispatch(setOpen())
  //   dispatch(setCommand({command:info}))
  // }
  
  // export const setSnackBarError=(dispatch,info)=>{
  //   dispatch(setOpen())
  //   dispatch(setError({ error:info}))
  // }
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert severity={error} sx={{ width: '100%' }}>
        {props.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Snackbars;
