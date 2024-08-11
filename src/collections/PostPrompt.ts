import { GlobalConfig } from 'payload'

export const PostPrompt: GlobalConfig = {
  slug: 'postPrompt',
  fields: [
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
  ],
}
