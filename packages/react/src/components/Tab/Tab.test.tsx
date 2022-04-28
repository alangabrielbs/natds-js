import React from 'react'
import TabItem from '../TabItem'
import Tab from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const onClick = jest.fn()

describe('Tab component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(
      <Tab>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with align center', () => {
    const { styles, component } = renderWithTheme(
      <Tab align="center">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with align right', () => {
    const { styles, component } = renderWithTheme(
      <Tab align="center">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with size large', () => {
    const { styles, component } = renderWithTheme(
      <Tab size="large">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with elevation is false', () => {
    const { styles, component } = renderWithTheme(
      <Tab elevation={false}>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with color is false', () => {
    const { styles, component } = renderWithTheme(
      <Tab color={false}>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
