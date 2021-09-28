import React from "react"
import ReactDom from 'react-dom'
import  "../../Semesters/SemestersStyles.css"
import styled from "styled-components";
import { FaCog } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import EditClass from './EditClass'

const Container = styled.section`
display: flex;
flex-direction: column;
min-height:82vh;
`
const MySemesters =styled.section`

`

const Navigation = styled.nav`
padding:10px;
font-size:18px;
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "close semestersTitle edit";
`

const Instructions =styled.section`
padding:10px;
text-align:center;
`

const Close = styled.div`
grid-area: close;
background-color: red;
`

const SemestersTitle = styled.div`
grid-area: semestersTitle;
background-color: blue;
text-align:center;
`

const Edit = styled.div`
grid-area: edit;
background-color: green;
text-align:right;
`
const Grades = styled.section`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "cgpa gpa avg";
text-align:center;
margin-bottom:20px;
`

const CoursesGrid = styled.div`
display:grid;
grid-template-columns: 1fr 3fr;
grid-template-areas: "close semesters";
padding:20px 20px;

p{
    margin:5px 0;
}
`

const Courses = styled.section`
// flex: 1 1 auto;
${CoursesGrid}:nth-child(even){
    background-color:yellow;
}

${CoursesGrid}:nth-child(odd){
    background-color:grey;
}
`

const Footer = styled.footer`
position:static;
bottom:0;
width:100%;

background-color:red;
height:18vh;
padding:20px 10px;
text-align:center;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: "courses cgpa settings";

div{
    display:flex;
    align-items:center;
    justify-content:center;
}
`

const NewCourse = styled.section`
    width:100%;
    text-align:center;
    color:green;

a{
    color:green;
    display:block;
    margin-top:5px;
    font-size:1.5em;
}
`

function Classes(){

    return(
        <div>
            <Container>
                <Navigation >
                    {/* Grid for top bar */}
                    <Close>
                        <p><a href="/">X</a></p>
                    </Close>

                    <Edit>
                        <p><a href="/classes">Done</a></p>
                    </Edit>
                </Navigation>
                <Grades>
                    <div style={{borderRight: "1px solid black"}}>
                        <p>CGPA</p>
                        <p>3.29</p>
                    </div>
                    <div style={{borderRight: "1px solid black"}}>
                        <p>GPA</p>
                        <p>3.1</p>
                    </div>
                    <div>
                        <p>AVG</p>
                        <p>73.93%</p>
                    </div>
                </Grades>

                <Courses>
                    <CoursesGrid>
                        <div>
                            <p>WEB 322</p>
                            <p>88.9%</p>
                        </div>
                        <div>
                            <p>3.0</p>
                            <p>A</p>
                        </div>
                    </CoursesGrid>
                    <CoursesGrid>
                        <div>
                            <p>WEB 322</p>
                            <p>88.9%</p>
                        </div>
                        <div>
                            <p>3.0</p>
                            <p>A</p>
                        </div>
                    </CoursesGrid>
                    <CoursesGrid>
                        <div>
                            <p>WEB 322</p>
                            <p>88.9%</p>
                        </div>
                        <div>
                            <p>3.0</p>
                            <p>A</p>
                        </div>
                    </CoursesGrid>

                    <EditClass/>
                    
                </Courses>

                <NewCourse>
                    <p>NEW COURSE</p>
                    
                    <a href="/courseAdd">
                        <FaPlusCircle/>
                    </a>
                </NewCourse>
            </Container>


            
            <Footer>
                <div>
                    <a href="/">
                        <FaSchool/>
                        <p>Courses</p>
                    </a>
                </div>

                <div>
                    <a href="/">
                        <FaCalculator/>
                        <p>CGPA</p>
                    </a>
                </div>

                <div>
                    <a href="/">
                        <FaCog/>
                        <p>Settings</p>
                    </a>
                </div>
            </Footer>
        </div>
    )
}

export default Classes