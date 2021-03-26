import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteMovie } from '../Api-Calls/apiCalls';
import { updateId } from '../redux/authActions';

const MoviesView = (props) => {
    const {movie} = props;
    const {movieName,imdbScore,explanation,director,studio,id} = movie;
    const {push} = useHistory();
    const dispatch = useDispatch();
    const{isLoggedIn} = useSelector((store) => ({
        isLoggedIn: store.isLoggedIn,
    }))
    const{admin} = useSelector((store) => ({
        admin: store.username
    }))
    
    const onClickDelete = async event => {
        event.preventDefault();
        await deleteMovie(id);
        push("/");
        push("/movie-feed");
    }

    const onClickUpdate = async() => {
        await dispatch(updateId(id,admin));
        push("/movie-update");
    }

    return (
                <tr>
                    <td>{movieName}</td>
                    <td>{imdbScore}</td>
                    <td>{explanation}</td>
                    <td>{director}</td>
                    <td>{studio}</td>
                    { isLoggedIn && <td>
                    <button className="btn btn-delete-link btn-sm " onClick={onClickDelete}>
                        <span className="material-icons">
                            delete
                        </span>
                    </button>
                    <button className="btn btn-sm btn-edit pl-2" onClick={onClickUpdate}>
                        <span className="material-icons">
                            create
                        </span>
                    </button>
            </td> }
                </tr>
           
     
    );
};

export default MoviesView;