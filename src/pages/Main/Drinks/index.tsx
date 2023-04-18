import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { SnackData } from '../../../interfaces/SnackData'

import { getDrinks } from '../../../services/api'

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const dirnksRequest = await getDrinks()

      setDrinks(dirnksRequest.data)
    })()
  }, [])

  return(
    <>
      <Head title='Bebidas' description='Nossos melhores bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
