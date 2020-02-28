import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//component imports 
import { Header } from './components/Header'
import { 
  AppContainer, 
  ContainerDiv, 
  TextElement,
  PageContainer } from './styles/styled'

const App = () => {

  return (
    <PageContainer >
      <AppContainer className="App">
        <Header />
        
          <TextElement>This is where I'm going to check my text color.</TextElement>
      </AppContainer>
    </PageContainer>

  );
}

export default App;
