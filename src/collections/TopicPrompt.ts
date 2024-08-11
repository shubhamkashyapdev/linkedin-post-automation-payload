import { GlobalConfig } from 'payload'

export const TopicPrompt: GlobalConfig = {
  slug: 'topicPrompt',
  fields: [
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
  ],
}
