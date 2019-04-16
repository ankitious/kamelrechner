import React  from 'react';
import Header from "./components/header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import Routes from "./routes/Routes";


export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  color : #4A4A4A;
  font-family: 'Muli', sans-serif;
`;

const App = () =>
    <Router>
        <Container>
            <Header/>
            <Routes/>
        </Container>
    </Router>;

export default App;
