import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { updateDirector } from '../Api-Calls/apiCalls';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { useApiProgress } from '../shared/ApiProgress';

const DirectorUpdate = () => {
    const [form,setForm] = useState({
        directorName: null,
        directorSurname: null,
        explanation: null,
        directorMovies: null
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
    const onClickUpdateDirector = async (event) => {
        event.preventDefault();
        
        try{
            await updateDirector(id,form);
            setForm(() => ({
                directorName: null,
                directorSurname: null,
                explanation: null,
                directorMovies: null
            }));
            push("/director-feed");
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }

    const pendingApiCall = useApiProgress("put","/api/1.0/director/update");
    const {t} = useTranslation();
    const {directorName: directorNameError , directorSurname: directorSurnameError, explanation: explanationError,directorMovies:directorMoviesError} = errors;
    return (
        <div className="container p-3">
            <form id="form">
                <h1 className="text-center">{t('Update Director')} </h1>
                <Input error={directorNameError} name="directorName" label = {t('Director Name')} onChange={onChange}/>
                <Input error={directorSurnameError} name="directorSurname" label={t('Director Surname')} onChange={onChange}/>
                <Input error={explanationError} name="explanation" label={t('Explanation')} onChange={onChange}/>
                <Input error={directorMoviesError} name="directorMovies" label={t(`Director's Movies`)} onChange={onChange}/>
                <div className="text-center"> 
                    <Button onClick={onClickUpdateDirector} text={t('Update Director')} disabled={pendingApiCall} spinner={pendingApiCall}/>
                </div>
            </form>
        </div>
    );
};

export default DirectorUpdate;