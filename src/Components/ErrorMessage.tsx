
const ErrorMessage = ({message="Something went wrong"}) => {
    return (
      <div data-testid="ErrorMessageId">{message}</div>
    )
  }
  
  export default ErrorMessage