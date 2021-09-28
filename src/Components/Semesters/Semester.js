import React from "react"
import ReactDom from 'react-dom'
import styled from "styled-components";

import { FaRegTimesCircle } from "react-icons/fa";

const SemesterItem = styled.section`

`

const SemesterLink = styled.a`
    color:black;
    display:block;
    padding:10px;
`

const DeleteSemester = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    a{
        color:red;
        font-size:1.1em;
    }
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

                <DeleteSemester>
                    <a href="/">
                        <FaRegTimesCircle/>
                    </a>    
                </DeleteSemester>
            </SemesterItem>
            <hr />
        </div>

    )

}

export default Semester