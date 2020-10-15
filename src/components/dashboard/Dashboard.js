import React from 'react';
import Weather from './Weather';
import WeeklySales from './WeeklySales';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-6 col-xxl-3 mb-3 pr-md-2">
          <WeeklySales data={[6000, 10000, 7500, 4000, 3500, 5500, 6000]} />
        </div>
        <div className="col-md-6 col-xxl-3 mb-3 pl-md-2 pr-xxl-2">
          {/* <TotalOrder data={totalOrder} /> */}
        </div>
        <div className="col-md-6 col-xxl-3 mb-3 pr-md-2 pl-xxl-2">
          {/* <MarketShare data={marketShare} /> */}
        </div>
        <div className="col-md-6 col-xxl-3 mb-3 pl-md-2">
          <Weather
            data={{
              city: 'New York City',
              condition: 'Sunny',
              precipitation: '50%',
              temperature: 31,
              highestTemperature: 32,
              lowestTemperature: 25,
            }}
            className="h-md-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
