import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const localStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations')

    if (storedDonations) {
        return JSON.parse(storedDonations)
    } else {
        return [];
    }
}
    
const saveDonations = (id) => {
    const getStoredDonations = localStoredDonations();

    const exists = getStoredDonations.find(donationId => donationId === id);

    if (!exists) {
        getStoredDonations.push(id)
        localStorage.setItem('donations', JSON.stringify(getStoredDonations))
        toast.success('Thank You for Your Donation', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    } else {
        toast.error('You Already Give Donation for This!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    
};

export {saveDonations, localStoredDonations};