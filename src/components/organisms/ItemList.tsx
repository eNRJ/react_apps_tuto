import React, { FC } from 'react'

interface IProp {
  title:string,
  description?:string,
  image:string
}

export const ItemList: FC<IProp> = ({title, description, image}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img style={{maxWidth: '200px'}} src={image} alt={title} />
      <p>{description}</p>
    </div>
  )
}
