import { Button } from 'bootstrap'
import React, { useState } from 'react'

export default function NightMode() {
  const [nightmode, setNightmode] = useState(true)

  const handleClick = () => {
    setNightmode(!nightmode)
  }

  return (
    <Button onClick={handleClick()}></Button>
  )
}
