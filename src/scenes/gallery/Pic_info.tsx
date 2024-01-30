import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Pic_info = (props: Props) => {

  const {id} = useParams()

  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}


export default Pic_info
