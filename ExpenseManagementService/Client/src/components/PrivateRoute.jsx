import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    
    return user ? children : <Navigate to="/login" repace />;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;