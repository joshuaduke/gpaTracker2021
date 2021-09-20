import React from "react"
import ReactDom from 'react-dom'
import styled from "styled-components";

const SemesterItem = styled.section`

`

const SemesterLink = styled.a`
    color:black;
    display:block;
    padding:10px;
`

function Semester(props){

    function selectMe(){
        alert("clicked");
    }

    return(
        <div>
            <SemesterItem >
                <SemesterLink  href='#' onClick={selectMe}>
                    {props.name}
                    
                </SemesterLink>
            </SemesterItem>
            <hr />
        </div>

    )

}

export default Semester