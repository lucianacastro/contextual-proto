
import React, { createContext } from "react";

export type ShipmentContext = {status: string, sla: string}

export const ShipmentContext = createContext({status: 'tracked', sla: '30/12/2023'});

const ShipmentContextProvider = ({children}: {children: React.ReactNode})=> {
  const value:ShipmentContext = {status: 'pepo', sla: '30/12/2023'};
  
  const params = new URLSearchParams(window.parent.document.location.search);
  const param =  params.get("shipmentId");

  console.log('param', param)


  return (
  <ShipmentContext.Provider value={value}>
    {children}
  </ShipmentContext.Provider>
)}

export default ShipmentContextProvider;