import {defineField, defineType} from 'sanity'

export const newslettersType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Full date for ordering',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'pdf',
      title: 'Newsletter PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})