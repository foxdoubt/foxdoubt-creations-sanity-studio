import dotenv from 'dotenv'

dotenv.config()

const projectId = process.env.SANITY_PROJECT_ID || ''
const dataset = process.env.SANITY_PROJECT_DATASET || ''

const config: Record<string, string> = {
  projectId,
  dataset,
}

export default config
