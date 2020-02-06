import React from 'react'

export const List: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}
