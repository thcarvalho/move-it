import '../styles/components/experience-bar.css'

export default function ExperienceBar() {
  return (
    <header id="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}} />
        <span className="current-experience" style={{left: '50%'}}>
          200 xp
        </span>
      </div>
      <span>400 xp</span>
    </header>
  )
}