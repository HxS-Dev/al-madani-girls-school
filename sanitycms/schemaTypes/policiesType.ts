import {defineField, defineType} from 'sanity'

export const policiesType = defineType({
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'pdf',
      title: 'Policy PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: selection.title ? String(selection.title) : 'Name not set',
      }
    }
  },
})