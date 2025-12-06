import React from 'react';
import Accueil from '../components/Accueil';
import About from '../components/About';
import Projets from '../components/Projets';
import Competences from '../components/Competences';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  return (
    <>
      <ErrorBoundary label='Accueil'>
        <Accueil />
      </ErrorBoundary>
      <ErrorBoundary label='About'>
        <About />
      </ErrorBoundary>
      <ErrorBoundary label='Projets'>
        <Projets />
      </ErrorBoundary>
      <ErrorBoundary label='Competences'>
        <Competences />
      </ErrorBoundary>
    </>
  );
};

export default Home;
