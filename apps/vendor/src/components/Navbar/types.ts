import { Dispatch, SetStateAction } from "react";

export type LanguageOptionT = {
  flag: string | any;
  label: string;
  key: string;
};

export type LanguageOptionsT = {
  languageOptions: LanguageOptionT[];
};

export type ThemeSwitchT = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
