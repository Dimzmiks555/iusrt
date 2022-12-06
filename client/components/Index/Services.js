import React from 'react'
import styles from './Services.module.css'
import AccountingIcon from '../../icons/accounting'
import AnalyticsIcon from '../../icons/analytics'
import BankIcon from '../../icons/bank'
import CalcIcon from '../../icons/calc'
import PeopleIcon from '../../icons/people'
import ProcessIcon from '../../icons/process'
import ReportIcon from '../../icons/report'
import TaxIcon from '../../icons/tax'

export const Services = () => {
  return (
    <section className='container' id="services">
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
            <div className="tears" >
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
  )
}
