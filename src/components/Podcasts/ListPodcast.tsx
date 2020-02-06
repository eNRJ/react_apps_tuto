import React, { Fragment } from 'react'
import Podcast from '../../models/Podcast'
import { ItemList, List } from '../organisms'

export const ListPodcast: React.FC<{podcasts: Podcast[]}> = ({podcasts}) => {
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
