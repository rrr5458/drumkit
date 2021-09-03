import React, {useRef,useEffect} from 'react'
import styled from "styled-components"


const PadDiv = styled.div `
    border: 2px solid #83ff4a;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    margin: 6px;
    height: 100px;
    width: 100px
`

function Pad(props) {
    const listener = useRef()
    listener.current = props.play
    useEffect(() => {
        const keyPress = (e) => {
            if(e.target.class === 'pad-active'){
                e.target.className = 'pad';
                console.log('remove')
                console.log(e.target.className)
            }else{
                e.target.className = 'pad-active';
                console.log('add class')
                console.log(e.target.className)
            }
            if(e.key.toUpperCase() === props.sample.key) {
              listener.current()
            }
        }
        window.document.addEventListener('keydown', keyPress)
        return() => {
            window.document.removeEventListener('keydown', keyPress)
        }
    })
    return (
        <PadDiv onClick={props.play} className="pad">
            <p>{props.sample.key}</p>
        </PadDiv>
    )
}

export default Pad
