import { LLM } from "@/types"
import { GOOGLE_LLM_LIST } from "./google-llm-list"
import { OPENAI_LLM_LIST } from "./openai-llm-list"

export const LLM_LIST: LLM[] = [...OPENAI_LLM_LIST, ...GOOGLE_LLM_LIST]
