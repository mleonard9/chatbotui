import { ModelProvider } from "."

export type LLMID = OpenAILLMID | GoogleLLMID | AnthropicLLMID

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
  | "gemini-2.5-flash" // Gemini 2.5 Flash
  | "gemini-2.5-pro" // Gemini 2.5 Pro

// Anthropic Models (UPDATED 02/11/26)
export type AnthropicLLMID =
  | "claude-2.1"
  | "claude-instant-1.2"
  | "claude-3-haiku-20240307"
  | "claude-3-sonnet-20240229"
  | "claude-3-opus-20240229"
  | "claude-3-5-sonnet-20240620"

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
