import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStudios } from '../Api-Calls/apiCalls';
import StudioView from '../Components/StudioView';

const StudioFeed = () => {
    const [studioPage,setStudioPage] = useState({content:[] , last : true , number: 0});
    
    const loadStudios = async (page) => {
        try{
            const response = await getStudios(page);
            setStudioPage(response.data);
        }catch(error){

        }
    }
    useEffect(() => {
        loadStudios();
    },[])
   

    const onClickNext = () => {
        const nextPage = studioPage.number + 1;
        loadStudios(nextPage);
    }
    const onClickPrevious = () => {
        const previousPage = studioPage.number - 1;
        loadStudios(previousPage);
    }

    const {first,last,content} = studioPage;
    const {t} = useTranslation();
    let actionDiv = (
        <div>
        {last === false && <button onClick={onClickNext} className="btn btn-sm btn-secondary float-right">
           {t('Next')} </button>}
        {first === false && <button onClick={onClickPrevious} className="btn btn-sm btn-secondary">
           {t('Previous')} </button>}
        </div>
    )
    return (
        <div className="container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">{t('Studio Name')}</th>
                        <th scope="col">{t('Explanation')}</th>
                        <th scope="col">{t('Number of Movies')}</th>
                    </tr>
                </thead>
                <tbody>
                   {content.map(studio => {
                       return <StudioView key={studio.id} studio={studio}/>
                   })}
                </tbody>
                </table>
                {actionDiv}
        </div>
    );
};

export default StudioFeed;