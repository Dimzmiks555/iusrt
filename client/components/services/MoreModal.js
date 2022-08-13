import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import styles from './ServiceItem.module.css'
import AccountingIcon from '../../icons/accounting'



export const MoreModal = ({open, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
        <DialogContent>
            <Box>

                <Box>
                    <h2 style={{display: 'flex', alignItems: 'center'}}>Пакет квитанций № 12 <span className={styles.error_chip} >Требуется оплата</span></h2>
                        <small>12.02.2022</small>
                </Box>

                <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{width: 320, mr: 2}}>
                        <h3 className={styles.subtitle}>НДФЛ</h3>
                        <p>Carbon — экспериментальный язык программирования общего назначения, созданный компанией Google как «преемник C++». Инженер Google Чендлер Каррут впервые представил Carbon на конференции CppNorth в июле 2022 года.ну типо комментарий</p>
                    </Box>
                    <Box sx={{mr: 2}}>
                        <b style={{textAlign: 'right'}} className={styles.summ}>20000 ₽</b>
                        <h3>Файлы</h3>
                        <Box>
                            <Box className={styles.file}>
                                <AccountingIcon/>
                                <button className='action_button'>Скачать</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            {/* {
                receipt?.files?.map(file => (
                    <Box className={styles.fileWrapper} sx={{width: 220, wordBreak: 'break-all', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <AccountingIcon ></AccountingIcon>
                        <p>{file?.name?.slice(14)}</p>
                        <a href={`http://localhost:5000/${file.name}`} download target='_blank'><button className='action_button'>Скачать</button></a>
                    </Box>
                ))
            } */}
            </Box>
            {/* <Document file={`http://localhost:5000/${receipt.src}`}>
                <Page pageNumber={1} width={1000}></Page>
            </Document> */}
        </DialogContent>
        <DialogActions>
            <button className='action_button' onClick={handleClose}>Закрыть</button>
        </DialogActions>
    </Dialog>
  )
}
