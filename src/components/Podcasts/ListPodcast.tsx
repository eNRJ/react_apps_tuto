import React, { Fragment, FC } from 'react'
import Podcast from '../../models/Podcast'
import { ItemList, List } from '../organisms'

interface IProp {
  podcasts: Podcast[]
}

export const ListPodcast: FC<IProp> = ({podcasts}) => {
  return (
    <Fragment>
      <h1>Mes podcasts</h1>
      <List>
        {
          podcasts.map((podcast: Podcast) => (
            <ItemList
              key={podcast.id}
              image={podcast.programmation.program.picture}
              title={podcast.title}
              description={podcast.programmation.program.description}
            />
          ))
        }
      </List>
    </Fragment>
  )
}
