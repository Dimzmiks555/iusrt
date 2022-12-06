import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import AccountingIcon from '../../icons/accounting'

import styles from './ReceiptsItem.module.css'

export const AttachModal = ({receipt, open, handleClose}) => {

    const [files, setFiles] = useState([])

    const router = useRouter()

    const uploadInput = useRef(null)

    const handleClick = (e) => {
        uploadInput.current.click()
    }

    const handleChange = event => {
        const filesUploaded = event.target.files;
        console.log(files)
        let filesArray = [...filesUploaded]
        setFiles(filesArray)
    };

    const handleSubmit = () => {
        let formdata = new FormData()

        files.forEach(file => {
            formdata.append('files', file)
        })
        formdata.append('receipt_id', receipt.id)


        fetch(`http://localhost:5000/confirmation-document`,
            {
                method: 'POST',
                body: formdata
            }
        )
        .then(res => {
            res.json()
        })
        .then(json => {
            console.log(json)
            router.reload()
        })

    };


  return (
    <Dialog open={open} onClose={handleClose} maxWidth='lg' scroll="body">
        {/* <DialogTitle>Прикрепить платежные документы</DialogTitle> */}
        <DialogContent>

            {receipt?.confirmation_documents.length > 0 && (
                <>
                <h3>Прикрепленные документы</h3>
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {receipt?.confirmation_documents?.map(file => (
                        <Box className={styles.fileWrapper} sx={{width: 220, wordBreak: 'break-all', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <AccountingIcon ></AccountingIcon>
                            <p>{file?.name?.slice(14)}</p>
                            <a href={`http://localhost:5000/${file.name}`} download target='_blank'><button className='action_button'>Скачать</button></a>
                        </Box>
                    ))}
                </Box>
                
                <Divider sx={{width: '100%', mb: 2}}></Divider>
                </>
            )}


            <h3>Прикрепить платежные документы</h3>
            <Box sx={{display: 'flex', flexWrap: 'wrap', mt: 2}}>
                
                <button onClick={handleClick} className='action_button'>Выбрать файлы</button>
                <input onChange={handleChange} ref={uploadInput} style={{display: 'none'}} multiple type="file"></input>
            </Box>
            <Box sx={{mt: 2}}>
                {files.map(file => (
                    <Box className={styles.attachedFile} key={file?.name}>
                        <p>{file?.name}</p>
                        <a className={styles.attachedFileClose}>✖</a>
                    </Box>
                ))}
            </Box>
            {/* <Document file={`http://localhost:5000/${receipt.src}`}>
                <Page pageNumber={1} width={1000}></Page>
            </Document> */}
        </DialogContent>
        <DialogActions>
            <button onClick={handleSubmit} disabled={!files.length} className='action_button'>Прикрепить</button>
            <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
    </Dialog>
  )
}
