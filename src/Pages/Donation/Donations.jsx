import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { localStoredDonations } from "../../Utility/LocalStorage";
import Donation from "./Donation";

const Donations = () => {
    const donations = useLoaderData();
    const [allDonations, setAllDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storedDonationsIds = localStoredDonations();
        if (donations.length > 0) {
            const totalDonations = donations.filter(donations => storedDonationsIds.includes(donations.id))
            setAllDonations(totalDonations)
        }
    }, [donations])
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-3">
                {
                    allDonations.slice(0,dataLength).map((donation, idx) => <Donation key={idx} donation={donation}></Donation>)
                }
            </div>
            <div className={dataLength === donations.length ? 'hidden' : 'flex justify-center py-2'}>
                <button onClick={() => setDataLength(donations.length)} className="bg-green-700 text-white font-semibold rounded-md text-center py-2 px-3">Show All</button>
            </div>
            <div className={dataLength === donations.length ? 'flex justify-center py-2' : 'hidden'}>
                <button onClick={() => setDataLength(4)} className="bg-green-700 text-white font-semibold rounded-md text-center py-2 px-3">Show Less</button>
            </div>
        </div>
    );
};

export default Donations;