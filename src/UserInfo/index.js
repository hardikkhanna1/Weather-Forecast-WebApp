import { createContext, useContext, useState } from 'react';
const UserContext = createContext();

export const UserInfoProvider = ({ children }) => {
    const [userInfo, setuserInfo] = useState(null);

    return (
      <UserContext.Provider value={{ userInfo ,setuserInfo}}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useInfo = () => {
    return useContext(UserContext);
  };