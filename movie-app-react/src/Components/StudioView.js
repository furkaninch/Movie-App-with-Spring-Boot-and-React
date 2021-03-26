import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteStudio } from '../Api-Calls/apiCalls';
import { updateId } from '../redux/authActions';

const StudioView = (props) => {
    const {studio} = props;
    const {studioName,explanation,numberOfMovies,id} = studio;
    const {push} = useHistory();
    const dispatch = useDispatch();
    const{isLoggedIn} = useSelector((store) => ({
        isLoggedIn: store.isLoggedIn
    }))
    const{admin} = useSelector((store) => ({
        admin: store.username
    }))

    const onClickDelete = async event => {
        event.preventDefault();
        await deleteStudio(id);
        push("/");
        push("/studio-feed");
    }
    const onClickUpdate = async() => {
        await dispatch(updateId(id,admin));
        push("/studio-update");
    }
    return (
        <tr>
            <td>{studioName}</td>
            <td>{explanation}</td>
            <td>{numberOfMovies}</td>
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

export default StudioView;