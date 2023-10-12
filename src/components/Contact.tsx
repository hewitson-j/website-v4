import emailjs from "emailjs-com";
import "./Contact.css";
import { FormEvent, useState } from "react";
import EmailDialogue from "./EmailDialogue";

emailjs.init("service_usm4a2p");

export default function Contact() {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Send Email");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setButtonText("Sending...");

    const formElement = event.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_usm4a2p",
        "template_x97mtcn",
        formElement,
        "MzC34H6jATWVbmly-"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setOpenDialogue(true);
          setMessage("Email sent successfully!");
          setBackgroundColor("#78fa85");
          setFontColor("#17661f");
          setButtonText("Send Email");

          setTimeout(() => {
            setOpenDialogue(false);
          }, 5000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setOpenDialogue(true);
          setMessage("Oops, something went wrong");
          setBackgroundColor("#d18282");
          setFontColor("#991212");
          setError(`Error: ${error}`);
          setButtonText("Send Email");

          setTimeout(() => {
            setOpenDialogue(false);
          }, 5000);
        }
      );
    formElement.reset();
  };

  return (
    <>
      <h1>Contact</h1>
      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <input
            id="from_name"
            name="from_name"
            className="form-fields"
            type="text"
            required
            placeholder="Name (Required)"
          />
          <br />
          <input
            id="email"
            name="email"
            className="form-fields"
            type="text"
            required
            placeholder="Your Email (Required)"
          />
          <br />
          <input
            id="subject"
            name="subject"
            className="form-fields"
            type="text"
            placeholder="Subject"
          />
          <br />
          <textarea
            id="message"
            name="message"
            className="form-fields"
            required
            placeholder="Message (Required)"
          />
          <br />
          <input type="submit" id="button" value={buttonText} />
        </form>
        <br />
        <br />
        {openDialogue && (
          <EmailDialogue
            message={message}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            error={error}
          />
        )}
      </div>
    </>
  );
}
