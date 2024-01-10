import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = ({
  name, img_url, hover_url, link
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Container onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} to={link} rel="noreferrer" target='_blank'>
      <h3>{name}</h3>
      <img src={hover_url ? hovered ? hover_url : img_url : img_url} alt={name} />
    </Container>
  )
}

const Container = styled(Link)`
  border: 0.8px solid #bdd9c980;
  box-shadow: 0px 0px 1.5px 0px #ffffffc2;
  border-radius: 0.3em;
  height: max-content;
  height: 20em;
  display: block;
  cursor: pointer;
  h3{
    font-family: 'Arrancar';
    border-radius: 0.25em 0.25em 0 0;
    background-color: #bdd9c9;
    color: #000000;
    line-height: 1em;
    height: 2.5em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold; // Add more precise weight
  }
  img{
    object-fit: cover;
    height: calc(20em - 2.5em - 7.5px);
    border-radius: 0 0 0.3em 0.3em;
  }
  &:hover{
    box-shadow: 0px 0px 4px 0px #ffffffc2;
    h3{
      text-decoration: underline;
    }
  }
`