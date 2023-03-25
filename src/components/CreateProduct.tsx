import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import Error from './Error'

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
onCreate : (product: IProduct) => void
}

const CreateProduct = ({onCreate}:CreateProductProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value.trim().length === 0) {
      setError('Please enter a valid title')
      return
    }
    setError('')
    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      <button
        type="submit"
        className="hover:text-white py-2 px-4 border bg-yellow-400"
      >
        Create
      </button>
      {error && <Error error={error} />}
    </form>
  )
}

export default CreateProduct
