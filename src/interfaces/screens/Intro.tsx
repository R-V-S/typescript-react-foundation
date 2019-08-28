import * as React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  text: string
}

export const Intro = ({ text }: Props) => {
  return (
    <section>
      <p>{text}</p>
      <Link to='/login'>Login</Link>
    </section>
  )
}
