import Link from 'next/link'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }



export default function LK() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  return (
    <div>
        <Header/>
        <main>
            <div className={styles.container} >
                
                <h1 style={{color: '#555', marginBottom: 10, marginTop: 20 }}>Личный кабинет</h1>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Главная"  />
                    <Tab label="Выплаты"  />
                    <Tab label="Долги"  />
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <h2 style={{marginBottom: 40, marginTop: 14 }}>Афанасьев Николай Дмитриевич</h2>
                </TabPanel>
                <TabPanel value={value} index={1}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
            </div>
        </main>
        <footer>
          <div className={styles.container} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              
            <Link href='/'>
              <div className={styles.logo}>
                  <img src='/LOGO_WHITE.svg'></img>
                  <p>Аутсорсинг <br></br> бухгалтерских услуг</p>
              </div>
            </Link>
              <div className={styles.email}>
                  <div className={styles.icon}>

                  </div>
                  <div className={styles.info}>
                      <h3>г. Лиски, ул. Коммунистическая, д. 24</h3>
                      <p>iusrt@mail.ru</p>
                  </div>

              </div>
              <div className={styles.phone}>
                <div className={styles.icon}>

                </div>
                <div className={styles.info}>
                    <h3>+7 (920) 464-20-72</h3>
                    <p>8.00-18.00 пн-сб</p>
                </div>
              </div>
              
            </div>
        </footer>
    </div>
  )
}
