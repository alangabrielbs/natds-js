import React from 'react'

export interface ImageProps {
  /**
   * Specify an optional className to be added to your Image
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  sourceImage: string

  alternativeText?: string

  highlight?: boolean

  fade?: 'top' | 'bottom' | 'right' | 'left'

  children?: React.ReactNode
}
