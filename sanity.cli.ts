import {defineCliConfig} from 'sanity/cli'
import config from './app-config'

export default defineCliConfig({
  api: {
    projectId: config.projectId,
    dataset: config.dataset,
  },
  graphql: [
    {
      playground: true,
    },
  ],
})
