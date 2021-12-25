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
import { useEffect, useState } from 'react';
import { ReceiptsItem } from '../components/receipts/receipts-item';
import ClientStore from '../components/stores/ClientStore';
import jwt from 'jwt-decode'
import { unstable_deprecatedPropType } from '@mui/utils';
import { observer } from 'mobx-react';

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


const LK = observer( ({ client}) => {

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [userData, setUserData] = useState({});
  const [receipts, setReceipts] = useState([]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        if (typeof window != 'undefined') {
          if (!localStorage.getItem('token')) {
            window.location.href = '/login'
          } else {  
              const data = jwt(localStorage.getItem('token'))
              
              fetch(`http://localhost:5000/client/${data.id}`)
              .then(res => res.json())
              .then(json => {
                ClientStore.setUserData(json)
                console.log(json)

              fetch(`http://localhost:5000/receipt?client_id=${data?.id}`)
              .then(res => res.json())
              .then(receipts => {
                setReceipts(receipts)
              })

              })

          }
        }

        
    }, [ClientStore.isAuth])


  return (
    <div>
        <Header user={userData}/>
        <main>
            <div className={styles.container} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                  
                <h1 style={{color: '#555', marginBottom: 10, marginTop: 20 }}>Личный кабинет</h1>
                <Button color="error" variant="outlined" onClick={e => {ClientStore.logout()}}>Выйти</Button>
                </Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Главная"  />
                    <Tab label="Квитанции"  />
                    <Tab label="Отчёты"  />
                    <Tab label="Оплата Услуг"  />
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <h2 style={{marginTop: 14 }}>{ClientStore?.client?.sur_name} {ClientStore?.client?.first_name} {ClientStore?.client?.last_name}</h2>
                    <h3 style={{marginTop: 14 }}>ИНН {ClientStore?.client?.inn}</h3>
                    <h3>ОГРНИП {ClientStore?.client?.ogrnip}</h3>
                    <h3>Система {ClientStore?.client?.tax_system}</h3>
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
                      {
                        receipts?.rows?.map(receipt => (
                          <ReceiptsItem receipt={receipt}></ReceiptsItem>
                        ))
                      }
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
)

export default LK

// export async function getServerSideProps({req}) {

  
//     // serverconst data = jwt(localStorage.getItem('token'))
//     let data 
//     if (typeof window != 'undefined') {
//       data = jwt(localStorage.getItem('token'))
//     }

//     const res = await fetch(`http://localhost:5000/receipt?client_id=${data?.id}`)

//     const json = await res.json()


//     return {
//       props: {
//         receipts: json
//       }
//     }
//   } 