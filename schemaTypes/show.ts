import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Show name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'selectedWorks',
      title: 'Selected Works',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'artwork',
              options: {
                disableNew: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    }),
    defineField({
      name: 'author',
      title: 'Introduction Author',
      type: 'reference',
      to: {type: 'author'},
    }),
  ],
})
