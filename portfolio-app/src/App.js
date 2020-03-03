import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//component imports 
import { Header } from './components/Header'
import { 
  AppContainer, 
  Border,
  PageContainer } from './styles/styled'


const App = () => {

  return (
    <PageContainer >
      <AppContainer className="App">
        <Header />
        <Border />

      </AppContainer>
    </PageContainer>

  );
}

export default App;
