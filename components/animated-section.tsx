'use client'

import * as React from 'react'
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  delay?: number
  direction?: Direction
}

function getVariants(direction: Direction): Variants {
  switch (direction) {
    case 'down':
      return {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
      }
    case 'left':
      return {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
      }
    case 'right':
      return {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
      }
    case 'up':
    default:
      return {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }
  }
}

export function AnimatedSection({
  className,
  delay = 0,
  direction = 'up',
  children,
  ...props
}: AnimatedSectionProps) {
  const variants = React.useMemo(() => getVariants(direction), [direction])

  return (
    <motion.section
      {...props}
      className={cn('will-change-transform', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  )
}
