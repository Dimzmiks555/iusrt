
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


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export function ReceiptsItem({receipt}) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Box sx={{p:3, border: '2px solid #eee', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', mb: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box>
                    <h3>Пакет квитанций № {receipt?.id} <span className={styles.error_chip} >Требуется оплата</span></h3>
                </Box>
                
                <h4 className={styles.subtitle}>Работники</h4>
                <Box sx={{display: 'flex'}}>
                    <a onClick={handleClickOpen} className={styles.download_link}  download target="_blank"><button className='action_button'>Скачать</button></a>
                    <button className='secondary_button' >Прикрепить</button>
                </Box>
            </Box>
            <Box>
            <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
                <DialogTitle>Квитанция № {receipt.id}</DialogTitle>
                <DialogContent>
                    {/* <Document file={`http://localhost:5000/${receipt.src}`}>
                        <Page pageNumber={1} width={1000}></Page>
                    </Document> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Закрыть</Button>
                </DialogActions>
            </Dialog>
            </Box>
            <Box sx={{textAlign: 'right'}}>
                <p>{new Date(receipt?.createdAt)?.toLocaleDateString()}</p>
                <h2 className={styles.summ}>{receipt?.summ?.toFixed(2)?.toLocaleString().replace('.', ',')}₽</h2>
            </Box>
        </Box>
    )
}