import { Switch } from "antd";
import React from "react";
import { ThemeSwitchT } from "./types";

const ThemeSwitcher: React.FC<ThemeSwitchT> = ({ theme, setTheme }) => {
  const toggleTheme = (checked: boolean) => {
    if (checked) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      // document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.removeAttribute("data-theme");
    }
  };
  return (
    <div className='p-4 transition-colors'>
      <div
        className={`flex items-center rounded-full p-1 ${
          theme === "dark" ? "bg-gray-700" : "bg-yellow-400"
        } transition-colors bg-opacity-60`}
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform ${
            theme === "dark" ? "transition-colors bg-gray-700" : "bg-yellow-400"
          } transition-all`}
        />
        <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          checkedChildren='Dark'
          unCheckedChildren='Light'
          className='mx-2'
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
