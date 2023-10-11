import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const errorMessage = useRouteError();
  console.log(errorMessage);

  return (
    <>
      <h1>Error!</h1>
      <p>Something went wrong. Please try again.</p>
      <p>
        <i>{errorMessage.statusText || errorMessage.message}</i>
      </p>
    </>
  );
}
