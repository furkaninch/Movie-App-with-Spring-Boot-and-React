import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { loginHandler } from '../redux/authActions';
import {useApiProgress} from '../shared/ApiProgress';

const LoginPage = (props) => {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [error , setError] = useState(null);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const isPendingApi = useApiProgress('post','/api/1.0/auth');

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    useEffect(() => {
        setError(null);
    },[username,password])

    const onClickLogin = async event => {
        event.preventDefault();
        const {push} = props.history;
        const creds = {
            username,
            password
        }

        setError(undefined);
        try{
            await dispatch(loginHandler(creds));
            push('/');
        }
        catch(apiError){
             setError(apiError.response.data.message);
        }
       
    }

    const buttonEnabled = username && password;
    
    return (
        <div className="container p-3">
            <form>
                <h1 className="text-center">{t('Login')}</h1>
                <Input label = {t('Username')} onChange={onChangeUsername}/>
                <Input label={t('Password')} onChange={onChangePassword} type="password"/>
                {error && <div className="alert alert-danger">
                    {error}
                </div>}
                <div className="text-center">
                    <Button disabled={!buttonEnabled || isPendingApi} onClick={onClickLogin} 
                     spinner={isPendingApi} text={t('Login')}/>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;