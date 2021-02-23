import styles from '../styles/components/experience-bar.module.css'

export default function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}} />
        <span className={styles.currentExperience} style={{left: '50%'}}>
          200 xp
        </span>
      </div>
      <span>400 xp</span>
    </header>
  )
}