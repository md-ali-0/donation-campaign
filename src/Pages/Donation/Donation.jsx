import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {
    const { id, cat_image, title, category, category_bg, card_bg, color } = donation;

    const cardStyle = {
        background: card_bg,
    };

    const categoryStyle = {
        background: category_bg,
        color: color
    };
    const buttonStyle = {
        background:color
    }
    const titleStyle = {
        color: color
    };
    return (
        <div className="flex">
            <img className='w-36 md:w-auto' src={cat_image} alt="" />
            <div className="rounded-e-lg p-2 md:p-5 w-full" style={cardStyle}>
                <button className='rounded-md py-1 px-2 my-2' style={categoryStyle}>{category}</button>
                <h3  className='my-2 text-base md:text-xl font-bold' style={titleStyle}>{title}</h3>
                <button className="text-white text-xl rounded-lg py-1 px-2 my-2" style={buttonStyle}><Link to={`/donation/${id}`} >View Details</Link></button>
            </div>
        </div>
    );
};
Donation.propTypes = {
    donation: PropTypes.object.isRequired,
};
export default Donation;