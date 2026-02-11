import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 02/11/26) -----------------------------

// Gemini 2.5 Flash
const GEMINI_2_5_FLASH: LLM = {
  modelId: "gemini-2.5-flash-preview-04-17",
  modelName: "Gemini 2.5 Flash",
  provider: "google",
  hostedId: "gemini-2.5-flash-preview-04-17",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.5 Pro
const GEMINI_2_5_PRO: LLM = {
  modelId: "gemini-2.5-pro-preview-05-06",
  modelName: "Gemini 2.5 Pro",
  provider: "google",
  hostedId: "gemini-2.5-pro-preview-05-06",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 2.0 Flash
const GEMINI_2_0_FLASH: LLM = {
  modelId: "gemini-2.0-flash",
  modelName: "Gemini 2.0 Flash",
  provider: "google",
  hostedId: "gemini-2.0-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_2_0_FLASH,
  GEMINI_2_5_FLASH,
  GEMINI_2_5_PRO
]
