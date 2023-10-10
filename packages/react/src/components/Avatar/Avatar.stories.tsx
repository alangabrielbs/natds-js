/* eslint-disable no-param-reassign */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '.'

const componentStatus = `
> Avatar are used to identify a user

## Properties
| Property                      | Values                                    |    Status           |
|---                            |                                        ---|                  ---|
| **variant**                   | standard                                  | ✅ Available        |
| **type**                      | icon, label, image                        | ✅ Available        |
| **size**                      | standard, semi, semiX, medium, largeXXX   | ✅ Available        |
| **alt**                       | string                                    | ✅ Available        |
| **src**                       | string                                    | ✅ Available        |
| **onError**                   | function                                  | ✅ Available        |
| **name**                      | icon-name                                 | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AvatarProps> = (args) => (
  <Avatar {...args} />
)
Playground.args = {
  src: '/img_placeholder.png'
}

const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null
  e.currentTarget.src = 'https://via.placeholder.com/200x200'
}

export const Types: Story<AvatarProps> = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Avatar type="image" src="/img_placeholder.png" onError={handleError} />
    <Avatar type="icon" />
    <Avatar type="label" />
  </div>
)

export const Sizes: Story<AvatarProps> = () => (
  <>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="image" src="/img_placeholder.png" size="standard" onError={handleError} />
      <Avatar type="image" src="/img_placeholder.png" size="semi" onError={handleError} />
      <Avatar type="image" src="/img_placeholder.png" size="semiX" onError={handleError} />
      <Avatar type="image" src="/img_placeholder.png" size="medium" onError={handleError} />
      <Avatar type="image" src="/img_placeholder.png" size="largeXXX" onError={handleError} />
    </div>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="icon" size="standard" />
      <Avatar type="icon" size="semi" />
      <Avatar type="icon" size="semiX" />
      <Avatar type="icon" size="medium" />
      <Avatar type="icon" size="largeXXX" />
    </div>
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <Avatar type="label" size="standard" />
      <Avatar type="label" size="semi" />
      <Avatar type="label" size="semiX" />
      <Avatar type="label" size="medium" />
      <Avatar type="label" size="largeXXX" />
    </div>
  </>
)
