import { CollectionConfig } from 'payload'

export const Topic: CollectionConfig = {
  slug: 'topic',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Approved', value: 'APPROVED' },
        { label: 'Rejected', value: 'REJECTED' },
      ],
      defaultValue: 'PENDING',
    },
  ],
  endpoints: [
    {
      path: '/generate-topics',
      method: 'post',
      // @ts-ignore
      handler: async (req, res, next) => {
        const { data } = await req.payload.find({
          collection: 'topic',
          query: {
            status: 'PENDING',
          },
        })

        const topics = data.map((topic: any) => ({
          name: topic.name,
          description: topic.description,
          tag: topic.tag,
          status: topic.status,
        }))

        return res.json(topics)
      },
    },
  ],
}
