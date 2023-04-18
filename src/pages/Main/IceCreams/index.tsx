import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { SnackData } from '../../../interfaces/SnackData'

import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceIcreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const iceCreamRequest = await getIceCreams()

      setIceCreams(iceCreamRequest.data)
    })()
  }, [])

  return(
    <>
      <Head title='Sobremesas' description='Nossos melhores sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceIcreams}></Snacks>
    </>
  )
}
