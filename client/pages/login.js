import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import AccountingIcon from './icons/accounting'
import AnalyticsIcon from './icons/analytics'
import BankIcon from './icons/bank'
import CalcIcon from './icons/calc'
import PeopleIcon from './icons/people'
import ProcessIcon from './icons/process'
import ReportIcon from './icons/report'
import TaxIcon from './icons/tax'
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div>
        <Header/>
        <main>
            <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles.login}>
                    <div className={styles.sign_in}>
                        <h2>Войти</h2>
                        <form>
                          <TextField label="Номер телефона" sx={{width: 300, mb: 4}} ></TextField>
                          <TextField label="Пароль" sx={{width: 300, mb: 4}}></TextField>
                            <button>Войти</button>
                        </form>
                    </div>
                    <div className={styles.registration}>
                        <h2>Регистрация</h2>
                        <form>
                          <TextField label="Имя" sx={{width: 300, mb: 4}} ></TextField>
                          <TextField label="Фамилия" sx={{width: 300, mb: 4}}></TextField>
                          <TextField label="Номер телефона" sx={{width: 300, mb: 4}} ></TextField>
                          <TextField label="Электронная почта" sx={{width: 300, mb: 4}}></TextField>
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
