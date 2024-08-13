import GeneratePost from '@/components/payload/GeneratePost'
import { CollectionConfig } from 'payload'

export const Post: CollectionConfig = {
  slug: 'post',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'postTopic',
      type: 'relationship',
      relationTo: 'topic',
      required: true,
    },
    {
      name: 'generatePost',
      type: 'ui',
      admin: {
        components: {
          Field: GeneratePost,
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'imageDescription',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
