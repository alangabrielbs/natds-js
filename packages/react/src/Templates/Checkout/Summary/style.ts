/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: [theme.typography.display.fontFamily, theme.typography.fallback.fontFamily],
    alignItems: 'center',
    position: 'relative',
    color: theme.color.highlight,
    backgroundColor: theme.color.surface,
    width: '100%',
    height: '74px'
    // border: '1px solid green'
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%'

  },
  colCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    width: '100%'
    // border: '1px solid yellow'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid red',
    gap: 4,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    color: theme.color.highlight
  },
  colPd: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
    padding: 16,
    boxSizing: 'border-box'
  },
  surface: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: [0, 8],
    boxSizing: 'border-box'
    // border: '1px solid red'
  }
}))

export default styles
