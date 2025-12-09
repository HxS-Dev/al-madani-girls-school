import {defineField, defineType} from 'sanity'

export const eventsType = defineType({
  name: 'event',
  title: 'Event',
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
      title: 'Date of Event',
      type: 'date',
      description: 'Date of the event',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order of the event in listings (higher numbers appear first), leave empty to hide',
    }),
    defineField({
      name: 'pdf',
      title: 'Event PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})