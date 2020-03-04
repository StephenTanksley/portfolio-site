import React, {useState, useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//component imports 
import { Header } from './components/Header'
import { Development } from './components/Development'
import { 
  AppContainer, 
  Border,
  PageContainer } from './styles/styled'


const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
  }, [])

  return (
    <PageContainer >
      <AppContainer className="App">
        <Header />
        <Border />
        <Development />
        

      </AppContainer>
    </PageContainer>

  );
}

export default App;
