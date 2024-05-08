import { useNavigate } from "react-router-dom";
import './ErrorPage.css'

interface ErrorPageProps {
  title: string
  message: string
}

export default function ErrorPage({
    title='Error!', 
    message='Something went wrong. Please click the button below to be redirected home.'}
    : ErrorPageProps) {
  const navigate = useNavigate()
  
  return (
    <div className="error-page">
      <h1>{title}</h1>
      <p>{message}</p>
      <button onClick={() => {
        navigate('/')
      }}
      className="buttons">Back to Home</button>
    </div>
  );
}
