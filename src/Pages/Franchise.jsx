import React from 'react';
import '../Pages/Css/Franchise.css';
import backgroundImage from '../Components/Assets/MoPizza-background.png';

export const Franchise = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100% 150%',
    backgroundPosition: '100% 50%',
    height: '100%',
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <form className="franchise-form">
        <div className="input-row">
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="last_name" className="input__search" placeholder="Nom" />
          </div>
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="first_name" className="input__search" placeholder="Prénom" />
          </div>
        </div>

        <div className="select__container">
          <div className="shadow__input"></div>
          <select className="input__select" name="civilite">
            <option value="" disabled selected>
              Civilité
            </option>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
          </select>
        </div>

        <div className="input__container">
          <div className="shadow__input"></div>
          <input type="date" name="birthdate" className="input__search" placeholder="Date de naissance" />
        </div>

        <div className="input-row">
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="adresse" className="input__search" placeholder="Adresse" />
          </div>
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="ville" className="input__search" placeholder="Ville" />
          </div>
        </div>

        <div className="input-row">
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="tel" name="telephone" className="input__search" placeholder="Téléphone" />
          </div>
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="email" name="email" className="input__search" placeholder="Adresse Email" />
          </div>
        </div>

        <h3 className="form-title">Votre situation</h3>

        <div className="select__container">
          <div className="shadow__input"></div>
          <select className="input__select" name="situation">
            <option value="" disabled selected>
              Vous êtes
            </option>
            <option value="salarie">Salarié</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div className="select__container">
          <div className="shadow__input"></div>
          <select className="input__select" name="local">
            <option value="" disabled selected>
              Votre local
            </option>
            <option value="proprietaire">Propriétaire locale commercial</option>
            <option value="locataire">Locataire locale commercial</option>
          </select>
        </div>

        <div className="input-row">
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="superficie" className="input__search" placeholder="Superficie en m2" />
          </div>
          <div className="input__container">
            <div className="shadow__input"></div>
            <input type="text" name="emplacement" className="input__search" placeholder="Emplacement" />
          </div>
        </div>

        <div className="input__container">
          <div className="shadow__input"></div>
          <input type="text" name="investissement" className="input__search" placeholder="Investissement" />
        </div>

        <div className="input__container">
          <div className="shadow__input"></div>
          <input type="file" name="photo" className="input__search" placeholder="Photo du local" />
        </div>

        <div className="input__container textarea__container">
          <div className="shadow__input"></div>
          <textarea name="projet" className="input__search" placeholder="Votre projet"></textarea>
        </div>

        <div className="button-container">
          <button type="submit" className="input__button__shadow">
            Envoyer le formulaire
          </button>
          <button type="button" className="input__button__shadow">
            Concept
          </button>
        </div>
      </form>
    </div>
  );
};
