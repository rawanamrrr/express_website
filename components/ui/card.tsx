import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const cardVariants = cva(
  "rounded-xl border bg-card/80 text-card-foreground backdrop-blur-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-luxury hover:shadow-luxury-lg border-border/50",
        luxury: "shadow-luxury hover:shadow-luxury-lg bg-gradient-to-br from-card to-card/50 border-0",
        glass: "bg-background/60 backdrop-blur-xl border-border/30 shadow-luxury hover:shadow-luxury-lg",
        elevated: "shadow-luxury-lg hover:shadow-luxury-xl",
        outlined: "border-2 border-primary/30 bg-background/50 backdrop-blur-sm",
        gradient: "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-luxury hover:shadow-luxury-lg",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
    },
  }
)

function Card({ className, variant = 'default', size = 'default', ...props }: React.ComponentProps<'div'> & { variant?: 'default' | 'luxury' | 'glass' | 'elevated' | 'outlined' | 'gradient' | null | undefined; size?: 'default' | 'sm' | 'lg' | 'xl' | null | undefined }) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
