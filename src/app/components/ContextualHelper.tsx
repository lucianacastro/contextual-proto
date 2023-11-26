'use client'
import { Drawer } from "antd";
import { useState } from "react";

const ContextualHelper = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <>
    <button onClick={()=>setIsOpen(true)}>Ayuda</button>
    <Drawer open={isOpen} onClose={()=> setIsOpen(false)}>
      Contextual helper
    </Drawer>
    </>
  )
}

export default ContextualHelper;