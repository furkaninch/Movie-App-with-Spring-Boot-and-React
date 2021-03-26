import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { updateMovie } from '../Api-Calls/apiCalls';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { useApiProgress } from '../shared/ApiProgress';

const MovieUpdate = () => {
    const [form,setForm] = useState({
        movieName: null,
        imdbScore: null,
        explanation: null,
        director: null,
        studio: null
    })
    const [errors,setErrors] = useState({});
    const onChange = event => {
        const{name,value} = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value
        }));
        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: undefined
        }));

        
    }
    const {id} = useSelector((store) => ({
        id: store.id
    }))
    const {push} = useHistory(); 
    const onClickUpdateMovie = async (event) => {
        event.preventDefault();
        
        try{
            await updateMovie(id,form);
            setForm(() => ({
                movieName: null,
                imdbScore: null,
                explanation: null,
                director: null,
                studio: null
            }));
            push("/movie-feed");
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }

    const pendingApiCall = useApiProgress("put","/api/1.0/movie/update");
    const {t} = useTranslation();
    const {movieName: movieNameError, imdbScore: imdbScoreError, explanation:explanationError,
        director: directorError, studio:studioError} = errors;
       return (
        <div className="container p-3">
            <form id="form">
                <h1 className="text-center">{t('Update Movie')} </h1>
                <Input error={movieNameError}  name="movieName"  label = {t('Movie Name')} onChange={onChange}/>
                <Input error={imdbScoreError}  name="imdbScore"  label = {t('IMDB Score')} onChange={onChange}/>
                <Input error={explanationError}  name="explanation"  label = {t('Explanation')} onChange={onChange}/>
                <Input error={directorError}  name="director"  label = {t('Director(s)')} onChange={onChange}/>
                <Input error={studioError}  name="studio"  label = {t('Studio')} onChange={onChange}/>
                <div className="text-center"> 
                    <Button onClick={onClickUpdateMovie} text={t('Update Movie')} disabled={pendingApiCall} spinner={pendingApiCall}/>
                </div>
            </form>
        </div>
    );
};

export default MovieUpdate;