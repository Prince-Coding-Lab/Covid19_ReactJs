import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import moment from 'moment';

const CustomBarComponent = ({ x, y, width, height, color }) => (
  <circle
    cx={x + width / 2}
    cy={y + height / 2}
    r={Math.min(width, height) / 2}
    fill={color}
  />
);

const Bar = () => {
  const [data, setData] = useState([]);
  let canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
  let top;
  let isMobile;
  if (canUseDOM) {
    isMobile = global.window.innerWidth < 768;
    top = isMobile ? 3 : 5;
  }
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 4);
  let url = `https://covid19.mathdro.id/api/daily/${moment(yesterday).format(
    'M-D-YYYY'
  )}`;
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(url).then(result => result.json());
      setData(
        [...result].sort((a, b) => b.confirmed - a.confirmed).slice(0, top)
      );
    }
    fetchData();
  }, [url]);
  if (!data) return <p>Loading...</p>;
  return (
    <div className='bar'>
      <h3>Top {isMobile ? 3 : 5} Countries Till Yesterday</h3>
      <ResponsiveBar
        data={data}
        keys={['deaths', 'recovered', 'confirmed']}
        indexBy='countryRegion'
        margin={{
          top: 10,
          right: isMobile ? 2 : 200,
          bottom: 50,
          left: isMobile ? 60 : 200
        }}
        colors={{ scheme: 'nivo' }}
        innerPadding={4}
        barComponent={CustomBarComponent}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Country',
          legendPosition: 'middle',
          legendOffset: 42
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 2,
          tickRotation: 0,
          legend: 'Total COVID-19 Cases',
          legendPosition: 'middle',
          legendOffset: -50
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.45,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default Bar;
