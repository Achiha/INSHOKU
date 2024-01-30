
import { useParams } from 'react-router-dom'



const Pic_info = () => {

  const {id} = useParams()

  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}


export default Pic_info
