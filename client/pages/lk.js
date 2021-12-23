import Link from 'next/link'
import { Button, Chip } from '@mui/material';
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
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

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
                    <Tab label="Квитанции"  />
                    <Tab label="Отчёты"  />
                    <Tab label="Оплата Услуг"  />
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <h2 style={{marginTop: 14 }}>ХОЛОДКОВА ЮЛИЯ МИХАЙЛОВНА</h2>
                    <h3 style={{marginTop: 14 }}>ИНН 365200092646</h3>
                    <h3>ОГРНИП 304365211200042</h3>
                    <h3>Система УСН</h3>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  
                <h2 style={{marginBottom: 20 }}>Квитанции</h2>
                <Box sx={{display: 'flex'}}>
                  <Box sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper', mr: 4 }}>
                    <List component="nav" aria-label="secondary mailbox folder">
                      <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                      >
                        <ListItemText primary="Требуют оплаты" />
                      </ListItemButton>
                      <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                      >
                        <ListItemText primary="Оплаченные" />
                      </ListItemButton>
                      <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                      >
                        <ListItemText primary="Все" />
                      </ListItemButton>
                    </List>
                  </Box>
                  <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                      <Box sx={{p:3, boxShadow: '0 4px 10px #ccc', borderRadius: '10px', display: 'flex', justifyContent: 'space-between'}}>
                          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                              <Box>
                                <h3>Квитанция № 5896243</h3>
                                <p>от 23.12.2021</p>
                              </Box>
                              <Box>
                                <Button variant="contained" sx={{mr: 2}}>Скачать</Button>
                                <Button variant="outlined">Просмотреть</Button>
                              </Box>
                          </Box>
                          <Box>
                              <h3></h3>
                          </Box>
                          <Box>
                              <h3>Сумма</h3>
                              <h2>10 000 ₽</h2>
                              <Chip color='error' label="Требует оплаты" sx={{mt: 1}}></Chip>
                          </Box>
                      </Box>
                  </Box>
                </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <h2 style={{marginBottom: 20 }}>Оплата услуг</h2>
                  <Box sx={{display: 'flex'}}>
                    <Box sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper', mr: 4 }}>
                      <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                          selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1)}
                        >
                          <ListItemText primary="Требуют оплаты" />
                        </ListItemButton>
                        <ListItemButton
                          selected={selectedIndex === 2}
                          onClick={(event) => handleListItemClick(event, 2)}
                        >
                          <ListItemText primary="История" />
                        </ListItemButton>
                      </List>
                    </Box>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Box sx={{p:3, boxShadow: '0 4px 10px #ccc', borderRadius: '10px', display: 'flex', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <Box>
                                  <h3>Пакет услуг № 3</h3>
                                  <p>от 23.12.2021</p>
                                </Box>
                                <Box>
                                  <Button variant="contained">Оплатить</Button>
                                </Box>
                            </Box>
                            <Box>
                                <h3></h3>
                            </Box>
                            <Box>
                                <h3>Сумма</h3>
                                <h2>20 000 ₽</h2>
                                <Chip color='error' label="Требует оплаты" sx={{mt: 1}}></Chip>
                            </Box>
                        </Box>
                    </Box>
                  </Box>
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
