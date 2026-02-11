import { ModelProvider } from "."

export type LLMID = OpenAILLMID | GoogleLLMID

// OpenAI Models (UPDATED 02/11/26)
export type OpenAILLMID =
  | "gpt-5.2" // GPT-5.2
  | "gpt-4.1" // GPT-4.1
  | "gpt-4.1-mini" // GPT-4.1 Mini
  | "gpt-4o" // GPT-4o
  | "gpt-4o-mini" // GPT-4o Mini
  | "o3-mini" // o3-mini

// Google Models (UPDATED 02/11/26)
export type GoogleLLMID =
  | "gemini-2.0-flash" // Gemini 2.0 Flash
  | "gemini-2.5-flash-preview-04-17" // Gemini 2.5 Flash
  | "gemini-2.5-pro-preview-05-06" // Gemini 2.5 Pro

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
