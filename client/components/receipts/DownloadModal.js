import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import AccountingIcon from '../../icons/accounting';
import styles from './ReceiptsItem.module.css'


export const DownloadModal = ({receipt, open, handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
        <DialogTitle>Пакет квитанций № {receipt.id}</DialogTitle>
        <DialogContent>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
                receipt?.files?.map(file => (
                    <Box className={styles.fileWrapper} sx={{width: 220, wordBreak: 'break-all', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <AccountingIcon ></AccountingIcon>
                        <p>{file?.name?.slice(14)}</p>
                        <a href={`http://localhost:5000/${file.name}`} download target='_blank'><button className='action_button'>Скачать</button></a>
                    </Box>
                ))
            }
            </Box>
            {/* <Document file={`http://localhost:5000/${receipt.src}`}>
                <Page pageNumber={1} width={1000}></Page>
            </Document> */}
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
    </Dialog>
  )
}
