import { useRoutes } from 'react-router-dom'
import Home from '~/pages/Home'
import HomeLayout from '~/layouts/HomeLayout'
import NotFound from '~/pages/NotFound'
import VNPayPayment from '~/pages/VNPayPayment'
import MegaPay from '~/pages/MegaPay'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/vnpay-payment',
      element: (
        <HomeLayout>
          <VNPayPayment />
        </HomeLayout>
      )
    },
    {
      path: '/pg_was/link.do/id/:id',
      element: <MegaPay />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
