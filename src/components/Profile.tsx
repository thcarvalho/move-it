import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thcarvalho.png" alt="thcarvalho"/>
      <div>
        <strong>Thaian Carvalho</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}</p>
      </div>
    </div>
  )
}