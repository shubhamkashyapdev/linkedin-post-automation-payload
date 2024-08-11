'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { HumanMessage } from '@langchain/core/messages'
import { JsonOutputParser } from '@langchain/core/output_parsers'

const model = new ChatGoogleGenerativeAI({
  modelName: 'gemini-1.5-flash',
  maxOutputTokens: 2048,
})
type GeneratedPost = {
  title: string
  body: string
}

export const generatePost = async ({
  topic,
  description,
}: {
  topic: string
  description: string
}) => {
  // get the topic prompt global
  const postPrompt = await getPostPrompt()
  const prompt = postPrompt.body.replace('[Topic]', topic).replace('[Description]', description)
  const parser = new JsonOutputParser<GeneratedPost>()
  const input = [
    new HumanMessage({
      content: [
        {
          type: 'text',
          text: prompt,
        },
      ],
    }),
  ]
  const response = await model.invoke(input)
  const parsedResponse = await parser.parse(response.content as string)
  return parsedResponse
}

export const getPostPrompt = async () => {
  const payload = await getPayloadHMR({ config })
  const postPrompt = await payload.findGlobal({
    slug: 'postPrompt',
  })
  return postPrompt
}
