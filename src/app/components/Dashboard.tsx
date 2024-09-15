"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import {
  IconBrandTabler,
  IconCirclePlus,
  IconTargetArrow,
  IconUserBolt,
} from "@tabler/icons-react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


function Dashboard() {


    const links = [
        {
          label: "Dashboard",
          href: "#",
          icon: (
            <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Profile",
          href: "/custom/profile",
          icon: (
            <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Take Quiz",
          href: "/custom/takequiz",
          icon: (
            <IconTargetArrow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Create Quiz",
          href: "/custom/createquiz",
          icon: (
            <IconCirclePlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        }
        
      ];

      const [open, setOpen] = useState(false);


  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
          <LogoutLink>Log out</LogoutLink>
            
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export default Dashboard