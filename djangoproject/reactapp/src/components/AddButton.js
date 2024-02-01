import react from 'react';
import { Link } from 'react-router-dom';
import './AddButton.css';

const AddButton = () => {
    return (
        <Link to="/offer/new" className='add_button'>New offer</Link>
    )
}

export default AddButton