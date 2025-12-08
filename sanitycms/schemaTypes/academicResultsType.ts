import {defineField, defineType} from 'sanity'

export const academicResultsType = defineType({
  name: 'academicResults',
  title: 'Academic Results',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'pdf',
      title: 'Academic Results PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
  preview: {
    select: {
      title: 'year',
    },
    prepare(selection) {
      return {
        title: selection.title ? String(selection.title) : 'Year not set',
      }
    }
  },
})