import React from 'react';
import Contact from '../components/Contact';
import ErrorBoundary from '../components/ErrorBoundary';

const ContactPage = () => {
  return (
    <ErrorBoundary label='Contact'>
      <Contact />
    </ErrorBoundary>
  );
};

export default ContactPage;
