'use client'
import React from 'react'
import { useForm, useAllFormFields } from '@payloadcms/ui'
import { getTopicById } from '@/actions/topic'

const GeneratePost = ({ label, ...rest }: { label: string }) => {
  const [fields] = useAllFormFields()
  const { replaceState } = useForm()

  const handleGenerate = async () => {
    const topicId = fields.postTopic.value as string
    if (!topicId) {
      alert('Please select a topic')
      return
    }

    const topic = await getTopicById({ id: topicId })
    if (!topic) {
      alert('Topic not found')
      return
    }
    replaceState({
      postTopic: fields.postTopic,
      title: {
        ...fields.title,
        value: topic.name,
      },
      body: {
        ...fields.body,
        value: topic.description,
      },
    })
  }

  return (
    <button
      style={{
        padding: '10px',
        backgroundColor: 'white',
        border: '1px solid black',
        color: 'black',
        borderRadius: '5px',
        margin: '10px 0px',
      }}
      type="button"
      onClick={handleGenerate}
    >
      {label}
    </button>
  )
}

export default GeneratePost
