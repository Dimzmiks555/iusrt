import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AccountingIcon from './icons/accounting'
import AnalyticsIcon from './icons/analytics'
import BankIcon from './icons/bank'
import CalcIcon from './icons/calc'
import PeopleIcon from './icons/people'
import ProcessIcon from './icons/process'
import ReportIcon from './icons/report'
import TaxIcon from './icons/tax'

export default function Home() {
  return (
    <div>
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
                  <li><a href='/#tears'>Тарифы</a></li>
                  <li><a href='/#contacts'>Контакты</a></li>
                  <li><a href='/#partners'>Партнеры</a></li>
                  <li><a><b>Личный кабинет</b></a></li>
                </ul>
            </div>
        </div>
        <main>
            <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles.login}>
                    <div className={styles.sign_in}>
                        <h2>Войти</h2>
                        <form>
                            <label>Номер телефона</label>
                            <input placeholder='89876543210'></input>
                            <label>Пароль</label>
                            <input type="password" placeholder='Ваш пароль'></input>
                            <button>Войти</button>
                        </form>
                    </div>
                    <div className={styles.registration}>
                        <h2>Регистрация</h2>
                        <form>
                            <label>Имя</label>
                            <input type="password" placeholder='Иван'></input>
                            <label>Фамилия</label>
                            <input type="password" placeholder='Иванов'></input>
                            <label>Электронная почта</label>
                            <input type="password" placeholder='example@domain.ru'></input>
                            <label>Номер телефона</label>
                            <input placeholder='89876543210'></input>
                            <button>Подать заявку на регистрацию</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <footer>
          <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              
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
    </div>
  )
}
