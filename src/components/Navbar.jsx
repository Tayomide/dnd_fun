import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Dribble } from './Dribble'
import { Discord } from './Discord'

export const Navbar = () => {
  const [dribbleHovered, setDribbleHovered] = useState(false)
  const [discordHovered, setDiscordHovered] = useState(false)
  return (
    <Container>
      <ul className="links">
        <li>
          <Link to="/" className='glowy'>Home</Link>
        </li>
      </ul>
      <ul className='socials'>
        <li onMouseEnter={() => setDribbleHovered(true)} onMouseLeave={() => setDribbleHovered(false)}>
          <Link to="https://dribbble.com/DiRaAl" target='_blank' rel="noreferrer" className='glowy' style={{
            borderColor: dribbleHovered ? '#EA4C89' : '#bdd9c9', 
          }}>
            <Dribble fill={dribbleHovered ?'#EA4C89' : '#ffffff'}/>
          </Link>
        </li>
        <li onMouseEnter={() => setDiscordHovered(true)} onMouseLeave={() => setDiscordHovered(false)}>
          <Link to="https://discord.com/channels/@me/1194517627909984317" target='_blank' rel="noreferrer" className='glowy' style={{
            borderColor: discordHovered ? '#5865F2' : '#bdd9c9', 
          }}>
            <Discord fill={discordHovered ?'#5865F2' : '#ffffff'}/>
          </Link>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.nav`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
  ul{
    width: max-content;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1em;
    padding: 0;
    li{
      width: max-content;
      .glowy{
        border-radius: 1.5em;
        background-color: #00000050;
        height: 2em;
        border: 1px solid #bdd9c9;
        color: #ffffff;
        width: max-content;
        margin: 0;
        padding: 0 1em;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: box-shadow 0.3s ease;
        &:hover{
          box-shadow: 0 0 20px 2px #ffffff30, 0 0 7px 2px #ffffff60;
          text-shadow: 0 0 4px #ffffff60;
        }
      }
      a{
        text-decoration: none;
        svg{
          height: 1em;
          width: 1.5em;
        }
      }
    }
  }

`