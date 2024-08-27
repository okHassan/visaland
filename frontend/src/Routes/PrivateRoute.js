import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ element, login }) => {
  return login ? element : <Navigate to="/" replace />;
};

export default PrivateRouter;
