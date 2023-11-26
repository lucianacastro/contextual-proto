'use client'
import Link from "next/link";
import { useContext } from "react";
import ShipmentContextProvider, { ShipmentContext } from "@/app/context/ShipmentContext";

const PageContent = () => {
  const shipment = useContext(ShipmentContext);
  return (  
    <div>
      Shipment ({shipment.status}/{shipment.sla})
      <Link href='contextual-help/shipment'></Link>
    </div>
)}

export default function Page() {
  return (
    <ShipmentContextProvider>
      <PageContent />
    </ShipmentContextProvider>
  )}
