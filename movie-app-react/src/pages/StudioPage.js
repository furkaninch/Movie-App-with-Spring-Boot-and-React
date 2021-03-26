import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addStudio } from '../Api-Calls/apiCalls';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { useApiProgress } from '../shared/ApiProgress';

const StudioPage = () => {
    const [form,setForm] = useState({
        studioName: null,
        explanation: null,
        numberOfMovies: null
    })
    const [errors,setErrors] = useState({});
    const [successMessage,setSuccessMessage] = useState(false);

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
        setSuccessMessage(false);
    }

    const onClickAddStudio = async event => {
        event.preventDefault();
        try{
            await addStudio(form);
            setForm(() => ({
                studioName: null,
                explanation: null,
                numberOfMovies: null
            }));
            setSuccessMessage(true);
            document.getElementById("form").reset();
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
        }
    }
    const{t} = useTranslation();
    const{studioName: studioNameError , explanation: explanationError, numberOfMovies: numberOfMoviesError} = errors;
    const pendingApiCall = useApiProgress('post','/api/1.0/studio/add');
    return (
        <div className="container p-3">
            <form id= "form">
                <h1 className="text-center">{t('Add Studio')} </h1>
                <Input error= {studioNameError} name= "studioName"label = {t('Studio Name')} onChange={onChange}/>
                <Input error= {explanationError} name= "explanation" label={t('Explanation')} onChange={onChange}/>
                <Input error= {numberOfMoviesError} name= "numberOfMovies" label={t('Number of Movies')} onChange={onChange}/>
                {successMessage && <div class="alert alert-success text-center" role="alert">
                    {t('Studio Saved Successfully!')}
                  </div>
                }
                <div className="text-center">
                    <Button onClick={onClickAddStudio} text={t('Add Studio')} spinner={pendingApiCall} disabled ={pendingApiCall}/>
                </div>
            </form>
        </div>
    );
};

export default StudioPage;