"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table"


import DialogButtonDev from "../components/dialog-button-device";
import { useEffect, useState } from "react";



export default  function page() {

  const [devices, setDevices] = useState([])

useEffect(() => {

  async function getDevices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Devices`, {
      cache : "no-store"
    });

    
  const Devices = await res.json();

  
  

  setDevices(Devices);

}

getDevices();



const interval = setInterval(getDevices, 1000);
    return () => clearInterval(interval);
}, [])
  return (
    <div className="w-full h-full pt-20  ">
      <DialogButtonDev text={"Add Device"}/>
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Device Name</TableHead>
          <TableHead className="text-center">Current-State</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {devices.map((device) => (
          <TableRow key={device.id}>
            <TableCell className="font-medium text-center w-[40%]">{device.id}</TableCell>
            <TableCell className="text-center w-10">{device.label}</TableCell>
            
            
          </TableRow>
        ))}
      </TableBody>

    </Table>
    </div>
  )
}
