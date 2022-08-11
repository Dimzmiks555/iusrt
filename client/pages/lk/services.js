import Link from 'next/link'
import { Button, Chip } from '@mui/material';
import styles from '../../styles/Home.module.css'
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
import { ReceiptsItem } from '../../components/receipts/receipts-item';
import ClientStore from '../../components/stores/ClientStore';
import jwt from 'jwt-decode'
import { observer } from 'mobx-react';
import LKLayout from '../../components/Layouts/LKLayout';
import { ServiceItem } from '../../components/services/ServiceItem';


const ServicesPage = observer( ({ client}) => {

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
                  
                <h1 style={{color: '#555', marginBottom: 10, marginTop: 20 }}>Услуги</h1>
                </Box>
                
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
                          selected={selectedIndex === 2}
                          onClick={(event) => handleListItemClick(event, 2)}
                        >
                          <ListItemText primary="Все" />
                        </ListItemButton>
                      </List>
                    </Box>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ServiceItem></ServiceItem>
                    </Box>
                  </Box>
            </div>
    </LKLayout>
  )
}
)

export default ServicesPage

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