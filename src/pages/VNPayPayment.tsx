import { useLocation, useNavigate } from 'react-router-dom'
import vnpay from '~/assets/images/vnpay.jpg'
import vnpay232 from '~/assets/images/232.png'
import { formatNumberWithDots } from '~/utils/utils'
import { listEbank } from '~/constants/renaral.const'
import { useEffect, useState } from 'react'
const VNPayPayment = () => {
  const location = useLocation()
  const { data } = location.state || {}
  const navigate = useNavigate()
  const handleHuy = () => {
    navigate('/', {
      state: {}
    })
  }
  const [seconds, setSeconds] = useState(240)

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
    if (seconds === 0) {
      navigate('/', {
        state: {}
      })
    }
  }, [navigate, seconds])
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return (
    <div
      className='max-w-[1200px] py-6 px-3 mx-auto rounded text-white relative'
      style={{ backgroundImage: 'linear-gradient(134deg,#0052e0,#74009d 93.8%)' }}
    >
      <div className='flex items-center justify-center gap-3 flex-col md:flex-row text-center md:text-start'>
        <img className='w-[120px]' src={data.image} alt={data.image} loading='lazy' />
        {data.method === 'vi-dien-tu' ||
          (data.method === 'vnpayqr' && (
            <p className='text-2xl font-medium'>
              Thanh toán đơn hàng bằng ứng dụng {data.method === 'vi-dien-tu' && 'Ví điện tử'}{' '}
              {data.method === 'vnpayqr' && 'QR Code'}
            </p>
          ))}
        {data.method === 'ngan-hang' && (
          <p className='text-2xl font-medium'>Thanh toán đơn hàng bằng ứng dụng ngân hàng</p>
        )}
      </div>
      <div className='grid md:grid-cols-2  p-3'>
        <div className='flex flex-col justify-center p-3'>
          <div className='p-4 bg-white  md:w-max md:mx-auto'>
            <img className='md:size-[298px] mx-auto' loading='lazy' src={vnpay} alt='vnpay' />
          </div>
          <p className='text-center font-medium text-xl mt-5'>Tổng thanh toán</p>
          <p className='text-center font-medium text-[22px] mt-2'>{formatNumberWithDots(data.price)}đ</p>
          <div className='bg-white rounded-md w-full mx-auto max-w-[280px] h-[64px] p-2 mt-2.5'>
            <p className='text-[#0a3f9b] text-center font-medium '>Mã QR sẽ hết hạn sau:</p>
            <p className='text-[#c32ef9] font-medium text-center'>{formatTime(seconds)}</p>
          </div>
        </div>
        <div className='font-medium p-3'>
          <p className='text-xl mb-3'>Hướng dẫn thanh toán</p>
          <p className='mb-3 leading-8 ml-2'>
            1. <span className='font-semibold underline'>Tải xuống</span> hoặc chụp màn hình mã
            <br />
            2. Đăng nhập ứng dụng ví điện tử
            <br />
            3. Trên ứng dụng chọn tính năng quét mã QR
            <br />
            4. Quét mã QR ở trang này (hoặc đã tải) và thanh toán
          </p>
          {data.method === 'vi-dien-tu' && <p className='uppercase text-xl'>Quét mã bằng ứng dụng ví điện tử</p>}
          {data.method === 'vnpayqr' && <p className=' text-xl'>Ngân hàng và Ví điện tử hỗ trợ thanh toán VNPAY QR</p>}
          {data.method === 'ngan-hang' && <p className='uppercase text-xl'>Quét mã bằng ứng dụng ngân hàng</p>}
          {data.method === 'vi-dien-tu' ||
            (data.method === 'ngan-hang' && (
              <div className='w-full'>
                <img
                  className='w-full  h-full max-w-[500px] max-h-[500px]'
                  src={vnpay232}
                  alt='vnpay232'
                  loading='lazy'
                />
              </div>
            ))}
          {data.method === 'vnpayqr' && (
            <div className='bg-white mt-5 p-4 rounded-md grid grid-cols-4 h-[320px] overflow-y-auto custom-scroll'>
              {listEbank.map((item, index) => (
                <div key={index} className='p-3'>
                  <img className='contain' src={item} alt='item' loading='lazy' />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button onClick={handleHuy} className='absolute top-6 right-6 md:right-10 gap-2 flex items-center justify-center'>
        <p className='text-xs font-medium'>Huỷ giao dịch</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
        </svg>
      </button>
    </div>
  )
}

export default VNPayPayment
