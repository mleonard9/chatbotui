"use client"

import { Button } from "@/components/ui/button"
import { IconLoader2 } from "@tabler/icons-react"
import { useFormStatus } from "react-dom"
import { ComponentProps } from "react"

type SubmitButtonProps = ComponentProps<typeof Button> & {
  pendingText?: string
}

export function SubmitButton({
  children,
  pendingText,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? (
        <span className="flex items-center gap-2">
          <IconLoader2 className="animate-spin" size={16} />
          {pendingText || children}
        </span>
      ) : (
        children
      )}
    </Button>
  )
}
