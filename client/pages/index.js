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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Slider from '@mui/material/Slider';
import { Box } from '@mui/material'

const marksDocs = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 75,
    label: '75',
  },
  {
    value: 100,
    label: '100',
  },
  {
    value: 125,
    label: '125',
  },
  {
    value: 150,
    label: '150',
  },
  {
    value: 175,
    label: '175',
  },
  {
    value: 200,
    label: '200',
  },
  {
    value: 225,
    label: '225',
  },
  {
    value: 250,
    label: '250',
  },
];

const marksPeople = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}

export function DiscreteSliderMarks({marks, max}) {
  return (
    <Box fullWidth>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={+max / 10}
        valueLabelDisplay="auto"
        marks={marks}
        max={max}
      />
    </Box>
  );
}

export default function Home() {
  return (
    <div>
        <Header/>
        <main>
            <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles.main_offer}>
                    <h1>Доверьте учет своего бизнеса нам!</h1>
                    <div className={styles.main__list}>
                        <ul>
                          <li><i>•</i> Бухгалтерский учет</li>
                          <li><i>•</i> Налоговый учет</li>
                          <li><i>•</i> Кадровый учет </li>
                          <li><i>•</i> Всё прочее</li>
                        </ul>
                    </div>
                    
                    <a href='#tears'><button className={styles.main_button}>Войти в личный кабинет</button></a>
                    
                </div>
                <div className={styles.main_img}>
                  <img src='/main/a8adc8270125fd06b25c67f448691254.png'></img>
                </div>  
            </div>
        </main>
        <section className={styles.container} id="services">
            <div  className={styles.services_block} style={{display: 'flex', justifyContent: 'space-between'}}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B00FF"></stop>
                    <stop offset="100%" stopColor="#DF00FF"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M449 294.5q-46 44.5-92 53T280.5 388q-30.5 32-69 13.5T112 374q-61-9-73-66.5t12.5-108Q76 149 107 102.5t87-36q56 10.5 109.5 4t71.5 45q18 51.5 69 93t5 86z"
                ></path>
              </svg>
              <div className={styles.tears} >
                  <h1>Услуги</h1>
                  {/* <hr></hr> */}
                  <div className={styles.services}>
                      <div className={styles.service}>
                          <CalcIcon/>
                          <p>Бухгалтерская и налоговая отчетность</p>
                      </div>
                      <div className={styles.service}>
                          <ProcessIcon/>
                          <p>Обработка документов в программе 1С</p>
                      </div>
                      <div className={styles.service}>
                          <ReportIcon/>
                          <p>Сдача отчетности во все органы</p>
                      </div>
                      <div className={styles.service}>
                          <AccountingIcon/>
                          <p>Бухгалтерский учет ИП, ЕНВД, УСН, ОСН</p>
                      </div>
                      <div className={styles.service}>
                          <AnalyticsIcon/>
                          <p>Анализ и учет первичных док-ов</p>
                      </div>
                      <div className={styles.service}>
                          <TaxIcon/>
                          <p>Оптимизация налогообложения</p>
                      </div>
                      <div className={styles.service}>
                          <PeopleIcon/>
                          <p>Зарплата и кадры</p>
                      </div>
                      <div className={styles.service}>
                          <BankIcon/>
                          <p>Работа с банками</p>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        <section id="partners">
              <div className={styles.tears} >
                <div className={styles.container}>
                  <h1>Партнеры</h1>
                <div className={styles.partners}>
                    <img src='/partners/sberbank.jpg'></img>
                    <img src='/partners/vtb.jpg'></img>
                    <img src='/partners/glavbuh.jpg'></img>
                    <img src='/partners/i.jfif'></img>
                </div>
                </div>

              </div>
        </section>
        <section id="contacts" className={styles.container}>
              <div className={styles.tears} >
                
                <h1>Контакты</h1>
                  <div className={styles.contacts}>
                      <div className={styles.contacts_info}>
                        <img src="/main/contacts.jpg"></img>
                        <div>
                          <h2>ИП Холодкова Юлия Михайловна</h2>  
                          <h3>ИНН</h3>  
                          <p>365200092646</p> 
                          <h3>ОГРНИП</h3>  
                          <p>304365211200042</p>   
                          <h3>Адрес</h3>  
                          <p>г. Лиски, ул. Коммунистическая, д. 24</p>                   
                          <h3>Телефон</h3>          
                          <p>+7 (920) 464-20-72</p>   
                        </div>    
                      </div>
                      <div className={styles.map}>
                          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f7f12aa6c1f9fd133c9b99c31ecc488dac08064c864d16c86982660d3ca860f&amp;source=constructor" width="100%" height="560" frameborder="0"></iframe>
                      </div>
                  </div>
            </div>
        </section>
        <footer>
          <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className={styles.logo}>
                  <img src='/LOGO_WHITE.svg'></img>
                  <p>Аутсорсинг <br></br> бухгалтерских услуг</p>
              </div>
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
