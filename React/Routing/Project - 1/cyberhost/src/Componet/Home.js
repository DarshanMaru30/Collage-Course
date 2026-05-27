import React from 'react'
import Header from './Header'
import Slide from './Slide'
import Service from './Service'
import Trust from './Trust'
import Pricing from './Pricing'
import Why from './Why'
import Pople from './Pople'
import Blog from './Blog'
import Logo from './Logo'
import Cta from './Cta'
import Dom from './Dom'

export default function Home() {
  return (
    <div>
      <Slide/>
      <Dom/>
      <Service/>
      <Trust/>
      <Pricing/>
      <Why/>
      <Pople/>
      <Blog/>
      <Logo/>
      <Cta/>
    </div>
  )
}
