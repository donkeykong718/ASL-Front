import styles from './Chatroom.module.css'

export default function ListBuddy({ message }) {

  const { author, text } = message;

  return (
    <p className={styles.message}>{author}: {text}</p>
  )
}