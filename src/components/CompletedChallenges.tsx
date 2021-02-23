import styles from '../styles/components/completed-challenges.module.css';

export default function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  )
}