import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import artwork from './artwork'
import show from './show'
import {
  podcast,
  episode,
  itunes,
  schedule,
  linkListItem,
  itunesEpisodeSettings,
  sponsor,
  sponsorRead,
  owner,
  categories,
} from './lib/sanity-plugin-podcast/src'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  artwork,
  show,
  podcast,
  episode,
  itunes,
  schedule,
  linkListItem,
  itunesEpisodeSettings,
  sponsor,
  sponsorRead,
  owner,
  categories,
]
