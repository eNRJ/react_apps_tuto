import React, { Component } from 'react'
import { getLastPodcasts } from '../../services/ContentApiRequest'
import Podcast from "../../models/Podcast";
import { ListPodcast } from './ListPodcast'

class PodcastList extends Component {

  state:{ podcasts:Podcast[] } = {
    podcasts: []
  }

  constructor(props: {}) {
    super(props)

    getLastPodcasts()
      .then((result: Podcast[]) => {
        this.setState({ podcasts: result })
      })
  }

  render () {
    return (
      <ListPodcast
        podcasts={this.state.podcasts}
      ></ListPodcast>
    )
  }
}

export default PodcastList
