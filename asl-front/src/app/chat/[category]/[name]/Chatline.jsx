import styles from '../../Chatroom.module.css'
// import { parse } from 'node-html-parser';
import Parser from 'html-react-parser';

export default function ChatLine({ message }) {

  console.log(message)
  const { content, from_user } = message;
  let rtf;
  const spanText = content?.replace('<p>', '<span className={styles.chatText}>').replace('</p>', '</span>');
  if (spanText) {
    rtf = Parser(spanText);
  }

  // console.log(rtf)
  // // console.log(rtf.childNodes[0]);
  // // console.log(Parser(text))

  return (
    <>
      {rtf ?
        <p className={styles.message} >
          <span className={styles.chatUser}>{(from_user != 'Host') ? <>{from_user.username}</> : <>{from_user}</>}</span>: {rtf}</p>
        : <></>}
    </>

  )
}