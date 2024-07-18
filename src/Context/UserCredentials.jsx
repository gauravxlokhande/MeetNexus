/*
  Developed By: Gaurav Lokhande
  Email: gaurravlokhande@gmail.com
  Linkedin: https://www.linkedin.com/in/gauravlokhande
  Github: https://github.com/gauravxlokhande
  Trailhead: https://www.salesforce.com/trailblazer/gauravlokhande
  Instagram: gauravxlokhande
   */



import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    );
};

export default UserContext;