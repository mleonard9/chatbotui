import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export const getBase64FromDataURL = (dataURL: string) => {
  return dataURL.split(",")[1]
}

export const getMediaTypeFromDataURL = (dataURL: string) => {
  return dataURL.split(",")[0].split(":")[1].split(";")[0]
}
