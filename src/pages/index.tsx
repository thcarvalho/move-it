import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/home.module.css';

interface HomeProps {
  level: number,
  currentXP: number,
  challengesCompleted: number
}

function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentXP={props.currentXP}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentXP, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home;
