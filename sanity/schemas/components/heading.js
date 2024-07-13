import { defineField, defineType } from 'sanity'
// import { FaHeading } from 'react-icons/fa';

export default defineType({
  name: 'heading',
  type: 'object',
  title: 'Heading',
  // icon: FaHeading,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      description: 'Defaults to H1',
      type: 'string',
      of: [{ type: 'string' }],
      options: {
        list: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
      },
    }),
  ],
  preview: {
    select: {
      text: 'text',
      level: 'level',
    },
    prepare({ text, level = 'H1' }) {
      return {
        title: text,
        subtitle: level,
      };
    },
  },
});
