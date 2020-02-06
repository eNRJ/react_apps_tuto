import React, { FC } from 'react'

export const ItemList: FC<{title:string, description?:string, image:string}> = ({title, description, image}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img style={{maxWidth: '200px'}} src={image} alt={title} />
      <p>{description}</p>
    </div>
  )
}
