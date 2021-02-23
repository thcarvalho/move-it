import styles from '../styles/components/profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thcarvalho.png" alt="thcarvalho"/>
      <div>
        <strong>Thaian Carvalho</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1</p>
      </div>
    </div>
  )
}