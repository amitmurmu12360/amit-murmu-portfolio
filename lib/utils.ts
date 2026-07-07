import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class lists safely, resolving conflicting utility classes.
 * Use this instead of template-string class concatenation anywhere
 * conditional classes are involved.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
