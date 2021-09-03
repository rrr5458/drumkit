import React, {useRef,useEffect} from 'react'
import styled from "styled-components"

let white = "#fff"
let offWhite = "antiquewhite"
const PadDiv = styled.div `
    border: 2px solid #333;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${white};
    margin: 6px;
    height: 100px;
    width: 100px
`

function Pad(props) {
    const listener = useRef()
    listener.current = props.play
    useEffect(() => {
        const keyPress = (e) => {
            if(e.target.className === 'pad-active-b'){
                e.target.className = 'pad-b';
                console.log('remove')
                console.log(e.target.className)
            }else if (e.target.className === 'pad-b'){
                e.target.className = 'pad-active-b';
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
        <PadDiv onClick={props.play}>
            <p>{props.sample.key}</p>
        </PadDiv>
    )
}

export default Pad
