import { Link } from 'react-router-dom'
import logo from '~/assets/icons/logo-no-footer.png'
const Footer = () => {
  return (
    <footer className='max-w-[1200px] text-white mx-auto  border-t-[10px] py-10 px-6  border-[#0a3f9b]'>
      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-7 md:flex items-center md:my-7'>
          <img src={logo} alt='logo' loading='lazy' className='mx-auto md:mx-0' />
          <p className='text-[30px] font-medium text-center mb-7 md:mb-0'>Công ty cổ phần MGM VN</p>
        </div>
      </div>
      <div className='gap-y-10 grid md:grid-cols-12'>
        <div className='md:col-span-7'>
          <p className='text-lg font-medium mb-4'>Địa chỉ: Số 66 Tân Vĩnh, Phường 06, Quận 4, Thành phố Hồ Chí Minh</p>
          <p className='text-lg font-medium'>Hotline: 08.622.12.722</p>
          <p className='text-lg font-medium'>Email: hotro@thegamevip.vn</p>
        </div>
        <div className='md:col-span-5 text-lg font-medium flex flex-col'>
          <Link to={'/'} className='mb-4'>
            Chính sách bảo mật
          </Link>
          <Link to={'/'} className='mb-4'>
            Chính sách giao hàng
          </Link>
          <Link to={'/'} className='mb-4'>
            Chính sách bảo hành & đổi trả
          </Link>
          <Link to={'/'} className='mb-4'>
            Chính sách bán hàng
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
