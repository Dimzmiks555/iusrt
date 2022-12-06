import React from 'react'


import styles from './Partners.module.css'

export const Partners = () => {
  return (
    <section id="partners">
        <div className="tears" >
            <div className="container">
                <h1>Партнеры</h1>
                
            </div>
                <div className={styles.partners}>
                    <img src='/partners/sberbank.jpg'></img>
                    <img src='/partners/vtb.jpg'></img>
                    <img src='/partners/glavbuh.jpg'></img>
                    <img src='/partners/i.jfif'></img>
                </div>

        </div>
    </section>
  )
}
