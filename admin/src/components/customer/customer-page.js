import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Link from "next/link";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
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
  Divider,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { useDropzone } from 'react-dropzone';

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
    width: '47%',
    height: 'auto',
    wordWrap: 'break-word',
    padding: 10,
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


export const CustomerPage = ({ data }) => {

    
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
          <p style={{wordBreak: 'break-word'}}>{file.name}</p>
        </div>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);



    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch(`http://localhost:5000/client`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        .then(res => {
            res.json()
        })
        .then(json => {
            console.log(json)
            router.push('/clients')
        })

    }

    const handleSubmitFiles = () => {
        let formdata = new FormData();
        
        files.forEach(file => {
            formdata.append('files', file)
        })

        formdata.append('client_id', clientID)
        formdata.append('summ', data.summ)

        

        // fetch(`http://localhost:5000/client-file`,
        //     {
        //         method: 'POST',
        //         body: formdata
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

    const router = useRouter()

    return (
        <form>
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
            <Link href="/clients">
                <Button
                    color="primary"
                    variant="contained"
                >
                    Назад
                </Button>
            </Link>
            <Typography
            sx={{ m: 1, }}
            variant="h4"
            >
            Клиент № {router.query.id}
            </Typography>
        </Box>
        
        </Box>
        <Card>
        <PerfectScrollbar>
                <Box sx={{ minWidth: 1050, p: 4 }}>
                    <Box sx={{mb: 2}}>
                        <h2>Основная информация</h2>
                        <Box sx={{mt:1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h1>{data?.sur_name} {data?.first_name} {data?.last_name}</h1>
                            
                            <h2>{data?.phone}</h2>
                            <h2>{data?.email}</h2>

                        </Box>
                    </Box>
                    <Divider sx={{mb: 2, border: '2px solid #d8f'}} ></Divider>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{mb: 2, mr: 6}}>
                            <h2>Учетные данные</h2>
                            <Box sx={{mt:1}}>
                                
                                <h3>ИНН {data?.inn}</h3>
                                
                                <h3>ОГРНИП {data?.ogrnip}</h3>
                                <h3>Система {data?.tax_system}</h3>
                                <h3>СНИЛС {data?.social_account_number}</h3>
                            </Box>
                        </Box>
                        <Box>
                            <h2>Адрес</h2>
                            <Box sx={{mt:2}}>
                                <table border='1' style={{borderCollapse: 'collapse'}}>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Индекс</td><td  style={{padding: 10}}>{data?.postcode}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Регион</td><td  style={{padding: 10}}>{data?.region}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Район</td><td  style={{padding: 10}}>{data?.area}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Город</td><td  style={{padding: 10}}>{data?.city}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Улица</td><td  style={{padding: 10}}>{data?.street}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Дом</td><td  style={{padding: 10}}>{data?.house}</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: 10, background: '#ecf'}}>Квартира</td><td  style={{padding: 10}}>{data?.flat}</td>
                                    </tr>
                                </table>
                            </Box>
                        </Box>
                        <Box sx={{ml:4, width: '25%'}} >
                            <h2 style={{marginBottom: 20}}>Загрузка файлов</h2 >
                            <section className="container">
                                <div {...getRootProps({className: 'dropzone', style: {border: '2px dashed #ccc', padding: 20, height: 200, cursor: 'pointer'}})}>
                                    <input {...getInputProps()} />
                                    <p>Перебросьте сюда файлы для загрузки...</p>
                                </div>
                            </section>
                            <aside style={thumbsContainer}>
                                {thumbs}
                            </aside>
                            <Button onClick={handleSubmitFiles}></Button>
                            {/* <Document file={files[0]?.preview}>
                                <Page pageNumber={1}></Page>
                            </Document> */}
                        </Box>
                    </Box>
                </Box>
        </PerfectScrollbar>
        </Card>
        
        
        </form>
    );
};

