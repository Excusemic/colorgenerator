import React, { useState, useEffect } from "react"

const Colorgenerator = (props) => {
  const [alert, setAlert] = useState(false)
  const { weight } = props.colors
  const hex = props.colors.hex
  const handleClick = () => {
    if (!alert) {
      navigator.clipboard.writeText(`#${hex}`)
      setAlert(true)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000)
  }, [alert])
  return (
    <div
      className={props.index <= 10 ? "textblack colorBlock" : "textwhite colorBlock"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
      <h6 style={alert ? { opacity: 1 } : { opacity: 0 }}>Copied to clipboard</h6>
    </div>
  )
}

export default Colorgenerator
