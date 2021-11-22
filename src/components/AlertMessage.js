import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant, children, style = {} }) => {
  return (
    <Alert variant={variant} style={style}>
      {children}
    </Alert>
  );
};

AlertMessage.defaultProps = {
  variant: "danger",
};

export default AlertMessage;
