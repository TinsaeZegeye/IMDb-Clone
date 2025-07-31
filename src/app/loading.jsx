import React from 'react'

export default function loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img className='h-96' src="spinner.svg" alt="loading..." />
    </div>
  )
}
