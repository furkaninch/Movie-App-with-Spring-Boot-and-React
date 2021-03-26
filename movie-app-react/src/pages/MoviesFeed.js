import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react/cjs/react.development';
import {getMovies} from '../Api-Calls/apiCalls';
import MoviesView from '../Components/MoviesView';

const MoviesFeed = () => {
    const [moviePage , setMoviePage] = useState({content:[] , last : true , number: 0});
    
    const loadMovies = async (page) => {
        try{
        const response = await getMovies(page);
        setMoviePage(response.data);
        }catch(error){
        }
    }

    const onClickNext = () => {
        const nextPage = moviePage.number + 1;
        loadMovies(nextPage);
    }
    const onClickPrevious = () => {
        const previousPage= moviePage.number - 1;
        loadMovies(previousPage);
    }    
    useEffect(() => {
        loadMovies();
    },[])
    
    const {content,last,first} = moviePage;
    const {t} = useTranslation();
    let actionDiv = (
        <div>
            {last === false && <button onClick={onClickNext} className="btn btn-sm btn-secondary float-right">
                {t('Next')}</button>}
            {first === false && <button onClick={onClickPrevious} className= "btn btn-sm btn-secondary">{t('Previous')}</button>
            }
        </div>
    );
    return (
        <div className="container">
           <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">{t('Movie Name')}</th>
                <th scope="col">{t('IMDB Score')}</th>
                <th scope="col">{t('Explanation')}</th>
                <th scope="col">{t('Director(s)')}</th>
                <th scope="col">{t('Studio')}</th>
                </tr>
            </thead> 
            <tbody>
            {content.map(movie => {
                return <MoviesView key={movie.id} movie={movie}/>
            })}
            </tbody>
        </table>
        {actionDiv}
        </div>
    );
};

export default MoviesFeed;