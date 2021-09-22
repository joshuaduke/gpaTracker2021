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

const AddSemester = styled.button`
padding:5px 12px;
border-radius:25px;
font-size:25px;
border:none;
cursor:pointer;
`


function Semesters(){

    return(
        <Container>
            <Navigation >
                {/* Grid for top bar */}
                <Close>
                    <p><a href="/semestersEdit"> &lt; </a></p>
                </Close>

                <SemestersTitle>
                    <p>New Semester</p>
                </SemestersTitle>

                <Edit>
                    <p><a href="/">Save</a></p>
                </Edit>
            </Navigation>
        </Container>
    )
}

export default Semesters