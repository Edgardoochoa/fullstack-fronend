import { useState } from 'react'

function useCreateMovie (callback, defaults) {
  const [input, setInput] = useState(defaults)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useCreateMovie
