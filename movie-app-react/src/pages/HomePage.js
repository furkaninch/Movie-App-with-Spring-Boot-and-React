import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../assets/movies-picture.jpeg';
import director from '../assets/director-picture.png';
import studio from '../assets/studio-picture.jpeg';
import Button from '../Components/Button';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const {t} = useTranslation();
    return (
        <div className="container row m-auto">
            <div className="card col-md" style={{width: '18rem'}}>
                <img className="card-img-top p-2" src={director} alt="Card" height="150"></img>
            <div className="card-body">
                <h3 className="card-title text-center">{t('Directors')}</h3>
                <p className="card-text text-center">{t('Explore all directors now!')}</p>
                <div className="text-center">
                    <Link to="/director-feed">
                        <Button className="btn btn-primary" text={t('Go To Directors')}/>
                    </Link>
                </div>
            </div>
            </div>

            <div className="card col-md" style={{width: '18rem'}}>
                <img className="card-img-top p-2" src={movies} alt="Card" height="150"></img>
            <div className="card-body">
                <h3 className="card-title text-center">{t('Movies')}</h3>
                <p className="card-text text-center">{t('Explore all movies now!')}</p>
                <div className="text-center">
                    <Link to="/movie-feed">
                        <Button className="btn btn-primary" text={t('Go To Movies')}/>
                    </Link>
                </div>
            </div>
            </div>

            <div className="card col-md" style={{width: '18rem'}}>
                <img className="card-img-top p-2" src={studio} alt="Card" height="150"></img>
            <div className="card-body">
                <h3 className="card-title text-center">{t('Studios')}</h3>
                <p className="card-text text-center">{t('Explore all studios now!')}</p>
                <div className="text-center">
                    <Link to="/studio-feed">
                        <Button className="btn btn-primary" text={t('Go To Studios')}/>
                    </Link>
                </div>
            </div>
            </div>
         
        </div>
    );
};

export default HomePage;