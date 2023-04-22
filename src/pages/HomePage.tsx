import React from 'react';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Bienvenue sur l'intranet de l'entreprise</h1>
      <p className="home-page__description">
        Utilisez le menu de gauche pour naviguer dans les différentes sections de l'intranet.
      </p>
    </div>
  );
};

export default HomePage;
