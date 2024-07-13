import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolioSettings',
  type: 'document',
  title: 'Portfolio Settings',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'projectDisplay',
      title: 'Projects to display',
      type: 'string',
      options: {
        list: [
          { title: 'Games', value: 'gameProject' },
          { title: 'Websites', value: 'webProject' }
        ]
      },
      initialValue: 'gameProject'
    }),
  ],
});
