import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardDonation = ({ donation }) => {
    const { id, image, title, category, category_bg, card_bg, color} = donation;

    const cardStyle = {
        borderRadius: '8px',
        background: card_bg,
    };

    const categoryStyle = {
        background: category_bg,
        color: color,
    };

    const titleStyle = {
        color: color,
        fontSize: '20px',
        fontWeight: 600,
    };

    return (
        <Link to={`/donation/${id}`} >
            <div className='pb-3' style={cardStyle}>
                <img className='w-full' src={image} alt="" />
                <div className='p-3'>
                    <button className='rounded-md py-1 px-2' style={categoryStyle}>{category}</button>
                    <h3 style={titleStyle}>{title}</h3>
                </div>

            </div>
        </Link>
    );
};

CardDonation.propTypes = {
    donation: PropTypes.object.isRequired,
};

export default CardDonation;
