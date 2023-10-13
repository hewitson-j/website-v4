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
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: backgroundColor,
          color: fontColor,
          width: "70%",
          textAlign: "center",
          margin: "auto",
          borderRadius: "10px",
          fontSize: "16pt",
          padding: "2rem",
          border: `2px solid ${fontColor}`,
          zIndex: 999,
        }}
      >
        {message}
        <br />
        {error && `Error: ${error}`}
      </div>
    </>
  );
}
