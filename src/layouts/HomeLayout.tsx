import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'
import bg_base from '~/assets/icons/bg_page.png'
const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <main style={{ backgroundImage: `url("${bg_base}")` }}>
      <Header></Header>
      <div className='max-w-[1200px] mx-auto py-6 pb-40 px-3 md:px-0'>{children}</div>
      <Footer></Footer>
    </main>
  )
}

export default HomeLayout
