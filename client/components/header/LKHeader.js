
import styles from './Header.module.css'
import Link from 'next/link'
import ClientStore from '../stores/ClientStore'
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import {observer} from 'mobx-react'
import { useRouter } from "next/router";

const LKHeader = observer(({user}) => {

    const router = useRouter();

  useEffect(() => {
    if (typeof window != 'undefined') {
      if (!localStorage.getItem('token')) {
      } else {  
          const data = jwtDecode(localStorage.getItem('token'))
          
          fetch(`http://localhost:5000/client/${data.id}`)
          .then(res => res.json())
          .then(json => {
            ClientStore.setUserData(json)
            console.log(json)
          })

        }
      }

      
  }, [ClientStore.isAuth])


    return (
        <>
        <header>
            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                      {/* <hr></hr> */}
                  </div>

              </div>
              <div className={styles.phone}>
                <div className={styles.icon}>

                </div>
                <div className={styles.info}>
                    <h3>+7 (920) 464-20-72</h3>
                    <p>8.00-18.00 пн-сб</p>
                      {/* <hr></hr> */}
                </div>
              </div>
              
            </div>
        </header>
        
        <div className={styles.subheader}>
            <div className="container">
                <ul>
                    <Link href='/lk'><li><a className={router.pathname == "/lk" ? "active_link" : ""}>Личный кабинет</a></li></Link>
                    <Link href='/lk/receipts'><li><a  className={router.pathname == "/lk/receipts" ? "active_link" : ""}>Квитанции</a></li></Link>
                    <Link href='/lk/services'><li><a className={router.pathname == "/lk/services" ? "active_link" : ""}>Услуги</a></li></Link>
                    {ClientStore.client?.id ? <Link href='/lk'><li><a><b>{ClientStore.client?.id ? ClientStore.client?.sur_name + ' ' + ClientStore.client?.first_name : 'Личный кабинет'}</b></a><a className={styles.logout_button} onClick={e => {ClientStore.logout()}}>Выйти</a></li></Link> : <Link href='/login'><li><a><b>Личный кабинет</b></a></li></Link>}
                    
                    
                </ul>
            </div>
        </div>
        </>
    )
})

export default LKHeader