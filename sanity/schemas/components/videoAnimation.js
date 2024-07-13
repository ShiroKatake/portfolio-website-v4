// import { MdVideoLibrary } from "react-icons/md";
import { getFileAsset } from '@sanity/asset-utils';
import { Flex, Spinner } from "@sanity/ui";
import { defineField, defineType } from 'sanity'
import React from 'react';

const PROJECT_ID = "me5qn7sh";
const DATASET = "production";

const VideoPreview = props => {
  if (props.isLoading || !props.video || !props.video.asset) {
    return (
      <Flex justify="center">
        <Spinner muted />
      </Flex>
    )
  }
  const videoAsset = getFileAsset(props.video, {
    projectId: PROJECT_ID,
    dataset: DATASET
  })
  return (
    <Flex justify="center">
      <video loop muted autoPlay playsInline style={{ maxWidth: 545 }}>
        <source src={videoAsset.url} type={`video/${videoAsset.extension}`} />
      </video>
    </Flex>
  )
}

export default defineType({
  name: 'videoAnimation',
  title: 'Video animation',
  type: 'object',
  // icon: MdVideoLibrary,
  components: {
    preview: VideoPreview
  },
  fields: [
    defineField({
      name: 'mp4',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/mp4'
      }
    }),
    defineField({
      name: 'fallback',
      title: 'Fallback Image',
      type: 'image',
    }),
    defineField({
      name: 'aspectratio',
      title: 'Aspect Ratio',
      type: 'number',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'altText',
      title: 'Alternative text (for screen readers)',
      type: 'string',
    })
  ],
  preview: {
    select: {
      video: 'mp4'
    },
  }
})