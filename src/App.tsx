import React from 'react';
import './App.css';
import tw from 'twin.macro';
import { TopSection } from "./containers/TopSection"
import { ArticlesSection } from './containers/ArticlesSection';
import styled from 'styled-components';

const AppContainer = styled.div`
    ${tw `
        w-full
        flex
        flex-col
        h-screen
        relative
        overflow-hidden    
    `}

`;
function App() {
  return (
    <AppContainer>
      <TopSection />
      <ArticlesSection />
   </AppContainer>
  );
}

export default App;
