import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import router from 'next/router'
import { Document, Outline, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
// import './PDFcanvas.css'
import {
    Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';


import {useDropzone} from 'react-dropzone';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 'auto',
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    
  };
  
  const img = {
    display: 'block',

    width: 'auto',
    height: 100,
    marginBottom: 10
  };

  const pdf_wrapper = {
      canvas: {
          width: '1000px !important',
          height: '100% !important',
      }
  }

export const ReceiptCreateForm = ({clients, ...rest }) => {


    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'application/pdf',
      onDrop: acceptedFiles => {
          
        let reader = new FileReader()
        reader.readAsText(acceptedFiles[0]);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img style={img} src="/pdf_icon.png"></img>
          <p>{file.name}</p>
        </div>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(files);

        // fetch(`http://localhost:5000/receipt`,
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }
        // )
        // .then(res => {
        //     res.json()
        // })
        // .then(json => {
        //     console.log(json)
        //     router.push('/receipts')
        // })

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
        <Box
            sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            mb: 2
            }}
        >
            <Typography
            sx={{ m: 1 }}
            variant="h4"
            >
            Выставление квитанции
            </Typography>
            <Box sx={{ m: 1 }}>
            {/* <Button
                startIcon={(<UploadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
            >
                Import
            </Button>
            <Button
                startIcon={(<DownloadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
            >
                Export
            </Button> */}
            </Box>
        </Box>
        
        </Box>
        <Card {...rest}>
        <PerfectScrollbar>
                <Box sx={{ minWidth: 1050, p: 4, display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{mb: 2, width: '30%'}}>
                        <h2>Основная информация</h2>
                        <Box sx={{mt:2}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={clients?.rows?.map((item) => {return {label: `${item?.sur_name} ${item?.first_name} ${item?.last_name}`, id: item.id}})}
                                sx={{ width: 400, mb: 2 }}
                                renderInput={(params) => <TextField {...params} label="Клиент" />}
                            />
                            <TextField label="Сумма" type="number" {...register("summ")} sx={{mr: 2, mb: 2}}></TextField>
                            
                            <section className="container">
                            <div {...getRootProps({className: 'dropzone', style: {border: '2px dashed #ccc', padding: 20, height: 200, cursor: 'pointer'}})}>
                                <input {...getInputProps()} />
                                <p>Перебросьте сюда файлы для загрузки...</p>
                            </div>
                            <aside style={thumbsContainer}>
                                {thumbs}
                            </aside>
                            </section>
                            
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                sx={{mt: 4}}
                            >
                                Сохранить
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{mb: 2,p: 6, width: '60%', boxShadow: '0 10px 20px #aaa', borderRadius: '20px'}} className='pdf_canvas'>
                        <h2>Предварительный просмотр</h2>
                        <Box sx={{mt:2}} >
                            <Document file={files[0]?.preview}>
                                <Page pageNumber={1}></Page>
                            </Document>
                        </Box>
                    </Box>
                </Box>
        </PerfectScrollbar>
        </Card>
        
        
        </form>
    );
};

