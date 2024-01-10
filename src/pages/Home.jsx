import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <div className='introduction'>
        <div className='text'>
          <h1>Realms of Reverie: Bespoke Chronicles through Art</h1>
          <p>
            Step into the venerable tapestry of Realms of Reverie, where each stroke of the brush weaves a saga of ancient mystique and grandeur. Here, the echoes of olden tales and the whisper of ethereal dreams converge, as we bring forth the essence of your Dungeons & Dragons character to timeless life. With the meticulous artistry of a seasoned scribe, our artist conjures not just images, but echoes of a world both majestic and arcane. Your visions, rich with the lore of bygone epochs, are transmuted into more than mere drawings—they become the relics of your own legendary narrative, a testament to the adventurer within, etched into the annals of eternity.
          </p>
        </div>
      </div> {/* Do this later */}
      <div className='content'>
        <Navbar />
        <ul className="cards">
          <li>
            <Card name="Xeno Colossius" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14806905/media/7a6896b3fadb76f20bd0e1b39a08f455.png" link="https://dribbble.com/shots/15826563-Xeno-Colossius"/>
          </li>
          <li>
            <Card name="Ethereal" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14295571/media/7f4751dbc41b87a90840f5c5e11f7110.png" hover_url="https://cdn.dribbble.com/users/6122742/screenshots/14295571/media/381fb89b3ce7f5c20a47fa571fd6f9c1.png?resize=800x600&vertical=center" link="https://dribbble.com/shots/15826938-Angel"/>
          </li>
          <li>
            <Card name="Wyvern Force" img_url="https://cdn.dribbble.com/userupload/3997884/file/original-de987add2d9c23af5e118c4546ac9094.png" link="dribbble.com/shots/19879603-Wyvern-Force-Faction-of-tabletop-game"/>
          </li>
          <li>
            <Card name="Quaratine" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14303933/media/b8b774beb94ccf73ee625702bae496ae.png" link="https://dribbble.com/shots/14303933-The-best-way-to-pass-quarantine" />
          </li>
          <li>
            <Card name="First Guitar" img_url="https://cdn.dribbble.com/userupload/4046043/file/original-b551adc65c1d3725400f1e5255051c9a.png" hover_url="https://cdn.dribbble.com/userupload/3997911/file/original-350d2997a5429cb1e2a5983bbdb08260.png" link="https://dribbble.com/shots/19952604-First-Guitar-Colored" />
          </li>
          <li>
            <Card name="Regular Christmas" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14826120/media/c2e649f5b5b95b384ab2cb9630ece48f.png" link="https://dribbble.com/shots/14826120-another-regular-christmas"/> {/* ?resize=1600x1200&vertical=center */}
          </li>
          <li>
            <Card name="Angel" img_url="https://cdn.dribbble.com/users/6122742/screenshots/15826938/media/3841462f43b4a67c8f65e38b58698d2f.png" />
          </li>
          <li>
            <Card name="ESpecial Troops" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14826109/media/d0cdf943ceb3ebe9a69dea0def85373c.png" link="https://dribbble.com/shots/14826109-Humans-Especial-Forces" />
          </li>
          <li>
            <Card name="P.E.D.R.O" img_url="https://cdn.dribbble.com/users/6122742/screenshots/15826906/media/3b71d430b01087a886595fec7aa352d5.png" link="https://dribbble.com/shots/15826906-P-E-D-R-O" />
          </li>
          <li>
            <Card name="Skill Disparity" img_url="https://cdn.dribbble.com/users/6122742/screenshots/15826169/media/f047defb54e99daab1209d2ba866e2a1.png" hover_url="https://cdn.dribbble.com/users/6122742/screenshots/15826169/media/f6dedbf36ecb550832c9d4c428a6a3b3.png" link="https://dribbble.com/shots/15826169-Skill-tree-display" />
          </li>
          <li>
            <Card name="Antagonist" img_url="https://cdn.dribbble.com/users/6122742/screenshots/15826949/media/404b5738afb5f75e96ed5e874a8a048d.png" link="https://dribbble.com/shots/15826949-Antagonist"/>
          </li>
          <li>
            <Card name="Inside Nasuki" img_url="https://cdn.dribbble.com/users/6122742/screenshots/14295554/media/7f5ecb43f02020db1f5ff851803ed2ba.png" hover_url="https://cdn.dribbble.com/users/6122742/screenshots/14295554/media/b185dabe5661311fa0347507e36dea87.png?resize=800x600&vertical=center" link="https://dribbble.com/shots/14295554-Inside-Nasuki" />
          </li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: url("/background2.png") no-repeat center top fixed;
  min-height: 100vh;
  .introduction{
    height: 60vh;
    background-color: transparent;
    padding: 2em;
    display: flex;
    align-items: center;
    .text{
      padding: 3em;
      background-color: #00000030;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 2rem; 
      transition: background-color 0.3s ease;
      h1, p{
        color: #ffffff;
        text-shadow: 0 0 20px #00000060;
        font-family: 'Rellanic';
        /* text-align: center; */
      }
      h1{
        padding-bottom: 0.1em;
      }
    }
  }
  .content{
    background-color: #000a01;
    min-height: 100vh;
    transition: box-shadow 0.3s ease;
    box-shadow: 0px -10px 15px rgba(127, 132, 128, 0.6);
    /* &:hover {
    } */
    padding-bottom: 2em;

    .cards{
      list-style: none;
      /* grid of 4 columns */
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 1em;
      grid-row-gap: 1.5em;
      padding: 1em 3em 0 3em;
    }
  }
`
