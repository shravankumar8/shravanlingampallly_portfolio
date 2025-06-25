"use client"

import Navbar from "@/components/navbar"
import Portfolio from "../portfolio"
import { useEffect } from "react";
 useEffect(() => {
   document.body.removeAttribute("cz-shortcut-listen"); // Adjust for other attributes if needed
 }, []);
export default function Page() {
 
  return <div>
    < Navbar />
    <Portfolio />
  </div>
}
