"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import {
  IconBrandTabler,
  IconCirclePlus,
  IconTargetArrow,
  IconUserBolt,
} from "@tabler/icons-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import ProfileEditor from "./ProfileEditor";
import TakeQuiz from "./TakeQuiz";
import CreateQuiz from "./CreateQuiz";

const UserDetail = () => {
  return (
    <div>
      <div className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        user email
      </div>
      <div className="text-sm text-gray-500 dark:text-neutral-400">
        user name
      </div>
    </div>
  );
};

const Dashboard = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/custom",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Take Quiz",
      href: "#",
      icon: (
        <IconTargetArrow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Create Quiz",
      href: "#",
      icon: (
        <IconCirclePlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [openUserDetail, setOpenUserDetail] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [openTakeQuiz, setOpenTakeQuiz] = useState(false);
  const [openCreateQuiz, setOpenCreateQuiz] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = (index: number) => {
    console.log("handleClick");

    if (index == 0) {
      setOpenUserDetail(true);
      setOpenProfile(false);
      setOpenTakeQuiz(false);
      setOpenCreateQuiz(false);
    } else if (index == 1) {
      setOpenProfile(true);
      setOpenCreateQuiz(false);
      setOpenTakeQuiz(false);
      setOpenUserDetail(false)
    } else if (index == 2) {
      setOpenTakeQuiz(true);
      setOpenProfile(false);
      setOpenCreateQuiz(false);
      setOpenUserDetail(false)
    } else if (index == 3) {
      setOpenCreateQuiz(true);
      setOpenProfile(false);
      setOpenTakeQuiz(false);
      setOpenUserDetail(false)
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  handleClick={() => handleClick(idx)}
                />
              ))}
            </div>
          </div>
          <div>
            <LogoutLink>Log out</LogoutLink>
          </div>
        </SidebarBody>
      </Sidebar>
      {openUserDetail ? <UserDetail /> : null}
      {openProfile ? <ProfileEditor /> : null}
      {openTakeQuiz ? <TakeQuiz /> : null}
      {openCreateQuiz ? <CreateQuiz /> : null}
    </div>
  );
};

export default Dashboard;
