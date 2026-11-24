"use client";

import { useState } from "react";
import { MenuSidebar } from "./MenuSidebar";
import {
  IconUserSquare,
  IconUser,
  IconChevronLeftPipe,
  IconChevronRightPipe,
  IconFileInvoice,
  IconScale,
  IconClipboard,
  IconBriefcase,
  IconUserKey,
} from "@tabler/icons-react";

const Sidebar = () => {
  const menu = [
    {
      group: "Menu",
      submenu: [
        { label: "Employee", icon: <IconUserSquare />, link: "/" },
        { label: "Documents", icon: <IconFileInvoice />, link: "/" },
        { label: "Rule", icon: <IconScale />, link: "/" },
        { label: "Inventory", icon: <IconClipboard />, link: "/" },
      ],
    },
    {
      group: "Master",
      submenu: [
        { label: "user", icon: <IconUser />, link: "/" },
        { label: "User Role", icon: <IconUserKey />, link: "/" },
        { label: "Department", icon: <IconBriefcase />, link: "/" },
      ],
    },
  ];
  const version = "1.0";
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <div
        className={`${isCollapse ? "min-w-20" : "min-w-60"} ease-in-out transition-all `}></div>
      <div
        className={`bg-white p-4 fixed h-full flex flex-col justify-between ease-in-out transition-all 
        ${isCollapse ? "min-w-20 items-center" : "min-w-60"}
        `}>
        <div>
          <div className={`pb-8 ${isCollapse && "text-center"}`}>
            <h1 className="font-black text-lg text-stone-900">
              {isCollapse ? "B" : "Balistars Archive"}
            </h1>
            <p className="text-xs text-stone-400">
              {isCollapse ? version : `Version ${version}`}
            </p>
          </div>

          {menu.map((e) => {
            const sub = e.submenu;
            return (
              <MenuSidebar
                key={e.group}
                menuGroup={e.group}
                submenu={sub}
                isCollapse={isCollapse}
              />
            );
          })}
        </div>

        <button
          onClick={() => {
            setIsCollapse(!isCollapse);
          }}
          className={`flex w-full border-t border-stone-200 pt-2 items-center ${isCollapse ? "justify-center" : "justify-between"}`}>
          <span className={`${isCollapse && "hidden"}`}>collapse</span>
          {isCollapse ? <IconChevronRightPipe /> : <IconChevronLeftPipe />}
        </button>
      </div>
    </>
  );
};

export { Sidebar };
