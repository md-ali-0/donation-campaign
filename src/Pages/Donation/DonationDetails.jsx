import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonations } from "../../Utility/LocalStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();

    const donation = donations.find(donation => donation.id === parseInt(id));
    const { image, title, description, color, price } = donation;

    const buttonStyle = {
        background: color,
    };

    const handleDonations = ()=>{
        saveDonations(parseInt(id))
    }
    return (
        <div className="container mx-auto px-3">
            <div className="relative">
                <img className="w-full rounded-2xl h-auto md:h-[550px]" src={image} alt="" />
                <div className="absolute w-full rounded-b-2xl bg-gray-600 left-0 bottom-0 bg-opacity-50 py-5 px-3">
                    <button onClick={handleDonations} style={buttonStyle} className="text-white font-semibold rounded-md text-center py-2 px-3">Donate {price}</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-3xl font-bold py-3">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;