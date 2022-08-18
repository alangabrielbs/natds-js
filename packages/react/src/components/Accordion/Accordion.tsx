import React from 'react'
import styles from './Accordion.styles'
import { AccordionProps } from './Accordion.props'

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      className = '',
      ...rest
    } = props
    const { example } = styles()

    return (
      <div
        className={`${className} ${example}`}
        ref={ref}
        {...rest}
      >
        {props.children}
      </div>
    )
  }
)

export default Accordion
