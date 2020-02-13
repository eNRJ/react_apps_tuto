import React from 'react'

interface IProps {
  podcasts: JSX.Element[]
}

export const quizz: React.FC<IProps> = (podcasts) => {
  return (
    <div>
      {podcasts}
    </div>
  )
}
