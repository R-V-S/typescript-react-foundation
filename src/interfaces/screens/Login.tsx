import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

type Props = {
  isLoggedIn: boolean
}

export const Login = ({ isLoggedIn }: Props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmailInput = (val: string) => setEmail(val)
  const handlePasswordInput = (val: string) => setPassword(val)

  return isLoggedIn ? (
    <Redirect push to='/app/projects' />
  ) : (
    <section>
      <Link to='/'>Back to Intro</Link>
      <form>
        <input
          type='email'
          name='email'
          value={email}
          onChange={e => handleEmailInput(e.target.value)}
          autoComplete='email'
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => handlePasswordInput(e.target.value)}
          autoComplete='current-password'
        />
        <input type='submit' onClick={e => e.preventDefault()} value='Log in' />
      </form>
    </section>
  )
}
