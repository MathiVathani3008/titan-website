import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addressData, setAddressData] = useState(null);

  return (
    <AddressContext.Provider value={{ addressData, setAddressData }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
export { AddressContext }; 

