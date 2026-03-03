"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";

import DialogButton from "../components/dialog-button";
import { useEffect, useState } from "react";










export default function page() {

  const [links, setLinks] = useState([]);


  useEffect(() => {

    async function getLinks() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Links`);

      const data = await res.json();

      setLinks(data);
    }

    getLinks();

    const interval = setInterval(getLinks, 1000);
    return () => clearInterval(interval);
  }, [])

 
  
  
  return (
    <div className="w-full h-full pt-20 ">

        <DialogButton text={"Add Link"}/>
        
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Links</TableHead>
          <TableHead className="text-center">source</TableHead>
          <TableHead className="text-center">destination</TableHead>
          <TableHead className="text-center">Bandwidth</TableHead>
          <TableHead className="text-center">Latency</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {links.map((link) => (
          <TableRow key={link.id}>
            <TableCell className="font-medium w-[40%]">{link.id}</TableCell>
            <TableCell className="text-center w-10">{link.source}</TableCell>
            <TableCell className="text-center">{link.target}</TableCell>
            <TableCell className="text-center w-10">{link.bw}</TableCell>
            <TableCell className="text-center">{link.lt}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>

    </Table>
    </div>
  )
}