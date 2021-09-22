import React from "react"
import ReactDom from 'react-dom'
import  "../Semesters/SemestersStyles.css"
import styled from "styled-components";
import { FaCog } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

const Container = styled.section`
display: flex;
flex-direction: column;
min-height:100vh;
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
`

const CoursesGrid = styled.div`
display:grid;
grid-template-columns: 1fr 4fr;
grid-template-areas: "close semesters";
padding:20px;
`

const Courses = styled.section`
flex: 1 1 auto;
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

function Classes(){

    return(
        <div>
            <Container>
                <Navigation >
                    {/* Grid for top bar */}
                    <Close>
                        <p><a href="/">Fall 2019</a></p>
                    </Close>

                    <Edit>
                        <p><a href="/">Edit</a></p>
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
                </Courses>
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