import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import "./DetailsModal.css";

const style = {
  position: "absolute",
  color: "black",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DetailsModalProps {
  isOpen: boolean;
  handleIsOpen: () => void;
  title: string;
  github: string;
  link?: string;
  longDescription: string;
}

export default function DetailsModal({
  isOpen,
  handleIsOpen,
  title,
  github,
  link,
  longDescription,
}: DetailsModalProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleIsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {longDescription}
            </Typography>
            <div className="modal-links">
              <a href={github} target="_blank">
                GitHub
              </a>
              {link && (
                <a href={link} target="_blank">
                  See App
                </a>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
