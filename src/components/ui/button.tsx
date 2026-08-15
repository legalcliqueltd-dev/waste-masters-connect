import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium tracking-[-0.005em] ring-offset-background transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* The single action accent: recycle green. */
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_2px_hsl(133_60%_18%/0.3)] hover:bg-primary-dark hover:shadow-eco",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background text-foreground hover:border-primary hover:text-primary-dark hover:bg-primary/[0.04]",
        /* Solid navy: structural actions that must not compete with the green. */
        navy:
          "bg-brand-navy text-white hover:bg-brand-navy-deep shadow-[0_1px_2px_hsl(209_60%_12%/0.35)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-blue-ink underline-offset-4 hover:underline px-0",
        /* On navy or photographic bands. */
        onDark:
          "bg-white text-brand-navy-deep hover:bg-white/90 shadow-[0_1px_2px_hsl(209_60%_8%/0.4)]",
        outlineOnDark:
          "border border-white/30 bg-white/[0.04] text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy-deep hover:border-white",
        hero: "bg-gradient-hero text-white shadow-professional hover:shadow-eco",
        eco: "bg-gradient-eco text-primary-foreground shadow-eco hover:brightness-[1.06]",
        accent: "bg-brand-blue-ink text-white hover:bg-brand-blue",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-9 rounded-md px-3.5 text-[0.8125rem]",
        lg: "h-[3.25rem] rounded-md px-7 text-base",
        xl: "h-14 rounded-md px-8 text-[1.0625rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
