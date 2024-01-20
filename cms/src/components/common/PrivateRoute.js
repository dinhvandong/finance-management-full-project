import { isAuthenticated } from '../../utils/localStorage';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component,...rest }) => {
   const navigate = useNavigate();
  const handleRedirect = () => {
    console.log("handleRedirect")
    navigate('/login');
  };
 
  useEffect(() => {
    if (!isAuthenticated) {
     handleRedirect();
    }
  }, [isAuthenticated]);

  return (
    isAuthenticated ? (
      <Component/>
    ) :
      (
        <>
        </>
      )
  );
};

export default PrivateRoute;