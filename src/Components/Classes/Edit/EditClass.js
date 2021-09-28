import React from "react"
import  "../../Semesters/SemestersStyles.css"
import styled from "styled-components";


import { FaRegTimesCircle } from "react-icons/fa";

const CoursesGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "course grade delete";
    padding:20px 20px;

    p{
        margin:5px 0;
    }
`

const DeleteCourse = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    a{
        color:red;
        font-size:1.1em;
    }
`

function EditClass(className){

    return(
        <CoursesGrid className={className}>
            <div>
                <p>WEB 322</p>
                <p>88.9%</p>
            </div>
            <div>
                <p>3.0</p>
                <p>A</p>
                
            </div>
            <DeleteCourse>
                <a href="/">
                    <FaRegTimesCircle/>
                </a>
                
            </DeleteCourse>
        </CoursesGrid>
    )
}

export default EditClass