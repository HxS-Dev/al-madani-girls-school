import {defineField, defineType} from 'sanity'

export const staffGroupType = defineType({
  name: 'staffGroup',
  title: 'Staff Group',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Group Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: selection.title ? String(selection.title) : 'Group name not set',
      }
    }
  },
})