import React from "react"
import ReactDom from 'react-dom'
import EditSemester from '../Edit/EditSemester'
import  "../SemestersStyles.css"
import styled from "styled-components";

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

`

const AddSemester = styled.a`
background-color:blue;
color:black;
font-size:20px;
padding:3px 10px 4px 10px;
border-radius:25px;
display:inline-block;
margin-top:10px;
`


function Semesters(){

    return(
        <Container>
            <Navigation >
                {/* Grid for top bar */}
                <Close>
                    <p><a href="/">X</a></p>
                </Close>

                <SemestersTitle>
                    <p>Semesters</p>
                </SemestersTitle>

                <Edit>
                    <p><a href="/">Done</a></p>
                </Edit>
            </Navigation>

            <Instructions>
                <h3>Tap a semester to make it the current semester</h3>
            </Instructions>

            <hr />

            {/* This is the individual semesters */}
            <MySemesters>
                <EditSemester name="Fall 2019"/>
                <EditSemester name="Winter 2020"/>
                <EditSemester name="Summer 2020"/>
            </MySemesters>

            <Footer>
                <p>NEW SEMESTER</p>
                <AddSemester href="/semestersAdd">+</AddSemester>
            </Footer>

        </Container>
    )
}

export default Semesters