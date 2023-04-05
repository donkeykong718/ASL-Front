import styles from './Chatroom.module.css'
import { parse } from 'node-html-parser';
import Parser from 'html-react-parser';

export default function ChatLine({ message }) {

  const { author, text } = message;

  const spanText = text.replace('<p>', '<span className={styles.chatText}>').replace('</p>', '</span>');
  const rtf = Parser(spanText)

  console.log(rtf)
  // console.log(rtf.childNodes[0]);
  // console.log(Parser(text))

  return (<p className={styles.message}>
    <span className={styles.chatUser}>{author}: </span>{rtf}</p>
  )
}