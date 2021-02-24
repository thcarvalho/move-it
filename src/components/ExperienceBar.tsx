import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/experience-bar.module.css'

export default function ExperienceBar() {
  const { currentXP, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentXP * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />
        <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
          {currentXP} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}