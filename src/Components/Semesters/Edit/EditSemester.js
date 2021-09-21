import React from "react"
import ReactDom from 'react-dom'
import styled from "styled-components";

const SemesterItem = styled.section`
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "title closeBtn"

`

const SemesterLink = styled.p`
    color:black;
    display:inline-block;
    padding:10px;
`

const RemoveSemesterBtn = styled.button`
    grid-area:closeBtn;
    background-color:steelblue;
    padding:2px 5px;
    margin:10px 20px;
    border:none;
    border-radius:25px;
    cursor:pointer;
`



function Semester(props){
    return(
        <div>
            <SemesterItem >
                <SemesterLink>
                    {props.name} 
                </SemesterLink>
                <div style={{textAlign: "right"}}>
                    <RemoveSemesterBtn>X</RemoveSemesterBtn>
                </div>
                
            </SemesterItem>
            <hr />
        </div>

    )

}

export default Semester