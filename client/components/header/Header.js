
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
        <header>
            <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Link href='/'>
                <div className={styles.logo}>
                    <img src='/SVG/LOGO-iusrt.svg'></img>
                    <p>Аутсорсинг <br></br> бухгалтерских услуг</p>
                </div>
              </Link>
              <div className={styles.email}>
                  <div className={styles.icon}>

                  </div>
                  <div className={styles.info}>
                      <h3>г. Лиски, ул. Коммунистическая, д. 24</h3>
                      <p>iusrt@mail.ru</p>
                      <hr></hr>
                  </div>

              </div>
              <div className={styles.phone}>
                <div className={styles.icon}>

                </div>
                <div className={styles.info}>
                    <h3>+7 (920) 464-20-72</h3>
                    <p>8.00-18.00 пн-сб</p>
                      <hr></hr>
                </div>
              </div>
              
            </div>
        </header>
        
        <div className={styles.subheader}>
            <div className={styles.container}>
                <ul>
                  <li><a href='/#services'>Услуги</a></li>
                  <li><a href='/#contacts'>Контакты</a></li>
                  <li><a href='/#partners'>Партнеры</a></li>
                  <Link href='/login'><li><a><b>Личный кабинет</b></a></li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}