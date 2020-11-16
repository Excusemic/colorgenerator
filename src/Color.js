import React, { useState, useEffect } from "react"
import Values from "values.js"
import Colorgenerator from "./Colorgenerator"

const Color = () => {
  const [color, setColor] = useState("")
  const [allColors, setAllColors] = useState("")
  const [isError, setIsError] = useState(false)
  const handleChange = (e) => {
    setColor(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (color !== "") {
      try {
        const chosenColor = new Values(color).all(10)
        setIsError(false)
        setAllColors(chosenColor)
      } catch {
        setIsError(true)
      }
    }
  }
  useEffect(() => {
    const placeholder = new Values("#eb8c34").all(10)
    setAllColors(placeholder)
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color generator : </label>
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={handleChange}
          className={isError ? "error" : null}
          placeholder="#eb8c34"
        />

        <input type="submit" value="Submit" />
        <p className="errorP">{isError ? "Invalid input" : "Click to copy to clipboard"}</p>
      </form>

      <div className="allColors">
        {allColors !== "" ? (
          allColors.map((elem, index) => {
            return <Colorgenerator colors={elem} key={index} index={index} />
          })
        ) : (
          <div>Input color and generate</div>
        )}
      </div>
    </div>
  )
}

export default Color
