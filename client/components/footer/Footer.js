import Link from 'next/link'
import React from 'react'

import styles from '../../styles/Home.module.css'

export  const Footer = () => {
  return (
    
    <footer>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            
        <Link href='/'>
            <div className={styles.logo}>
                <img src='/LOGO_WHITE.svg'></img>
                <p>Аутсорсинг <br></br> бухгалтерских услуг</p>
            </div>
        </Link>
            <div className={styles.email}>
                <div className={styles.icon}>

                </div>
                <div className={styles.info}>
                    <h3>г. Лиски, ул. Коммунистическая, д. 24</h3>
                    <p>iusrt@mail.ru</p>
                </div>

            </div>
            <div className={styles.phone}>
            <div className={styles.icon}>

            </div>
            <div className={styles.info}>
                <h3>+7 (920) 464-20-72</h3>
                <p>8.00-18.00 пн-сб</p>
            </div>
            </div>
            
        </div>
    </footer>
  )
}
