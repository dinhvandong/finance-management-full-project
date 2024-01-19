// import React from 'react';
// import { Route } from 'react-router-dom';
// import { isAuthenticated } from '../../utils/localStorage';
// import { useNavigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   // Function to handle redirection
//   const handleRedirect = () => {
//     navigate('/login');
//   };
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//             <>
//             {handleRedirect()}
//             {/* Render a loading spinner or some other indicator */}
//             <div>Loading...</div>
//           </>
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;


// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;


import React, { useEffect } from 'react';
// import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
   const navigate = useNavigate();

   console.log("PrivateRoute")
  // Function to handle redirection
  const handleRedirect = () => {
    console.log("handleRedirect")
    navigate('/login');
  };
 

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
     // navigate('/');
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
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? (
    //       <Component {...props} />
    //     ) :
    //       (
    //         <>
    //           {()=>handleRedirect()}
    //           <div>Loading...</div>
    //         </>
    //       )
    //   }
    // />
  );
};

export default PrivateRoute;