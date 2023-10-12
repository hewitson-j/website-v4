interface EmailDialogueProps {
  message: string;
  backgroundColor: string;
  fontColor: string;
  error?: string;
}

export default function EmailDialogue({
  message,
  backgroundColor,
  fontColor,
  error,
}: EmailDialogueProps) {
  return (
    <>
      <div
        className="dialogue-body"
        style={{
          backgroundColor: backgroundColor,
          color: fontColor,
          width: "70%",
          height: "10%",
          textAlign: "center",
          margin: "auto",
          borderRadius: "10px",
          fontSize: "16pt",
          padding: "2rem",
          border: `2px solid ${fontColor}`,
        }}
      >
        {message}
        <br />
        {error && `Error: ${error}`}
      </div>
    </>
  );
}
