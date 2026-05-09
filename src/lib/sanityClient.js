import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cxr0khmp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
