import { defineField, defineType } from 'sanity'
import pageComponents from './components/index';

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'profile_image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [...pageComponents],
      options: {
        canDuplicate: true,
      },
    }),
  ],
});
