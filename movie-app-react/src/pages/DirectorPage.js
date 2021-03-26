import  Button  from '../Components/Button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addDirector } from '../Api-Calls/apiCalls';
import Input from '../Components/Input';
import {useApiProgress} from '../shared/ApiProgress';


const DirectorPage = () => {
    const [form,setForm] = useState({
        directorName: null,
        directorSurname: null,
        explanation: null,
        directorMovies: null
    })
    const [errors,setErrors] = useState({});
    const [successMessage , setSuccessMessage] = useState(false);
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

        setSuccessMessage(false);
        
    }
    const onClickAddAuthor = async (event) => {
        event.preventDefault();
        
        try{
            await addDirector(form);   
            setForm(() => ({
                directorName: null,
                directorSurname: null,
                explanation: null,
                directorMovies: null
            }));
            setSuccessMessage(true);
            document.getElementById("form").reset();
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }

    const pendingApiCall = useApiProgress("post","/api/1.0/author/add");
    const {t} = useTranslation();
    const {directorName: directorNameError , directorSurname: directorSurnameError, explanation: explanationError,directorMovies:directorMoviesError} = errors;
    return (
        <div className="container p-3">
            <form id="form">
                <h1 className="text-center">{t('Add Director')} </h1>
                <Input error={directorNameError} name="directorName" label = {t('Director Name')} onChange={onChange}/>
                <Input error={directorSurnameError} name="directorSurname" label={t('Director Surname')} onChange={onChange}/>
                <Input error={explanationError} name="explanation" label={t('Explanation')} onChange={onChange}/>
                <Input error={directorMoviesError} name="directorMovies" label={t(`Director's Movies`)} onChange={onChange}/>
                {successMessage && <div class="alert alert-success text-center" role="alert">
                    {t('Director Added Successfully!')}
                  </div>
                }
                <div className="text-center"> 
                    <Button onClick={onClickAddAuthor} text={t('Add Director')} disabled={pendingApiCall} spinner={pendingApiCall}/>
                </div>
            </form>
        </div>
    );
};

export default DirectorPage;