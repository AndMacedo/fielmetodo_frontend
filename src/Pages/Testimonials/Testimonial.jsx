import React from 'react'
import { useParams } from 'react-router-dom'

const Testimonial = () => {
    const {id} = useParams()
  return (
    <div>
      estamos na pagina #{id}
    </div>
  )
}

export default Testimonial
