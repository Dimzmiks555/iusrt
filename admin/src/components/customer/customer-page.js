import { useState } from 'react';
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

export const CustomerPage = ({ data }) => {

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
                    </Box>
                </Box>
        </PerfectScrollbar>
        </Card>
        
        
        </form>
    );
};

