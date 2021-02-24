import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/challenge-box.module.css';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
              <strong>Novo Desafio</strong>
              <p>
                {activeChallenge.description}
              </p>
            </main>
            <footer>
              <button onClick={resetChallenge} type="button" className={styles.challengeFailedButton}>Falhei</button>
              <button onClick={() => { }} type="button" className={styles.challengeSucceededButton}>Completei</button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="level up" />
            Avance de nível completando os desafios
          </p>
          </div>
        )
      }
    </div>
  )
}