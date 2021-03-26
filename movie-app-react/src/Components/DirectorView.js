import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteDirector } from '../Api-Calls/apiCalls';
import { updateId } from '../redux/authActions';

const DirectorView = (props) => {
    const{director} = props;
    const{directorName,directorSurname,explanation,directorMovies,id}=director;
    const {push} = useHistory(); 
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((store) => ({
        isLoggedIn: store.isLoggedIn
    }))
    const{admin} = useSelector((store) => ({
        admin: store.username
    }))
    const onClickDelete = async(event) =>{
        event.preventDefault();
        await deleteDirector(id);
        push("/");
        push("/director-feed");
    }
    const onClickUpdate = async() => {
        await dispatch(updateId(id,admin));
        push("/director-update");
    }
    return (
        <tr>
            <td>{directorName}</td>
            <td>{directorSurname}</td>
            <td>{explanation}</td>
            <td>{directorMovies}</td>
            { isLoggedIn && <td>
            <button className="btn btn-delete-link btn-sm " onClick={onClickDelete}>
                <span className="material-icons">
                    delete
                </span>
            </button>
            <button className="btn btn-sm btn-edit pl-2"onClick={onClickUpdate}>
                <span className="material-icons">
                    create
                </span>
            </button>
            </td> }
        </tr>
    );
};

export default DirectorView;