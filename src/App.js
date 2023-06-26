import React from 'react'
import { Container } from './components/styles/Container.styles'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'

const theme={
  colors:{
    header: "yellow"
  }
}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header></Header>
    <Container>

      <h1>HELLO WORLD</h1>
    </Container>
    </>
    </ThemeProvider>
  )
}
