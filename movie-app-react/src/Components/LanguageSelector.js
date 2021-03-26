import React from 'react';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from '../Api-Calls/apiCalls';

const LanguageSelector = (props) => {
 
    const {i18n} = useTranslation();
    
    const onChangeLanguage = language =>{
        i18n.changeLanguage(language);
        changeLanguage(language);
    }
    return (
        <div className="container mt-3">
        
          <img src="https://www.countryflags.io/tr/flat/24.png" alt="Turkish Flag" onClick={() => onChangeLanguage('tr')} style={{cursor: 'pointer'}}></img>
          <img src="https://www.countryflags.io/us/flat/24.png" alt="US Flag" onClick={() => onChangeLanguage('en')} style={{cursor: 'pointer'}}></img>
           
        </div>
    );
};


export default LanguageSelector;