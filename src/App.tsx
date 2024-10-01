// import ScrollToTop from './components/scrolltop/scrollTop'
import useRouteElements from './routes/useRouteElements'

const App = () => {
  const routeElements = useRouteElements()
  return (
    <>
      {/* <ScrollToTop /> */}
      {routeElements}
    </>
  )
}

export default App
