"use client"
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function MainLayoutFile({children}) {
  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
