import { useContext } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { SnackContext } from '../../../App'

export default function IceCreams() {
  const { iceCreams } = useContext(SnackContext)

  return(
    <>
      <Head title='Sobremesas' description='Nossos melhores sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
