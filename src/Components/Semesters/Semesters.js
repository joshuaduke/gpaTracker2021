import React from "react"
import ReactDom from 'react-dom'
import Semester from "./Semester"
import  "./SemestersStyles.css"
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

const Container = styled.section`

`
const MySemesters =styled.section`

`

const Navigation = styled.nav`
padding:10px;
font-size:18px;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
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

const Footer = styled.footer`
position:absolute;
bottom:0;
width:100%;
background-color:red;
height:18vh;
padding:20px 10px;
text-align:center;
color:green;

a{
    color:green;
    display:block;
    margin-top:5px;
    font-size:1.5em;
}
`

function Semesters(){

    return(
        <Container>
            <Navigation >
                {/* Grid for top bar */}
                <Close>
                    <p><a href="/classes">X</a></p>
                </Close>

                <SemestersTitle>
                    <p>Semesters</p>
                </SemestersTitle>

                <Edit>
                    <p><a href="/semestersEdit">Edit</a></p>
                </Edit>
            </Navigation>

            <Instructions>
                <h3>Tap a semester to make it the current semester</h3>
            </Instructions>

            <hr />

            {/* This is the individual semesters */}
            <MySemesters>
                <Semester name="Fall 2019"/>
                <Semester name="Winter 2020"/>
                <Semester name="Summer 2020"/>
            </MySemesters>

            <Footer>
                <p>NEW SEMESTER</p>
                
                <a href="/semestersAdd">
                    <FaPlusCircle/>
                </a>
                
            </Footer>

        </Container>
    )
}

export default Semesters