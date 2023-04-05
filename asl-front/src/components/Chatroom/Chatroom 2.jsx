import styles from './Chatroom.module.css'
import '98.css'

export default function Chatroom() {
  return (
    // <div className={styles.chatContainer} >
    <div className={styles.chatContainer}>
      <div className="title-bar">
        <div className="title-bar-text">A Window With Stuff In It</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={styles.chatWindow}>
        <div className="window-body">
          <p>There's so much room for activities!</p>
        </div>
      </div>
      <div className={styles.toolBar}>
        <select className={styles.select}>
          <option>Veranda</option>
          <option>Arial</option>
          <option>Other fonts</option>
        </select>
        <button className={styles.button}><span style={{
          color: 'blue',
          fontWeight: 'bolder'
        }}>A</span></button>
        <button className={styles.button}><span style={{
          fontWeight: '800'
        }}>B</span></button>
        <button className={styles.button}>
          <span style={{
            fontStyle: 'italic'
          }}>I</span>
        </button>
        <button className={styles.button}><span style={{
          textDecoration: 'underline',
        }}>u</span></button>
      </div>
    </div>
    // </div >
  )
}