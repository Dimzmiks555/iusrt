import Link from 'next/link'
import { Button, Chip } from '@mui/material';
import Header from '../components/header/Header'
import styles from '../styles/Lk.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { ReceiptsItem } from '../components/receipts/receipts-item';
import ClientStore from '../components/stores/ClientStore';
import jwt from 'jwt-decode'
import { unstable_deprecatedPropType } from '@mui/utils';
import { observer } from 'mobx-react';
import { Footer } from '../components/footer/Footer';
import LKLayout from '../components/Layouts/LKLayout';


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
    <LKLayout>
      <div className="container" >
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <h1 style={{color: '#555', marginBottom: 30, marginTop: 20 }}>Личный кабинет</h1>
          </Box>
          <Box className={styles.main_block}>
            <Box>
              <Box className={styles.client_card}>
                <h2 >{ClientStore?.client?.sur_name} {ClientStore?.client?.first_name} {ClientStore?.client?.last_name}</h2>
                <p style={{marginTop: 14 }}>ИНН {ClientStore?.client?.inn}</p>
                <p>ОГРНИП {ClientStore?.client?.ogrnip}</p>
                <p>Система налогообложения {ClientStore?.client?.tax_system}</p>
              </Box>
            </Box>
            <Box>
              <Box className={styles.default_card}>
                <h2 >Требуется оплата</h2>
                <Box className={styles.payment_blocks}>
                  <Box>
                    <h3>Бухгалтеру</h3>
                    <span>500,00₽</span>
                    <p>по 1 пакету услуг</p>
                    <Link href="/lk/services"><button className='action_button'>Подробнее</button></Link>
                  </Box>
                  <Box>
                    <h3>Государству</h3>
                    <span>{ClientStore.client?.receipt_debts_summ?.toFixed(2)} ₽</span>
                    <p>по 1 пакету услуг</p>
                    <Link href="/lk/receipts"><button className='action_button'>Подробнее</button></Link>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.default_card}>
                <h2 >Мои документы</h2>
                <Box className={styles.my_documents}>
                  {ClientStore?.client?.client_files?.map(client_file => (
                    <Box sx={{mt: 2}}>
                      <p>{client_file?.name}</p>
                      <a href={`http://localhost:5000/${client_file?.filename}`} target="_blank"><button className='action_button'>Скачать</button></a>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            
          </Box>
          
      </div>
    </LKLayout>
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