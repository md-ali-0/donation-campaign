import { useState, useEffect } from 'react';
import { localStoredDonations } from "../../Utility/LocalStorage";
import { VictoryPie } from 'victory-pie';

const Statistics = () => {
    const [donations, setDonations] = useState(0);
    const [totalDonations, setTotalDonations] = useState(0);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setTotalDonations(data.length))

        const storedDonationsIds = localStoredDonations();
        setDonations(storedDonationsIds.length);
    }, []);

    const donationPercentage = (donations / totalDonations) * 100;
    const leftPercent = 100 - donationPercentage

    const chartData = [
        { x: leftPercent.toFixed(2) , y: leftPercent.toFixed(2)  },
        { x: donationPercentage.toFixed(2) , y: donationPercentage.toFixed(2)  },
    ];

    return (
        <div className='container mx-auto'>
        {chartData[1].x === 0 && chartData[1].y === 0 ? (
            <div className='flex justify-center items-center h-[80vh]'>
                <p className='text-5xl text-center font-bold text-red-500'>Make Donate To <br /> See Statistics</p>
            </div>
        ) : (
          <div style={{ height: 520 }}>
            <VictoryPie data={chartData} colorScale={["#FF444A", "#00C49F"]} radius={100} />
            <div className='flex justify-center gap-3'>
              <p>Your Donation <span className='bg-[#00C49F] py-[1px] px-10 mx-2'></span></p>
              <p>Total Donation <span className='bg-[#FF444A] py-[1px] px-10 mx-2'></span></p>
            </div>
          </div>
        )}
      </div>
    );
};

export default Statistics;