import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setTheme(savedTheme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === null) return;

    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme ?? "light", setTheme];
}
