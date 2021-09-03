import React, {useRef,useEffect, useState} from 'react'
import styled from "styled-components"

let white = "#fff"
let offWhite = "antiquewhite"
const PadDiv = styled.div `
    border: 2px solid #333;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${(props) => props.active? offWhite: white};
    margin: 6px;
    height: 100px;
    width: 100px
`

function Pad(props) {
    const [active, setActive] = useState(false)
    const listener = useRef()
    const timeout = useRef()
    listener.current = props.play
    useEffect(() => {
        const keyPress = (e) => {
            
            //plays sound
            if(e.key.toUpperCase() === props.sample.key) {
              listener.current()
              // change pad color
            setActive(true)
            clearTimeout(timeout.current)
            timeout.current = setTimeout(() => {
                setActive(false)
            }, 300)
            }
        }
        window.document.addEventListener('keydown', keyPress)
        return() => {
            window.document.removeEventListener('keydown', keyPress)
        }
    }, [props.sample.key])
    return (
        <PadDiv onClick={props.play} className='pad-b' active={active}>
            <p>{props.sample.key}</p>
        </PadDiv>
    )
}

export default Pad
