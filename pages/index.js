import SideState from '../components/SideStat';
import Country from '../components/Country';
import { createGlobalStyle } from 'styled-components';
import Logo from '../components/Logo';
import Github from '../components/Github';
import Head from 'next/head';
import moment from 'moment';
import Bar from '../components/Bar';

import LogRocket from 'logrocket';
LogRocket.init('iusl8y/corona');

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
html {
  font-family: 'Quicksand', sans-serif;
    body {
        display: grid;
        justify-content: center;
        align-items: center;
        background: linear-gradient(225deg,#006550,#071700);
        color: #eaeaea;
    }
}
*, *:after, *:before {
    margin: 0;
    padding: 0
}
section {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1em;
    padding: 1em 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1340px;
    background: #307e57;
    position: relative;
    @media (max-width: 460px) {
    }
    .countrystat {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.5em;
      padding: 1em 2em;
      border-radius: 20px;
      background: #307e57;
      box-shadow: 20px 20px 60px #296b4a, -20px -20px 60px #379164;
      h2 {
        grid-column: 1 / 3;
        grid-row: 1;
      }
      div {
        grid-row: 2;
        &:nth-child(1) {
          grid-column: 1;
        }
        &:nth-child(2) {
          grid-column: 2;
        }
        &:nth-child(3) {
          grid-column: 3;
        }
      }
      label {
        position: relative;
        &:after {
          content: '▾';
          font-size: 20px;
          font-weight: bolder;
          position: absolute;
          bottom: 14px;
          left: 90px;
        }
        select {
          grid-column: 3;
          grid-row: 1;
          border: none;
          border-radius: 21px;
          padding: 1em;
          background: #307e57;
          box-shadow: inset 20px 20px 60px #296b4a, inset -20px -20px 60px #379164;
          color: white;
          width: 120px;
          font-size: 16px;
          color: #eaeaea;
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          -o-appearance: none;
          appearance: none;
          position: relative;
          &:focus {
            outline: none;
          }
        }
      }
      p {
        grid-column: 1 / 4;
        font-size: 11px;
      }
      @media (max-width: 768px) {
        padding: 1em;
        grid-gap: .7em;
        align-items: center;
        justify-self: center;
        h2 {
          font-size: 0.9em;
        }
        label {
          select {
            font-size: 0.9em;
            width: 100px;
          }
        }
        div {
          grid-row: 2;
          &:nth-child(3) {
            grid-column: 1 / 2;
          }
        }
        div + div {
          grid-row: 2;
          grid-column: 2 / 3;
        }
        div + div + div {
          grid-row: 2;
          grid-column: 3 / 4;
        }
      }
    }
    .stat-value {
      text-align: center;
      padding: 2em 0;
      h3 {
        font-size: 2.5em;
        font-weight: 100;
      }
      span {
        font-size: 0.9em;
        font-weight: 100;
      }

      @media (max-width: 768px) {
        padding: .5em 0;
        h3 {
          font-size: 1.5em;
          font-weight: 100;
        }
      }
    }
    .sidestat {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: .3rem;
      padding: 1em 2em;
      h1 {
        font-size: 1em;
        margin-bottom: 1em;
      }
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 1em 0;
        align-items: center;
        background: #eaeaea;
        border-radius: 21px;
        color: #333;
        margin-top: 1em;
        div > span {
          font-size: .9em;
        }
      }
    }
    .bar {
      grid-row: 3;
      grid-column: 1 / 4;
      height: 600px;
      margin-top: 2rem;
      box-shadow: none;
      h3 {
        text-align: center;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    .para {
        padding: 2em;
        text-align: center;
        font-size: 14px;
        grid-row: 2;
        grid-column: 1 / 2;
        @media (max-width: 768px) {
          padding: 1em;
        }
    }
    .tips {
      grid-row: 4;
      grid-column: 1 / 4;
      font-size: 12px;
      font-style: italic;
      text-align: center;
      padding: 2em;
      margin-top: 2em;
    }
    header {
      grid-column: 1 / 4;
      grid-row: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        fill: #eaeaea;
      }
      span {
        font-size: 2em;
      }
      .date {
        font-size: 1em;
        background: linear-gradient(145deg, #2b714e, #33875d);
        box-shadow:  20px 20px 60px #296b4a, 
                    -20px -20px 60px #379164;
        color: #white;
        border-radius: 50px;
        padding: 1em;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        svg {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          fill: #eaeaea;
        }
        .date {
          font-size: .7em;
          padding: 1em;
        }
      }
      .para {
        grid-column: 1;
        grid-row: 1 / 2;
        text-align: center;
      }
      > div {
        grid-column: 1;
        grid-row: 2 / 3;
        width: calc(100% - 90px);
        background: #307e57;
        box-shadow: 20px 20px 60px #296b4a, -20px -20px 60px #379164;
      }
      div + div {
        grid-column: 1;
        grid-row: 3 / 4;
      }
    }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
      font-size: 10px;
      a {
        text-decoration: none;
        color: #eaeaea;
      }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    span {
      padding: 0 1em;
    }
  }
} 
`;

export default function IndexPage() {
  return GlobalStyle ? (
    <>
      <Head>
        <title>COVID19 - Corona Virus</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <meta property='og:title' content='COVID19 - Corona Virus' />
        <meta property='og:site_name' content='Corona Flu' />
        <meta property='og:url' content='http://coronaa.netlify.com/' />
        <meta
          property='og:description'
          content='coronavirus is a novel virus named for the crownlike spikes that protrude from its surface. The coronavirus can infect both animals and people and can cause a range of respiratory illnes.'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://thenypost.files.wordpress.com/2019/04/ocean-virus.jpg?quality=80&strip=all'
        />
      </Head>
      <GlobalStyle />
      <section>
        <header>
          <div>
            <Logo />
            <span>COVID-19</span>
          </div>
          <span className='date'>{moment(new Date()).format('ll')}</span>
        </header>
        <p className='para'>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          new virus that had not been previously identified in humans.
        </p>
        <Country />
        <SideState url='https://covid19.mathdro.id/api' />
        <Bar />
        <p className='tips'>
          <span>Precautions: </span>
          Wash your hands frequently ● Maintain social distance ● Avoid touching
          eyes, nose and mouth ● If you have fever, cough and difficulty
          breathing, seek medical care early ● Cover coughs and sneezes ● Stay
          home if you’re sick
        </p>
      </section>
      <footer>
        <span>
          <a
            href='http://moengage.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered By Moengage
          </a>
        </span>
        <span>
          <a
            href='https://github.com/mathdroid/covid-19-api'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github /> Api by mathdroid
          </a>
        </span>
        <span>
          <Github /> Made by{' '}
          <a
            href='https://github.com/rajanmagar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <u>rajan</u>
          </a>{' '}
          @2020
        </span>
        <span>
          <a
            href='https://www.buymeacoffee.com/kUHJuif'
            target='_blank'
            rel='noopener noreferrer'
          >
            ☕ Buy me a coffe
          </a>
        </span>
      </footer>
    </>
  ) : (
    'Loading..'
  );
}
