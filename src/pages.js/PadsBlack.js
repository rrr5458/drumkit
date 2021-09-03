import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from "styled-components";
import PadBlack from "../components/PadBlack"
import {setVolume} from '../redux/actions/volume'

const Container = styled.div `
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    `
    const Display = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 360px;
    
`
const samples = [
    {
        name: 'Heater-1',
        key: 'Q',
        audio: new Audio('padblacksample1.mp3')
       },
       
       {
         name: 'Heater-2',
         key: 'W',
         audio: new Audio('padblacksample2.mp3')
       },
       
       {
         name: 'Heater-3',
         key: 'E',
         audio: new Audio('padblacksample3.mp3')
       },
       
       {
         name: 'Heater-4',
         key: 'A',
         audio: new Audio('padblacksample4.mp3')
       },
       
       {
         name: 'Clap' ,
         key: 'S',
         audio: new Audio('padblacksample5.mp3')
       },
       
       {
         name: 'Open-HH',
         key: 'D',
         audio: new Audio('padblacksample6.mp3')
       },
       
       {
         name: "Kick-'n-Hat",
         key: 'Z',
         audio: new Audio('itDepends.mp3')
       },
       
       {
         name: 'Kick',
         key: 'X',
         audio: new Audio('padblacksample8.mp3')
       },
       
       {
         name: 'Closed-HH',
         key: 'C',
         audio: new Audio('padblacksample9.mp3')
       }
]
function Pads() {
    const dispatch = useDispatch()
    const volumeLevel = useSelector(state => state.volumeLevel)
    
    const stopSound = () => {
      samples.forEach(sample => {
        sample.audio.pause()
        sample.audio.currentTime = 0
      })
    }
    const playSound = (audio) => {
      stopSound()
      audio.play()
      audio.volume = volumeLevel
    }
    return (
        <Container id="drum-machine">
            <Display id="display">
                {samples.map((sample, index) => {
                    return(
                        <PadBlack key={index} play={e => playSound(sample.audio)} sample={sample} />
                        )
                    })}  
                <input type="range" step=".01" onChange={(e) => dispatch(setVolume(e.target.value))} value={volumeLevel}  max="1" min="0"/>
            </Display>
            
        </Container>
    )
}

export default Pads
