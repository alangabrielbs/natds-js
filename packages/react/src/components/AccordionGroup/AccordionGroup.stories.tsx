import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import AccordionItem from '../AccordionItem'
import StoryContainer from '../../helpers/StoryContainer'
import { AccordionGroup, AccordionGroupProps } from '.'

const componentStatus = `
> AccordionGroup allows groups of several accordion components, allowing collective management and control of multiple expandable panels..

## Properties
| Property         | Values             |    Status           |
|---               |                 ---|                  ---|
| **variant**      | standard           | ✅ Available        |


## Technical Usages Examples
`

const Item = () => {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => setIsActive(!isActive)

  return (
    <AccordionItem title="Lorem ipsum" isActive={isActive} onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
      ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
      ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
    </AccordionItem>
  )
}

export default {
  title: 'Components/AccordionGroup',
  component: AccordionGroup,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AccordionGroupProps> = (args) => (
  <StoryContainer>
    <AccordionGroup {...args}>
      <Item />
      <Item />
      <Item />
    </AccordionGroup>
  </StoryContainer>
)
