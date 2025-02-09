import { BorderOutlined } from '@ant-design/icons'
import React from 'react'

const CareerConsultingCard = ({ image, title, description, slogan }) => {
  return (
    <div className='border border-solid rounded-xl w-96 hover:border-orange-400'>
      <img className=' rounded-t-xl' src={image} alt="" />
      <div className='mt-5 p-5'>
        <div className='hover:text-orange-400 text-xl font-bold '>
          {title}
        </div>
        <div className='mt-2 line-clamp-4'>
          {description}
        </div>
        <div className='flex items-center mt-2 '>
          <BorderOutlined className='mr-2 text-orange-400' /> {slogan}
        </div>
      </div>
    </div>
  )
}

export default CareerConsultingCard