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
    const showAllButtonVisible = allDonations.length > dataLength;
    return (
        <div className="container mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 py-5">
                {
                    allDonations.slice(0, dataLength).map((donation, idx) => <Donation key={idx} donation={donation}></Donation>)
                }
            </div>
            {
                allDonations.length === 0 &&
                (
                    <div className='flex justify-center items-center h-[80vh]'>
                        <p className='text-5xl text-center font-bold text-red-500'>You Have No Donations</p>
                    </div>
                )
            }
            {
                showAllButtonVisible && (
                    <div className={dataLength === donations.length ? 'hidden' : 'flex justify-center py-2'}>
                        <button onClick={() => setDataLength(donations.length)} className="bg-green-700 text-white font-semibold rounded-md text-center py-2 px-3">Show All</button>
                    </div>
                )

            }


        </div>
    );
};

export default Donations;