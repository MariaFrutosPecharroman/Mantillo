import React from 'react';

const NoPage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    color: '#343a40',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '4rem',
    margin: '0',
    color: 'purple',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    margin: '20px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Oooops. Esta página no existe!</h1>
      <p style={paragraphStyle}>
        Parece que te has perdido. Regresa a la página principal para continuar explorando.
      </p>
      <a href="/" style={buttonStyle}>Volver al Inicio</a>
    </div>
  );
};

export default NoPage;
