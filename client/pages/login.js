import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react'
import ClientStore from '../components/stores/ClientStore'
import Layout from '../components/Layouts/Layout'

export default function Home() {

  const [inn, setInn] = useState()
  const [password, setPassword] = useState()


  function handleSubmit(e) {
    e.preventDefault()
    ClientStore.login({inn, password})

  }

  useEffect(() => {
    if (typeof window != 'undefined') {
      if (localStorage.getItem('token')) {
        window.location.href ="/lk"
      } 
      }

      
  }, [ClientStore.isAuth])

  return (
    <Layout>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className={styles.login}>
                <div className={styles.sign_in}>
                    <h2>Войти</h2>
                    <form>
                      <TextField label="ИНН" onChange={e => {setInn(e.target.value)}} sx={{width: 300, mb: 4}} ></TextField>
                      <TextField label="Пароль" onChange={e => {setPassword(e.target.value)}} type="password" sx={{width: 300, mb: 4}}></TextField>
                        <button onClick={handleSubmit}>Войти</button>
                    </form>
                </div>
                <div className={styles.registration}>
                    <h2>Регистрация</h2>
                    <form>
                      <TextField label="Имя" sx={{width: 300, mb: 4}} ></TextField>
                      <TextField label="Фамилия" sx={{width: 300, mb: 4}}></TextField>
                      <TextField label="Номер телефона" sx={{width: 300, mb: 4}} ></TextField>
                      <TextField label="Электронная почта" sx={{width: 300, mb: 4}}></TextField>
                        <button>Подать заявку на регистрацию</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}
