import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  

`
