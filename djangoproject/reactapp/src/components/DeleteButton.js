import './DeleteButton.css';

const DeleteButton = ({onClick}) => {
    return (
        <button className='delete_button' onClick={onClick}>DeleteOffer</button>
    )
}

export default DeleteButton

