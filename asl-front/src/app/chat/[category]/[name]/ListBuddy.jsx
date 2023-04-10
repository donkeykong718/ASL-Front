import styles from '../../Chatroom.module.css'

export default function ListBuddy({ user }) {

  // const { username } = user;
  // console.log('List buddy user is' + user);

  return (
    <p className={styles.activeUser}>{user}</p>
  )

}
