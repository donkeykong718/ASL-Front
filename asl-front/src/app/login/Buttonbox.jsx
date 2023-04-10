import styles from './Login.module.css'
import Image from 'next/image'

export default function ButtonBox() {

  return (
    <div className={styles.loginBottomBtns}>
      <button className={styles.helpBtn}>
        <Image src="/assets/images/helpbtn.png" alt="Help Button"
          height={38}
          width={38} />
      </button>

      <div className={styles.loginBottomBtns}>
        <button className={styles.setupBtn}>
          <Image src="/assets/images/setupbtn.png" alt="Set Up Button"
            height={38}
            width={38} />
        </button>
      </div>

      <div className={styles.loginBottomBtns}>

        <button
          className={styles.signupBtn}
        >
          <Image
            height={38}
            width={38}
            src="/assets/images/cool-man.png" alt="logo"
          />
          Sign-up
        </button>
      </div>
    </div>
  )

}