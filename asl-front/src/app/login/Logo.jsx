import styles from './Login.module.css'
import Image from 'next/image'


export default function LogoBox() {
  return (
    <div className={styles.aolBox}>
      <div className={styles.logoContainer}>
        <Image
          src="/assets/images/cool-man.png"
          alt=""
          height={200}
          width={200}
          className={styles.logo}
        />
      </div>
      <div className={styles.ASLTitle}>
        <Image
          src="/assets/images/ASL-logo-text.png"
          alt=""
          height={75}
          width={200}
          className={styles.ASLLogo}
        />
      </div>
    </div>)
}