import { Button } from '@nextui-org/react'
import { DatePicker } from '@nextui-org/react'
import '~/styles/header.scss'
const Login = () => {
  return (
    <header>
      <Button color='primary'>HIHI</Button>
      <DatePicker label='Birth date' className='max-w-[284px]' />
    </header>
  )
}

export default Login
