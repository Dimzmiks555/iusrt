import React from 'react'

import styles from './Contacts.module.css'

export const Contacts = () => {
  return (
    <section id="contacts" className="container">
        <div className="tears" >
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
  )
}
