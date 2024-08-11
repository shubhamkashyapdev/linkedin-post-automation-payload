'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const getTopicById = async ({ id }: { id: string }) => {
  const payload = await getPayloadHMR({ config })
  const topic = await payload.findByID({
    collection: 'topic',
    id,
  })
  return topic
}

export const getTopicPrompt = async () => {
  const payload = await getPayloadHMR({ config })
  const topicPrompt = await payload.findGlobal({
    slug: 'topicPrompt',
  })

  return topicPrompt
}
