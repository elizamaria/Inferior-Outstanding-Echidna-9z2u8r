import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Inferior Outstanding Echidna</title>
        <meta property="og:title" content="Inferior Outstanding Echidna" />
      </Helmet>
      <div
        className={` ${styles['container1']} ${projectStyles['listasasf-adsf-a-asd']} `}
      ></div>
    </div>
  )
}

export default Home
