import React from 'react'

interface IProp {
  children: React.ReactNode
}

export const List: React.FC<IProp> = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}
