'use client'
import Link from "next/link";
import { useContext } from "react";
import { ShipmentContext } from "@/app/context/ShipmentContext";

export default function Page() {
  const shipment = useContext(ShipmentContext);
  return (
    
      <div>
        Shipment ({shipment.status}/{shipment.sla})
        <Link href='contextual-help/shipment'></Link>
      </div>
    
  )
}
