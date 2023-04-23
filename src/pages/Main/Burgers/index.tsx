import { useEffect, useState, useContext } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { SnackData } from '../../../interfaces/SnackData'

import { getBurgers } from '../../../services/api'

import { SnackContext } from '../../../App'

export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
