import {defineField, defineType} from 'sanity'

export const annualCalendarType = defineType({
  name: 'annualCalendar',
  title: 'Annual Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'pdf',
      title: 'Annual Calendar PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: Rule => Rule.required(),
      description: 'Only one annual calendar is allowed. Edit this record to update the calendar.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Annual Calendar',
      }
    }
  },
})