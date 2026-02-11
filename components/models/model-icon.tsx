import { cn } from "@/lib/utils"
import { LLMID } from "@/types"
import { IconSparkles } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { FC, HTMLAttributes } from "react"
import { AnthropicSVG } from "../icons/anthropic-svg"
import { GoogleSVG } from "../icons/google-svg"
import { OpenAISVG } from "../icons/openai-svg"

interface ModelIconProps extends HTMLAttributes<HTMLDivElement> {
  modelId: LLMID | string
  height: number
  width: number
}

export const ModelIcon: FC<ModelIconProps> = ({
  modelId,
  height,
  width,
  ...props
}) => {
  const { theme } = useTheme()

  switch (modelId as string) {
    case "gpt-5.2":
    case "gpt-4.1":
    case "gpt-4.1-mini":
    case "gpt-4o":
    case "gpt-4o-mini":
    case "o3-mini":
      return (
        <OpenAISVG
          className={cn(
            "rounded-sm bg-[#fff] p-1 text-black",
            props.className,
            theme === "dark" ? "bg-white" : "border-[1px] border-black"
          )}
          width={width}
          height={height}
        />
      )
    case "claude-2.1":
    case "claude-instant-1.2":
    case "claude-3-haiku-20240307":
    case "claude-3-sonnet-20240229":
    case "claude-3-opus-20240229":
    case "claude-3-5-sonnet-20240620":
      return (
        <AnthropicSVG
          className={cn(
            "rounded-sm bg-[#fff] p-1 text-black",
            props.className,
            theme === "dark" ? "bg-white" : "border-[1px] border-black"
          )}
          width={width}
          height={height}
        />
      )
    case "gemini-2.0-flash":
    case "gemini-2.5-flash":
    case "gemini-2.5-pro":
      return (
        <GoogleSVG
          className={cn(
            "rounded-sm bg-[#fff] p-1 text-black",
            props.className,
            theme === "dark" ? "bg-white" : "border-[1px] border-black"
          )}
          width={width}
          height={height}
        />
      )
    default:
      return <IconSparkles size={width} />
  }
}
