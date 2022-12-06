import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import styles from './ServiceItem.module.css'
import AccountingIcon from '../../icons/accounting'



export const MoreModal = ({service, open, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
        <DialogContent>
            <Box>

                <Box>
                    <h2 style={{display: 'flex', alignItems: 'center'}}>Пакет квитанций № {service?.id} <span className={styles.error_chip} >Требуется оплата</span></h2>
                        <small>{new Date(service?.createdAt)?.toLocaleDateString()}</small>
                </Box>

                <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{width: 320, mr: 2}}>
                        <h3 className={styles.subtitle}>НДФЛ</h3>
                        <p>{service?.comment}</p>
                    </Box>
                    <Box sx={{mr: 2}}>
                        <b style={{textAlign: 'right'}} className={styles.summ}>{service?.summ} ₽</b>
                        <h3>Файлы</h3>
                        <Box>
                            {service?.files?.map(file => (
                                <Box className={styles.file}>
                                    <AccountingIcon/>
                                    <p style={{marginBottom: 10}}>{file?.name.slice(14)}</p>
                                    <a href={`http://localhost:5000/${file?.name}`} target="_blank"><button className='action_button'>Скачать</button></a>
                                </Box>
                            ))}
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
