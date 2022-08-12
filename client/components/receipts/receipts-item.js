
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Box, Chip } from '@mui/material';
import { Document, Outline, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import styles from './ReceiptsItem.module.css'
import { AttachModal } from './AttachModal';
import { DownloadModal } from './DownloadModal';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export function ReceiptsItem({receipt}) {

    const [open, setOpen] = useState(false);
    const [openAttach, setOpenAttach] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleClickOpenAttach = () => {
        setOpenAttach(true);
    };
  
    const handleCloseAttach = () => {
        setOpenAttach(false);
    };

    return (
        <Box className={styles.receipt} sx={{p:3, border: '2px solid #eee', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', mb: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box>
                    <h3>Пакет квитанций № {receipt?.id} <span className={styles.error_chip} >Требуется оплата</span></h3>
                </Box>
                
                <h4 className={styles.subtitle}>Работники</h4>
                <Box sx={{display: 'flex'}}>
                    <a onClick={handleClickOpen} className={styles.download_link}  download target="_blank"><button className='action_button'>Скачать <span>{receipt?.files?.length}</span></button></a>
                    <a className={styles.attach_link}><button onClick={handleClickOpenAttach} className='secondary_button' >{receipt?.confirmation_documents?.length ? <>Прикреплено<span>{receipt?.confirmation_documents?.length}</span></> : 'Прикрепить'}</button></a>
                </Box>
            </Box>
            <Box>
            <DownloadModal receipt={receipt} open={open} handleClose={handleClose}></DownloadModal>
            <AttachModal receipt={receipt} open={openAttach} handleClose={handleCloseAttach}></AttachModal>
            </Box>
            <Box sx={{textAlign: 'right'}}>
                <p>{new Date(receipt?.createdAt)?.toLocaleDateString()}</p>
                <h2 className={styles.summ}>{receipt?.summ?.toFixed(2)?.toLocaleString().replace('.', ',')}₽</h2>
            </Box>
        </Box>
    )
}