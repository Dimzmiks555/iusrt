import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useForm } from "react-hook-form";
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
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const CustomerCreateForm = ({ ...rest }) => {

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
            Создание карточки клиента
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
            <Button
                color="primary"
                variant="contained"
                type="submit"
            >
                Сохранить
            </Button>
            </Box>
        </Box>
        
        </Box>
        <Card {...rest}>
        <PerfectScrollbar>
                <Box sx={{ minWidth: 1050, p: 4 }}>
                    <Box sx={{mb: 2}}>
                        <h2>Основная информация</h2>
                        <Box sx={{mt:2}}>
                            <TextField label="Имя" {...register("first_name")} sx={{mr: 2}}></TextField>
                            <TextField label="Фамилия" {...register("sur_name")} sx={{mr: 2}}></TextField>
                            <TextField label="Отчество" {...register("last_name")} sx={{mr: 2}}></TextField>
                            <TextField label="Номер телефона" {...register("phone")} type="tel" sx={{mr: 2}}></TextField>
                            <TextField label="Электронная почта" {...register("email")} type="email" sx={{mr: 2}}></TextField>
                        </Box>
                    </Box>
                    <Box sx={{mb: 2}}>
                        <h2>Учетные данные</h2>
                        <Box sx={{mt:2}}>
                            <TextField label="ИНН" {...register("inn")} sx={{mr: 2}}></TextField>
                            <TextField label="ОГРНИП" {...register("ogrnip")} sx={{mr: 2}}></TextField>
                            <TextField label="Система налогообложения" {...register("tax_system")} sx={{mr: 2}}></TextField>
                            <TextField label="СНИЛС" type="tel" {...register("social_account_number")} sx={{mr: 2}}></TextField>
                        </Box>
                    </Box>
                    <Box>
                        <h2>Адрес</h2>
                        <Box sx={{mt:2}}>
                            <TextField label="Индекс" {...register("postcode")} sx={{mr: 2, mb: 2}}></TextField>
                            <TextField label="Регион" {...register("region")} sx={{mr: 2}}></TextField>
                            <TextField label="Район" {...register("area")} sx={{mr: 2}}></TextField>
                            <TextField label="Город" {...register("city")} sx={{mr: 2}}></TextField>
                            <TextField label="Улица" {...register("street")} sx={{mr: 2}}></TextField>
                            <TextField label="Дом" {...register("house")} sx={{mr: 2}}></TextField>
                            <TextField label="Квартира" {...register("flat")} sx={{mr: 2}}></TextField>
                        </Box>
                    </Box>
                </Box>
        </PerfectScrollbar>
        </Card>
        
        
        </form>
    );
};

