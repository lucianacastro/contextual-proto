'use client'
import { Drawer } from "antd";
import { useState } from "react";

const ContextualHelper = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [uri, setUri] = useState<string>();

  return (
    <>
    <button onClick={()=>setIsOpen(true)}>Ayuda</button>
    <Drawer open={isOpen} onClose={()=> setIsOpen(false)}>
      <iframe src='/contextual-help'/>
    </Drawer>
    </>
  )
}

export default ContextualHelper;