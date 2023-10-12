import emailjs from "emailjs-com";
import "./Contact.css";
import { Box, Button, TextField } from "@mui/material";

export default function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <div className="form-body">
        <h3>Fill out the form and stay in contact with me!</h3>
        <Box
          component="form"
          sx={{
            width: "90%",
            height: "80%",
            backgroundColor: "white",
            padding: "1rem",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <TextField required label="Name" fullWidth className="form-fields" />
          <TextField
            required
            label="Your Email"
            fullWidth
            className="form-fields"
          />
          <TextField
            label="Type of Enquiry"
            fullWidth
            className="form-fields"
          />
          <TextField
            required
            label="Message"
            rows={5}
            multiline
            fullWidth
            className="form-fields"
          />
          <Button variant="contained" className="form-fields">
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
}
