import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "80%", md: "700px", lg: "800px" },
  bgcolor: "background.paper",
  border: "2px solid rgba(150, 150, 150, 0.277)",
  borderRadius: "3px",
  boxShadow: 24,
  p: 4,
  overflow: "visible",
};

const TypographyStyle = {
  mt: { sm: 0, md: 2 },
  fontSize: { sx: "4px", sm: "15px", md: "20px" },
};

const ModalContainer = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: { sx: "15px", sm: "30px", md: "40px" },
              fontWeight: "bold",
            }}
          >
            Details
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            The application is a simulation of a toy robot moving on a square
            tabletop, of dimensions 5 units x 5 units. There are no other
            obstructions on the table surface.
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            The first valid command to the robot is a PLACE command, after that,
            any sequence of commands may be issued, in any order, including
            another PLACE command. The application should discard all commands
            in the sequence until a valid PLACE command has been executed.
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            MOVE will move the toy robot one unit forward in the direction it is
            currently facing.
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            LEFT and RIGHT will rotate the robot 90 degrees in the specified
            direction without changing the position of the robot.
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            REPORT will announce the X,Y and orientation of the robot. A robot
            that is not on the table can choose to ignore the MOVE, LEFT, RIGHT
            and REPORT commands.
          </Typography>
          <Typography id="modal-modal-description" sx={TypographyStyle}>
            EG: PLACE 0,0,NORTH MOVE REPORT Output: 0,1,NORTH
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContainer;
