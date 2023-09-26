import { useLoaderData } from "react-router-dom";
import CardDonation from "../Donation/CardDonation";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    const [searchValue, setSearchValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleSearch = ()=>{
        setSearchValue(inputValue)
    }
    return (
        <div>
            <div className="relative bg-[length:100%] bg-no-repeat bg-center-top after:content[*] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-white after:bg-opacity-90 h-[80vh] w-full" style={{ backgroundImage: 'url(./banner.png)' }}>
            </div>
            <div className="absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-xl md:text-4xl font-bold py-2 md:py-5">I Grow By Helping People In Need</h3>
                <div className="flex flex-col justify-center items-center md:flex-row">
                    <input id='searchInputId' className="block md:inline border border-gray-300 outline-none rounded-lg md:rounded-e-none md:rounded-s-lg py-3 my-2 md:my-0 px-5" type="text" placeholder="Search here...." onChange={(event)=>setInputValue(event.target.value)}/>
                    <button onClick={handleSearch} className="bg-red-500 border border-red-300 text-white rounded-lg md:rounded-s-none md:rounded-e-lg py-3 px-5">Search</button>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10 px-3">
                    {
                        donations.filter(donation=>{
                            if (searchValue === '') {
                                return donation;
                            } else if(donation.category.toLowerCase().includes(searchValue.toLowerCase())){
                                return donation;
                            }
                        }).map(donation => <CardDonation key={donation.id} donation={donation}></CardDonation>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;