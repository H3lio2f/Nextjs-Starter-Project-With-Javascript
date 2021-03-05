/* eslint-disable no-use-before-define */
import React from 'react'
import { Container } from './styles'

const Layout = props => {
  return <Container>{props.children}</Container>
}

export default Layout
