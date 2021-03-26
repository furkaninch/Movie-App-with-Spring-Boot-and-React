import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addMovie } from '../Api-Calls/apiCalls';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { useApiProgress } from '../shared/ApiProgress';

const MoviesPage = () => {
    const [form,setForm] = useState({
        movieName: null,
        imdbScore: null,
        explanation: null,
        director: null,
        studio: null
    })
    const [successMessage,setSuccessMessage] = useState(false);
    const [errors,setErrors] = useState({});


    const onChange = event => {
        const {name,value} = event.target;
        setForm((previousForm) => ({
            ...previousForm,
            [name]: value
        }));
        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: undefined
        }));
        setSuccessMessage(false);
    }

    const onClickAddMovie = async (event) => {
        event.preventDefault();
        try{
            await addMovie(form);
            document.getElementById("form").reset();
            setForm({
                movieName: null,
                imdbScore: null,
                explanation: null,
                director: null,
                studio: null
            });
            setSuccessMessage(true);
        }
        catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }

    const {t} = useTranslation();
    const {movieName: movieNameError, imdbScore: imdbScoreError, explanation:explanationError,
         director: directorError, studio:studioError} = errors;
    const isPendingApi = useApiProgress('post','/api/1.0/movie/add');
    return (
        <div className="container p-3">
            <form id="form">
                <h1 className="text-center">{t('Add Movie')}</h1>
                <Input error={movieNameError}  name="movieName"  label = {t('Movie Name')} onChange={onChange}/>
                <Input error={imdbScoreError}  name="imdbScore"  label = {t('IMDB Score')} onChange={onChange}/>
                <Input error={explanationError}  name="explanation"  label = {t('Explanation')} onChange={onChange}/>
                <Input error={directorError}  name="director"  label = {t('Director(s)')} onChange={onChange}/>
                <Input error={studioError}  name="studio"  label = {t('Studio')} onChange={onChange}/>
                {successMessage && <div class="alert alert-success text-center" role="alert">
                    {t('Movie Saved Successfully!')}
                  </div>
                }
                <div className="text-center">
                    <Button onClick={onClickAddMovie} text={t('Add Movie')} spinner={isPendingApi} disabled={isPendingApi}/>
                </div>
            </form>
        </div>
    );
};

export default MoviesPage;