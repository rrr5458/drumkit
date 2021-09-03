import React, { useState, useRef } from 'react'
import styled from "styled-components";



const Container = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px
    `

function AudioPlayer() {
    const [loop, setLoop] = useState('loop1.mp3')


    const audioRef = useRef()

    const updateLoop = (drumLoop) => {
        console.log(drumLoop)
        setLoop(drumLoop)
        if(audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
            console.log(loop)
            if(drumLoop === "loop1.mp3") {
                audioRef.current.playbackRate = 1
            } else if (drumLoop === "loop2.mp3") {
                audioRef.current.playbackRate = .97
            } else if (drumLoop === "loop3.mp3") {
                audioRef.current.playbackRate = .8
            } else if (drumLoop === "loop4.mp3") {
                audioRef.current.playbackRate = 1.02
            }
        }
        }
    const stopLoop = () => {
        audioRef.current.pause()
    }
    const resumeLoop = () => {
        audioRef.current.play()
    }
    
    return (
        <Container>
            <div>
                <select name="loop" id="loop" value={loop} onChange={(e) => updateLoop(e.target.value, e.target.id)} style={{margin: "6px"}}>
                    <option value="loop1.mp3">Loop 1</option>
                    <option value="loop2.mp3">Loop 2</option>
                    <option value="loop3.mp3">Loop 3</option>
                    <option value="loop4.mp3">Loop 4</option>
                </select>

            </div>
            <div>
                <audio controls loop hidden ref={audioRef}>
                    <source src={loop} type="audio/mpeg"/>
                </audio>
            </div>
            <div>
                <button className="audio-buttons" onClick={stopLoop}>Stop</button>
            </div>
            <div>
                <button className="audio-buttons" onClick={resumeLoop}>Resume</button>
            </div>
            
        </Container>
    )
}

export default AudioPlayer
