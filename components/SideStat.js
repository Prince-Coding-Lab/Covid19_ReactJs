import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatBlock = styled.div`
  padding: 0.5em;
  font-size: 0.8rem;
`;

export default function Stats({ url }) {
  const { stats } = useStats(url);
  if (!stats) return <p>Loading...</p>;
  return (
    <div className='sidestat'>
      <h1>Global Stat 🌏</h1>
      <StatBlock>
        <span>
          ● <b>{stats.confirmed.value}</b> confirmed cases
        </span>
      </StatBlock>
      <StatBlock>
        <span>
          ● <b>{stats.deaths.value}</b> death cases
        </span>
      </StatBlock>
      <StatBlock>
        <span>
          ● <b>{stats.recovered.value}</b> recover cases
        </span>
      </StatBlock>
    </div>
  );
}
