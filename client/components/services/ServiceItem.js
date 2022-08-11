import { Box, Chip } from '@mui/material'
import React from 'react'
import styles from './ServiceItem.module.css'


export const ServiceItem = () => {
  return (
    <Box sx={{p:3, border: '2px solid #eee', borderRadius: '20px', display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box>
                <h3>Пакет услуг № 3 <span className={styles.error_chip} >Требуется оплата</span></h3>
            </Box>
            <h4 className={styles.subtitle}>НДФЛ</h4>
            <Box sx={{display: 'flex'}}>
                <a className={styles.download_link}><button  className='action_button' variant="contained">Подробнее</button></a>
                <button className='secondary_button' >Прикрепить</button>
            </Box>
        </Box>
        <Box>
            <h3></h3>
        </Box>
        <Box sx={{textAlign: 'right'}}>
            <p>23.12.2021</p>
            <h2 className={styles.summ}>20000,00₽</h2>
        </Box>
    </Box>
  )
}
