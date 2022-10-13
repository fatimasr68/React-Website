import React from "react";
import { Button } from "react-bootstrap";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-area">
      <pre className="text-danger">{error.message}</pre>
      <Button onClick={resetErrorBoundary}>دوباره تلاش کنید</Button>
    </div>
  );
};

export default ErrorFallback;
