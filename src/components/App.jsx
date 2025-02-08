import React from 'react';
import { ThemeProvider } from './themeProvider/ThemeProvider';
import TaggleButton from './taggleButton/TaggleButton';
import Nav from './nav/Nav';
import Content from './content/Content';
import Footer from './footer/Footer';

// создать компонент который зависит от темы


const App = () => {

  return (
    <ThemeProvider>
      <Nav />
      <Content />
      <Footer />
      <TaggleButton />

    </ThemeProvider>
  );
}

export default App;



/* <div className={'content-'+theme} style={{
  backgroundColor: theme === 'light' ? "white" : "grey"
}}> */