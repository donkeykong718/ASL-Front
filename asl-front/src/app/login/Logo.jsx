import styles from './Login.module.css'
import Image from 'next/image'


export default function LogoBox() {

  const rickRolls = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=hGlyFc79BUE", "https://www.youtube.com/watch?v=q3XezETe7JY", "https://www.youtube.com/watch?v=Pk-kbjw0Y8U"]

  const easterEgg = Math.floor(Math.random() * rickRolls.length);

  return (
    <div className={styles.aolBox}>
      <div className={styles.logoContainer}>
        <a href={rickRolls[easterEgg]} target='_blank'>
          <Image
            src="/assets/images/cool-man.png"
            alt=""
            height={150}
            width={150}
            className={styles.logo}
          /></a>
      </div>
      <div className={styles.ASLTitle}>
        <Image
          src="/assets/images/ASL-logo-text.png"
          alt=""
          height={50}
          width={150}
          className={styles.ASLLogo}
        />
      </div>
    </div>)
}