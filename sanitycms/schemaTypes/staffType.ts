import {defineField, defineType} from 'sanity'

export const staffType = defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'staffGroup',
      title: 'Staff Group',
      type: 'reference',
      to: [{ type: 'staffGroup' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
    },
    prepare(selection) {
      return {
        title: selection.title ? String(selection.title) : 'Staff name not set',
        subtitle: selection.subtitle,
      }
    }
  },
})