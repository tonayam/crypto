import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [userRegDetails, setUserRegDetails] = useState({
    name: ``,
    referral: ``,
    email: ``,
    gender: ``,
    password: ``,
  });
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: ``,
    password: ``,
  });

  return (
    <AppContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
        userRegDetails,
        setUserRegDetails,
        userLoginDetails,
        setUserLoginDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
