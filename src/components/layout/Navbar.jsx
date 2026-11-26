"use client";
import { IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "@/hooks/useDarkSide";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const isDark = colorTheme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      {isMounted ? (
        <DarkModeSwitch checked={isDark} onChange={toggleDarkMode} size={30} />
      ) : (
        <span aria-hidden="true" className="inline-block h-[30px] w-[30px]" />
      )}
      <div className="flex gap-5">
        <div className="flex flex-col items-end">
          <span className="font-black text-stone-700 text-lg">Welcome</span>
          <span className="text-lg text-stone-700">user</span>
        </div>
        <div className="bg-stone-200 w-11 h-11 flex justify-center items-center rounded-full text-stone-600">
          <IconUser />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
