"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import {
  IconArrowLeft,
  IconLink,
  IconFileTypeDoc,
  IconSchema,
  IconRouter,
  IconHome,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "./components/ui/lib/utils";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import myImage from '../public/me.jpg'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

    const links = [
        {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Documentation",
      href: "/Document",
      icon: (
        <IconFileTypeDoc className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Add Devices",
      href: "/Devices",
      icon: (
        <IconRouter className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
        {
      label: "Add Links",
      href: "/Links",
      icon: (
        <IconLink className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Topology",
      href: "/Topology",
      icon: (
        <IconSchema className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

  
    <div
      className={cn(
        " flex w-screen    flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Developer",
                href: "https://www.derradjiamine.me",
                icon: (   
                  <Image
                    src={myImage}
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
                
                
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
       <div className="flex flex-1">
      <div className="flex  flex-1 flex-col h-full w-full gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10  ">
        
        {children}
          
        </div>
      </div>
     
    </div>




      </body>
    </html>
  );
}

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-route"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" /><path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" /></svg>
      <p className="flex items-center font-bold font-serif   justify-start gap-2  group/sidebar py-2">SDN Project</p>
    </a>
  );
};
 
// Dummy dashboard component with content

export const Logo = () => {
  return (
    <a
      
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-route"/>
      <motion.span
        
        className="font-medium whitespace-pre text-black "
      >
        SDN Project
      </motion.span>
    </a>
  );
};
