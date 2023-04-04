import styles from './Chatroom.module.css'

export default function ListBuddy({ user }) {

  const { username } = user;

  return (
    <p className={styles.activeUser}>{username}</p>
  )

}
