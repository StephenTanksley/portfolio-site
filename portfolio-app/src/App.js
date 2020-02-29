import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//component imports 
import { Header } from './components/Header'
import { 
  AppContainer, 
  SuperButton,
  ContainerDiv,
  TextElement,
  PageContainer } from './styles/styled'

const App = () => {
  let [count, setCount] = useState(0)


  const handleClick = (e) => {
    e.preventDefault()
    setCount(count+=1)
    console.log(count)
  }

  return (
    <PageContainer >
      <AppContainer className="App">
      <SuperButton onClick={handleClick}>Increase</SuperButton>
        <Header />
          <TextElement>This is where I'm going to check my text color.</TextElement>
          <ContainerDiv>{count}</ContainerDiv>
      </AppContainer>
    </PageContainer>

  );
}

export default App;
