import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'uhl4ytz2',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})