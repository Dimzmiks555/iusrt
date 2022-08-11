import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.css'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Slider from '@mui/material/Slider';
import { Box } from '@mui/material'
import Layout from '../components/Layouts/Layout'
import { Services } from '../components/Index/Services'
import { Partners } from '../components/Index/Partners'
import { Contacts } from '../components/Index/Contacts'

function valuetext(value) {
  return `${value}`;
}

export function DiscreteSliderMarks({marks, max}) {
  return (
    <Box fullWidth>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={+max / 10}
        valueLabelDisplay="auto"
        marks={marks}
        max={max}
      />
    </Box>
  );
}

export default function Home() {
  return (
    <Layout>
      <div>
            <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles.main_offer}>
                    <h1>Доверьте учет своего бизнеса нам!</h1>
                    <div className={styles.main__list}>
                        <ul>
                          <li><i>•</i> Бухгалтерский учет</li>
                          <li><i>•</i> Налоговый учет</li>
                          <li><i>•</i> Кадровый учет </li>
                          <li><i>•</i> Всё прочее</li>
                        </ul>
                    </div>
                    <Link href='/login'><a href='#tears'><button className={styles.main_button}>Войти в личный кабинет</button></a></Link>
                    
                </div>
                <div className={styles.main_img}>
                  <img src='/main/a8adc8270125fd06b25c67f448691254.png'></img>
                </div>  
            </div>
        <Services/>
        <Partners/>
        <Contacts/>
        
        
        
    </div>
    </Layout>
  )
}
