import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: any) => {
  return twMerge(clsx(inputs));
};

export const isObjectEmpty = (obj: Object | null) => {
  return Object.keys(obj ?? {}).length === 0;
};
