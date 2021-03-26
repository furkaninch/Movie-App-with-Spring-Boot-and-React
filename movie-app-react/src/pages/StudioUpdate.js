import { updateStudio } from '../Api-Calls/apiCalls';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {  useSelector } from 'react-redux';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { useApiProgress } from '../shared/ApiProgress';
import { useHistory } from 'react-router';

const StudioUpdate = () => {
    const [form,setForm] = useState({
        studioName: null,
        explanation: null,
        numberOfMovies: null
    })
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
        }))
    }

    const{id} = useSelector((store) => ({
        id: store.id
    }))

    const {push} = useHistory();
    
    const onClickUpdateStudio= async event => {
        event.preventDefault();
        try{
            await updateStudio(id,form);
            setForm(() => ({
                publisherName: null,
                explanation: null,
                books: null
            }));
            push("/studio-feed");
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }
    const{t} = useTranslation();
    const{studioName: studioNameError , explanation: explanationError, numberOfMovies: numberOfMoviesError} = errors;
    const pendingApiCall = useApiProgress('put','/api/1.0/studio/update');
    return (
        <div className="container p-3">
            <form id= "form">
                <h1 className="text-center">{t('Update Studio')} </h1>
                <Input error= {studioNameError} name= "studioName"label = {t('Studio Name')} onChange={onChange}/>
                <Input error= {explanationError} name= "explanation" label={t('Explanation')} onChange={onChange}/>
                <Input error= {numberOfMoviesError} name= "numberOfMovies" label={t('Number of Movies')} onChange={onChange}/>
                <div className="text-center">
                    <Button onClick={onClickUpdateStudio} text={t('Update Studio')} spinner={pendingApiCall} disabled ={pendingApiCall}/>
                </div>
            </form>
        </div>
    );
};

export default StudioUpdate;