import { getDirectors } from '../Api-Calls/apiCalls';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DirectorView from '../Components/DirectorView';

const DirectorFeed = () => {
    const [directorPage,setDirectorPage] = useState({content:[] , last : true , number: 0});

    const loadDirectors = async(page) => {
        try{
            const response= await getDirectors(page);
            setDirectorPage(response.data);
        }catch(error){

        } 
    }
    useEffect(() => {
        loadDirectors();
    },[])


    const onClickNext = () => {
        const nextPage = directorPage.number + 1;
        loadDirectors(nextPage);
    }
    const onClickPrevious = () => {
        const previousPage = directorPage.number - 1;
        loadDirectors(previousPage);
    }

    const {t} = useTranslation();
    const {content,last,first} = directorPage;
    let actionDiv = (
        <div>
            {last === false && <button onClick={onClickNext} className="btn btn-sm btn-secondary float-right">
                {t('Next')}</button>}
            {first === false && <button onClick={onClickPrevious} className="btn btn-sm btn-secondary">
                {t('Previous')}</button>}
        </div>
    )
    
    
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">{t('Director Name')}</th>
                    <th scope="col">{t('Director Surname')}</th>
                    <th scope="col">{t('Explanation')}</th>
                    <th scope="col">{t("Director's Books")}</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map(director => {
                        return <DirectorView key={director.id} director={director}/>
                    })}
                    
                </tbody>
        </table>
        {actionDiv}
        </div>
    );
};

export default DirectorFeed;