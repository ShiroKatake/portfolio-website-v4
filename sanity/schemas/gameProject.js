import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gameProject',
  type: 'document',
  title: 'Game Project',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videoPreview',
      title: 'Video Preview',
      type: 'array',
      of: [
        { type: 'videoAnimation' }
      ],
      options: {
        sortable: false,
      },
      validation: Rule => Rule.length(1),
    }),
    defineField({
      name: 'supportImages',
      title: 'Supporting Images',
      type: 'array',
      of: [{
        type: 'image',
      }],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(100),
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'string',
    }),
    defineField({
      name: 'storeUrl',
      title: 'Store URL',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'includeInPortfolio',
      title: 'Include in Portfolio',
      type: 'boolean',
      initialValue: false
    }),
  ],
  orderings: [
    {
      title: 'By Release Date',
      name: 'releaseDate',
      by: [
        { field: 'releaseDate', direction: 'desc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'projectName',
      subtitle: 'releaseDate',
      media: 'coverImage'
    },
  },
});
