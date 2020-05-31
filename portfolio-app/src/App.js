import React from "react";
import "./App.css";

//component imports
import { Header } from "./components/Header";
import { AppContainer, Border, PageContainer } from "./styles/styled";

const App = () => {
  return (
    <PageContainer>
      <AppContainer className="App">
        <Header />
        //stuff I've done - cards in a container. //blog - in a vertical
        container off to the right.
        <Border className="top-border" />
        <Border className="mid-border" />
        <Border className="bottom-border" />
      </AppContainer>
    </PageContainer>
  );
};

export default App;
