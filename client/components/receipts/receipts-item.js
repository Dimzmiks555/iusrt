
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
        <Box sx={{p:3, boxShadow: '0 4px 10px #ccc', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', mb: 2}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box>
                    <h3>Квитанция № {receipt?.id}</h3>
                    <p>от {new Date(receipt?.createdAt)?.toLocaleDateString()}</p>
                </Box>
                <Box>
                    <a href={`http://localhost:5000/${receipt.src}`} download target="_blank"><Button variant="contained" sx={{mr: 2}}>Скачать</Button></a>
                    <Button variant="outlined" onClick={handleClickOpen}>Просмотреть</Button>
                </Box>
            </Box>
            <Box>
            <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
                <DialogTitle>Квитанция № {receipt.id}</DialogTitle>
                <DialogContent>
                    <Document file={`http://localhost:5000/${receipt.src}`}>
                        <Page pageNumber={1} width={1000}></Page>
                    </Document>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Закрыть</Button>
                </DialogActions>
            </Dialog>
            </Box>
            <Box>
                <h3>Сумма</h3>
                <h2>{receipt?.summ?.toLocaleString()} ₽</h2>
                <Chip color='error' label="Требует оплаты" sx={{mt: 1}}></Chip>
            </Box>
        </Box>
    )
}