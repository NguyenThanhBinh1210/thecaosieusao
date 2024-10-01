/* eslint-disable @typescript-eslint/no-explicit-any */
import VietNam from '~/assets/icons/VietNam.jpg'
import English from '~/assets/icons/English.jpg'
import Korea from '~/assets/icons/Korea.jpg'
import banner2 from '~/assets/icons/92eef3cc724caf414e70586e72c13be9.png'
import banner1 from '~/assets/icons/67c777d98f3ab61076b2f3c740b8a462.png'
import epay from '~/assets/icons/epay-logo-new.png'
import PCIDSS from '~/assets/icons/PCIDSS.png'
import epayDefault from '~/assets/icons/epayDefault.png'
import ico_noti from '~/assets/icons/ico_noti.png'
import down from '~/assets/icons/down.png'
import supportBank from '~/assets/icons/supportBank.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const MegaPay = () => {
  const [showBank, setShowBank] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputValueName, setInputValueName] = useState('')
  const navigate = useNavigate()
  const formatInput = (value: any) => {
    const numbersOnly = value.replace(/\D/g, '')
    const limitedNumbers = numbersOnly.slice(0, 19)
    const formattedValue = limitedNumbers.replace(/(.{4})/g, '$1-').replace(/-$/, '')
    return formattedValue
  }

  function replaceDashesWithSpaces(input: string) {
    const result = input.replace(/-/g, ' ')
    return result
  }

  const handleInputChange = (e: any) => {
    const value = e.target.value

    const formattedValue = formatInput(value)

    setInputValue(formattedValue)
  }

  function handleInputLettersAndSpacesOnly(e: any) {
    const value = e.target.value

    let lettersAndSpacesOnly = value.replace(/[^a-zA-Z\s]/g, '')
    lettersAndSpacesOnly = lettersAndSpacesOnly.slice(0, 26)

    setInputValueName(lettersAndSpacesOnly)
  }
  const [inputValueDay, setInputValueDay] = useState('')

  const handleInputChangeDay = (e: any) => {
    let value = e.target.value
    value = value.replace(/\D/g, '')
    value = value.slice(0, 4)
    if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,3})/, '$1/$2')
    }
    setInputValueDay(value)
  }

  return (
    <div className='bg-[#7f7f7f] min-h-screen w-[140vh] md:w-full px-4 min-w-full flex items-center justify-center'>
      <div className='w-full  max-w-[800px] h-[93vh] bg-white flex'>
        <div className='flex-1 flex flex-col'>
          <div className='flex justify-between h-[74px] items-end px-8 py-2'>
            <img className='h-[58px]' src={epay} alt='epay' />
            <img className='h-[45px]' src={PCIDSS} alt='PCIDSS' />
          </div>
          <div className='flex-1 flex '>
            <div className='flex pl-3 flex-col h-full w-[194px] '>
              <div className='bg-[#ef5459] flex  justify-between w-full text-white pt-2.5 pb-1 px-2'>
                <p className='text-[13px]'>Thẻ ATM</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width={52}
                  height={29}
                  viewBox='0 0 52 29'
                  fill='none'
                >
                  <rect width={52} height={29} fill='url(#pattern0)' />
                  <defs>
                    <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
                      <use xlinkHref='#image0' transform='translate(0 -0.00532915) scale(0.00454545 0.00815047)' />
                    </pattern>
                    <image
                      id='image0'
                      width={220}
                      height={124}
                      xlinkHref='data:image/png;base64,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'
                    />
                  </defs>
                </svg>
              </div>
              <div className='mt-auto '>
                <img src={banner1} alt='banner1' />
              </div>
            </div>
            <div className='flex-1 flex flex-col   h-full w-[388px]'>
              <div className='bg-[#F8F8F8] pb-6 h-[187px]'>
                <div
                  className='relative w-[291px] h-[163px] mx-auto rounded-2xl overflow-hidden'
                  style={{ boxShadow: '1px 1px 5px 1px #888888' }}
                >
                  <img src={epayDefault} className='w-full h-full' alt='epayDefault' />
                  <div className='absolute w-full h-full top-0 left-0 px-5 flex flex-col justify-end pb-3'>
                    {inputValue ? (
                      <p className='text-[#040444] text-lg font-bold'>{replaceDashesWithSpaces(inputValue)}</p>
                    ) : (
                      <p className='text-[#a1a1a9] text-2xl'>•••• •••• •••• ••••</p>
                    )}
                    {inputValueName ? (
                      <p className='text-[#a1a1a9] uppercase'>{inputValueName}</p>
                    ) : (
                      <p className='text-[#a1a1a9]'>NGUYEN VAN A</p>
                    )}
                    <p className='text-[#3A3A44] text-xs mt-1'>Ngày phát hành</p>
                    {inputValueDay ? (
                      <p className=' text-[#3A3A44]'>{inputValueDay}</p>
                    ) : (
                      <p className='text-[#a1a1a9] text-2xl'>••/••</p>
                    )}
                  </div>
                </div>
              </div>
              <div className=' bg-[#F8F8F8]  px-1.5 overflow-y-auto no-scrollbar h-[385px]'>
                <div className='w-full h-full bg-white pb-6 px-6 pt-3 overflow-y-auto'>
                  <p className='text-xs mb-2'>Số thẻ</p>
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Số thẻ'
                    className='mb-3 border text-[15px] text-gray-500 w-full px-3 py-1'
                  />
                  <p className='text-xs mb-2'>Ngày phát hành</p>
                  <input
                    type='text'
                    value={inputValueDay}
                    onChange={handleInputChangeDay}
                    placeholder='MM/YY (Ngày phát hành)'
                    className='mb-3 border text-[15px] text-gray-500 w-full px-3 py-1'
                  />
                  <p className='text-xs mb-2'>Tên chủ thẻ</p>
                  <input
                    value={inputValueName}
                    onChange={handleInputLettersAndSpacesOnly}
                    type='text'
                    placeholder='Tên chủ thẻ (Có dấu cách)'
                    className='mb-3 border text-[15px] text-gray-500 w-full px-3 py-1'
                  />
                  <button className='bg-[#ef5459] text-sm ml-auto block text-white w-[162px] h-[34px] rounded'>
                    Tiếp theo
                  </button>
                  <div>
                    <p className='text-red-600 text-[11px] text-end mt-1 underline'>
                      Hướng dẫn đăng ký thanh toán online
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <img src={ico_noti} alt='ico_noti' className='size-[26px] flex-shrink-0' />
                    <div className='text-[11px]'>
                      <p className='mb-3'>
                        Vui lòng không đóng cửa sổ thanh toán sau khi nhập OTP và đợi tới khi bạn được chuyển về trang
                        của nhà cung cấp sản phẩm để giao dịch không bị gián đoạn.
                      </p>
                      <p>
                        Quý khách cần đăng kí tính năng thanh toán bằng số tài khoản với ngân hàng trước khi thanh toán.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => setShowBank(!showBank)}
                    className='border mt-4 justify-between border-black cursor-pointer rounded-md px-2 py-1 pb-2 flex items-center'
                  >
                    <p className='text-sm'>Danh sách ngân hàng hỗ trợ</p>
                    <button>
                      <img src={down} alt='down' />
                    </button>
                  </div>
                  {showBank && (
                    <div className='flex justify-center py-5'>
                      <img src={supportBank} alt='supportBank' />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[210px] bg-[#ef5459] p-[15px] text-white flex flex-col'>
          <div>
            <div className='flex justify-between'>
              <div className='flex gap-1'>
                <img className='h-max' src={VietNam} alt='VietNam' loading='lazy' width={20} />
                <img className='h-max' src={English} alt='English' loading='lazy' width={20} />
                <img className='h-max' src={Korea} alt='Korea' loading='lazy' width={20} />
              </div>
              <button onClick={() => navigate(-1)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6 text-white translate-x-2.5 -translate-y-2.5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <p className='pt-[25px] pb-[30px] font-bold'>Thông tin đơn hàng</p>
            <p className='text-[13px] font-medium'>Mã đơn hàng</p>
            <p className='text-[13px] font-bold w-full text-wrap break-words mb-[25px]'>
              b5975ce7a4e4a8191b058ff15d17da
            </p>
            <p className='text-[13px] font-medium'>Nhà cung cấp dịch vụ</p>
            <p className='text-[13px] font-bold pb-[25px] border-b border-gray-200'>MGM VN</p>
            <p className='uppercase mt-2 text-[13px]'>Giá trị thanh toán</p>
            <p className='uppercase text-right font-bold text-[13px]'>50.477 vnđ</p>
          </div>
          <div className='mt-auto'>
            <img src={banner2} alt='banner2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaPay
