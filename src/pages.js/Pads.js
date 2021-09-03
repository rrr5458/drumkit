import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from "styled-components";
import Pad from "../components/Pad"
import {setVolume} from '../redux/actions/volume'

const Container = styled.div `
    height: 40%;
    display: flex;
    flex-direction: column;
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
        key: 'Q',
        audio: new Audio('pad1sample1.mp3')
       },
       
       {
         key: 'W',
         audio: new Audio('pad1sample2.mp3')
       },
       
       {
         key: 'E',
         audio: new Audio('pad1sample3.mp3')
       },
       
       {
         key: 'A',
         audio: new Audio('pad1sample4.mp3')
       },
       
       {
         key: 'S',
         audio: new Audio('pad1sample5.mp3')
       },
       
       {
         key: 'D',
         audio: new Audio('pad1sample6.mp3')
       },
       
       {
         key: 'Z',
         audio: new Audio('[808] Coldest 808.mp3')
       },
       
       {
         key: 'X',
         audio: new Audio('[KICK] Video.mp3')
       },
       
       {
         key: 'C',
         audio: new Audio('[VOX] Uhh.mp3')
       }
]
function Pads() {
    const dispatch = useDispatch()
    const volumeLevel = useSelector(state => state.volumeLevel)

    const [dogImage, setDogImage] = useState('')

    const fetchDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message)
            })
      }
    
    const stopSound = () => {
      samples.forEach(sample => {
        sample.audio.pause()
        sample.audio.currentTime = 0
      })
    }
    const playSound = (audio) => {
      fetchDogImage()
      stopSound()
      audio.play()
      audio.volume = volumeLevel
    }
    return (
        <Container id="drum-machine">
            <Display id="display">
                {samples.map((sample, index) => {
                    return(
                        <Pad key={index} play={e => playSound(sample.audio)} sample={sample} className="pad-b"/>
                        )
                    })}  
                <input type="range" step=".01" onChange={(e) => dispatch(setVolume(e.target.value))} value={volumeLevel}  max="1" min="0"/>
            </Display>
            <div>
              <img src={dogImage} alt="random-dog"/>
            </div>
        </Container>
    )
}

export default Pads
