import FreePlanCard from '@/components/FreePlanCard'
import PremiumSubCard from '@/components/PremiumSubCard'
import React from 'react'

const BecomePremium = () => {
  return (
    <div className=''>
      <div className='bg-blue-100 py-14 text-center'>
        <div className='font-semibold'>
          Nâng cấp tài khoản
        </div>
        <div className='text-3xl font-semibold text-blue-500'>
          Mở khóa nhiều quyền lợi hơn
        </div>
      </div>
      <div className='mx-20 mt-10'>
        <div className='container mx-auto '>
          <div className='justify-items-center'>
            <div className='grid grid-cols-2 gap-10 '>
              <FreePlanCard />
              <PremiumSubCard />
            </div>
          </div>
          <div className='text-center mt-10'>
            <p><span className='font-semibold'>Lưu ý:</span> Sau khi hết thời hạn sử dụng, bạn vẫn có thể chỉnh sửa mẫu CV đã tạo như bình thường.</p>
            <p className='mt-5'>Nếu có vấn đề về thanh toán và nâng cấp tài khoản vui lòng liên hệ: <span className='font-semibold'>kalocs@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomePremium
