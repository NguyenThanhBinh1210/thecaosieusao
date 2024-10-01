/* eslint-disable @typescript-eslint/no-explicit-any */
import discount from '~/assets/images/discount.png'
import { useCallback, useEffect, useState } from 'react'
import { listThe, paymentMethod } from '~/constants/renaral.const'
import { formatNumberWithDots, validateEmail, validatePhoneNumber } from '~/utils/utils'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [activeNCC, setActiveNCC] = useState<any>(listThe[0])
  const [paymentMethods, setPaymentMethods] = useState<any>()
  const [indexChange, setIndexChange] = useState<number>(0)
  const [activeBank, setActiveBank] = useState<any>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [activePayment, setActivePayment] = useState<any>(null)
  console.log(activePayment)
  const [activeMenhGia, setActiveMenhGia] = useState<number>(20000)
  const [quantity, setQuantity] = useState<number>(1)
  const [listBank, setListBank] = useState<any>()
  // Email
  const [email, setEmail] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const handleInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value
    setEmail(emailInput)
    setIsValid(validateEmail(emailInput))
  }

  // Phone
  const [phone, setPhone] = useState<string>('')
  const [isValidPhone, setIsValidPhone] = useState<boolean | null>(null)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneInput = e.target.value
    setPhone(phoneInput)
    setIsValidPhone(validatePhoneNumber(phoneInput))
  }
  const handleChangeImage = (item: any) => {
    const newPaymentMethod: any = [...paymentMethods]
    newPaymentMethod[indexChange].image = item.image
    newPaymentMethod[indexChange].desc = item.title
    setPaymentMethods(newPaymentMethod)
  }
  const tongSoTien = useCallback(() => {
    const result = (activeMenhGia - (activeMenhGia * 2) / 100) * quantity
    return result
  }, [quantity, activeMenhGia])
  useEffect(() => {
    setPaymentMethods(paymentMethod)
  }, [])
  useEffect(() => {
    // Tạo một bản sao mới của paymentMethod
    if (showModal === true) {
      console.log(paymentMethod)
    }
  }, [showModal])
  const navigate = useNavigate()
  const handlePayment = () => {
    if (activePayment.slug === 'vnpayqr' || activePayment.slug === 'ngan-hang' || activePayment.slug === 'vi-dien-tu') {
      const data = {
        image: activePayment.image,
        price: activeMenhGia,
        method: activePayment.slug
      }
      navigate('vnpay-payment', {
        state: {
          data: data
        }
      })
    }
    if (activePayment.slug === 'the-atm') {
      navigate(
        'pg_was/link.do/id/126587?merId=MGM0000001&invoiceNo=64da28f22d1445e22dd8f3e941719d&hash=3265cacd29822b2eab264e0fe244b7eb464c8f3fe390ef60215efa11b8b5dcd9'
      )
    }
  }
  return (
    <>
      <div className='grid md:grid-cols-3 gap-4'>
        <div className='md:col-span-2 text-white space-y-4'>
          <div
            className='rounded-[30px] py-2.5 px-5'
            style={{
              background: 'linear-gradient(#181749 0 0) padding-box,linear-gradient(90deg,#0046c0,#c32ef9) border-box',

              border: '6px solid transparent'
            }}
          >
            <p className='text-2xl font-medium text-center'>Nhà cung cấp</p>
            <p className='text-sm font-medium text-center'>Khách hàng có thể lựa chọn các nhà cung cấp đặc biệt</p>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 py-3.5 gap-2'>
              {listThe.map((item, index) => (
                <div
                  onClick={() => {
                    setActiveNCC(item)
                  }}
                  key={index}
                  className={`${
                    activeNCC?.type === item?.type ? 'bg-[#0046c0]' : 'bg-white'
                  } border-[3px] border-[#4aa100] hover:border-[#002bff]  rounded-2xl px-1 py-0.5 min-h-20 relative cursor-pointer flex justify-center items-center`}
                >
                  <div className='max-w-[80px] h-full w-full flex items-center '>
                    <img src={item.img} alt={item.img} loading='lazy' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className='rounded-[30px] py-2.5 px-5'
            style={{
              background: 'linear-gradient(#181749 0 0) padding-box,linear-gradient(90deg,#0046c0,#c32ef9) border-box',

              border: '6px solid transparent'
            }}
          >
            <p className='text-2xl font-medium text-center'>Chọn mệnh giá</p>
            <p className='text-sm font-medium text-center'>
              Khách hàng có thể lựa chọn các mệnh giá từ 10.000đ tới 1.000.000đ
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-3.5 gap-2'>
              {activeNCC?.menhgia ? (
                activeNCC?.menhgia?.map((item: any, index: number) => (
                  <div
                    onClick={() => setActiveMenhGia(item)}
                    key={index}
                    className={`${
                      activeMenhGia === item
                        ? 'bg-[#0046c0] text-white border-[#c32ef9]'
                        : 'bg-white text-[#0a3f9b] border-[#0a3f9b]'
                    } border-[3px]  0a3f9b hover:border-[#c32ef9]  rounded-2xl px-1 py-0.5 min-h-20 relative cursor-pointer flex flex-col justify-center items-center gap-y-2`}
                  >
                    <p className=' font-medium'>{formatNumberWithDots(item - (item * 2) / 100)}đ</p>
                    <div className='flex'>
                      <img src={discount} alt='discount' loading='lazy' width={20} height={20} />
                      <div className='flex gap-1 items-center text-[#c32ef9] text-[11px]'>
                        Giá bán:
                        <p className='line-through'>{formatNumberWithDots(item)}đ</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='text-white text-center my-8 col-span-5'>Sắp mở bán</div>
              )}
            </div>
          </div>
        </div>
        <div
          className='rounded-[30px] py-3 px-4 md:px-6 text-white'
          style={{ backgroundImage: 'linear-gradient(134deg,#0052e0,#74009d 93.8%)' }}
        >
          <p className='text-2xl font-medium text-center mb-2'>Thông tin thanh toán</p>
          <p className='font-medium mb-3'>Hình thức thanh toán:</p>
          <div className='grid grid-cols-4 gap-3 mb-6'>
            {paymentMethods?.map((item: any, index: any) => (
              <div key={index} className='relative'>
                <div
                  onClick={() => {
                    setActivePayment(item)
                    setIndexChange(index)
                    if (item.banks.length !== 0) {
                      setShowModal(true)
                      setListBank(item.banks)
                    }
                  }}
                  className={`${
                    activePayment?.slug === item.slug ? 'border-[#c32ef9]' : 'border-[#4aa100] '
                  } border-[3px] relative bg-white  rounded-xl px-1 py-0.5 min-h-16 h-[90px] md:h-[70px]  cursor-pointer flex justify-center items-center`}
                >
                  <div className='max-w-[80px] h-full w-full flex items-center '>
                    <img className='contain' src={item.image} alt={item.image} loading='lazy' />
                    <button className='absolute top-2 md:top-1 right-2 md:right-1 text-black'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='currentColor'
                        className='size-3'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className=' w-full h-max text-center text-xs font-medium'>{item.title}</p>
                <p className=' w-full h-max text-center text-xs font-medium'>{item?.desc}</p>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-4 text-xs text-[#ffeb3b]'>
            <div className='col-span-3 text-center'>(Hạn mức GD: không giới hạn)</div>
            <div className='col-span-1 text-center'>(Hạn mức GD: 5.2tr/GD)</div>
          </div>
          <p className='font-medium'>Nội dung thanh toán:</p>
          <div className='mt-1 space-y-2 px-1 mb-3'>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Loại mã thẻ:</p>
              <p className='uppercase text-[15px]'>GARENA</p>
            </div>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Mệnh giá thẻ:</p>
              <p className=' text-[15px]'>{formatNumberWithDots(activeMenhGia)}đ</p>
            </div>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Số lượng:</p>
              <p className='uppercase text-[15px]'>{quantity}</p>
            </div>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Email nhận:</p>
              <p className='uppercase text-[15px]'>{email}</p>
            </div>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Phí dịch vụ:</p>
              <p className=' text-[15px]'>Miễn phí</p>
            </div>
            <div className='flex justify-between font-medium border-b border-[#c32ef9] pb-1.5'>
              <p className='text-sm'>Giảm giá:</p>
              <p className=' text-[15px]'>{formatNumberWithDots(((activeMenhGia * 2) / 100) * quantity)}đ</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-6'>
            <div className='flex flex-col w-max md:w-[123px] flex-shrink-0 items-center justify-center md:justify-start'>
              <p className='font-medium mb-2'>Số lượng thẻ:</p>
              <div className='flex items-center gap-2 mb-2 w-max'>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  style={{
                    boxShadow:
                      '0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12)'
                  }}
                  className='bg-white disabled:bg-[#0000001f] text-black rounded-full'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                  </svg>
                </button>
                <div className='text-black bg-white font-bold py-1 px-3 rounded'>{quantity}</div>
                <button
                  disabled={quantity === 10}
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    boxShadow:
                      '0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)'
                  }}
                  className='bg-[#0ca4b0] disabled:bg-[#0000001f] disabled:text-black text-white rounded-full'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                  </svg>
                </button>
              </div>
              <button
                disabled={quantity === 10}
                onClick={() => setQuantity(10)}
                style={{
                  boxShadow: '0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)'
                }}
                className='disabled:bg-[#0000001f] disabled:text-black uppercase text-sm rounded bg-[#c32ef9] w-[64px] h-[24px] flex items-center justify-center'
              >
                Max
              </button>
            </div>
            <div className='w-full md:flex-1 space-y-3'>
              <div className='flex flex-col '>
                <label htmlFor='email' className='text-sm font-semibold mb-2'>
                  <span className='text-[#ff5252] '>*</span>Email nhận mã thẻ
                </label>
                <input
                  id='email'
                  className={`bg-white px-3 py-2 rounded w-full ring-2 ${
                    isValid !== null && !isValid ? 'ring-[#ff5252]' : 'ring-white'
                  }  text-gray-600`}
                  type='email'
                  value={email}
                  onChange={handleInputEmailChange}
                  placeholder='Vui lòng nhập email nhận mã thẻ'
                />
                {isValid !== null && !isValid && (
                  <p className='text-[#ff5252] text-xs pl-3 mt-1'>E-mail sai định dạng</p>
                )}
              </div>
              <div className='flex flex-col '>
                <label htmlFor='phone' className='text-sm font-semibold mb-2'>
                  Số điện thoại
                </label>
                <input
                  id='phone'
                  value={phone}
                  onChange={handleInputChange}
                  className={`bg-white px-3 py-2 rounded w-full ring-2  ${
                    isValidPhone !== null && !isValidPhone ? 'ring-[#ff5252]' : 'ring-white'
                  } text-gray-600`}
                  type='text'
                  placeholder='Số điện thoại'
                />
                {isValidPhone !== null && !isValidPhone ? (
                  <p className='text-[#ff5252] text-xs pl-3 mt-1'>Số điện thoại không hợp lệ</p>
                ) : (
                  <p className='h-[20px]'></p>
                )}
              </div>
            </div>
          </div>
          <div className='text-[#f44336] text-[13px] font-medium mt-1 text-center'>
            Đề nghị quý khách điền chính xác địa chỉ email để tránh nhầm lẫn và mất thẻ. Quý khách cũng vui lòng kiểm
            tra email cả trong mục Spam trong trương hợp chưa nhận được email mã thẻ
          </div>
          <div className='flex items-center justify-between pt-5 pb-9 text-white text-lg font-medium '>
            <span>Tổng tiền</span>
            <span>{formatNumberWithDots(tongSoTien())}đ</span>
          </div>
          <button
            onClick={handlePayment}
            className='bg-[#c32ef9] uppercase sticky bottom-0 font-medium h-[52px] w-full rounded-md'
          >
            Thanh toán ngay
          </button>
        </div>
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation()
          setShowModal(false)
        }}
        className={`${
          showModal ? 'opacity-100 visible' : 'opacity-0 invisible'
        }  top-0 left-0 w-full h-full bg-[#0000005d] fixed transition-all z-30`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className='bg-white flex flex-col rounded max-w-[800px] overflow-y-auto w-[90%] h-[80vh] md:h-[90vh] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
        >
          <div className='bg-[#0a3f9b] text-white rounded-t px-4 py-3 flex gap-x-6 items-center'>
            <button onClick={() => setShowModal(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
            <p className='text-xl'>Lựa chọn {activePayment?.title} để thanh toán</p>
          </div>
          <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 p-5 '>
            {listBank?.map((item: any, index: number) => (
              <div
                onClick={() => {
                  setActiveBank(item)
                  setShowModal(false)
                  handleChangeImage(item)
                }}
                key={index}
                className={`${
                  activeBank === item ? 'border-[#c32ef9]' : 'border-[#4aa100]'
                } border-[3px]  hover:border-[#002bff]  rounded-2xl px-1 py-0.5 h-[80px] relative cursor-pointer flex justify-center items-center`}
              >
                <div className='h-full w-full flex items-center '>
                  <img src={item.image} alt={item.image} loading='lazy' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
