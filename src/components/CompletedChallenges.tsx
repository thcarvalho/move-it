import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/completed-challenges.module.css';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);


  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}