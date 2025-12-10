import {defineField, defineType} from 'sanity'

export const applicationTimelineType = defineType({
  name: 'applicationTimeline',
  title: 'Application Timeline',
  type: 'document',
  description: 'Only one application timeline record is allowed. To update the cycle, edit this record instead of creating a new one.',
  fields: [
    defineField({
      name: 'cycle',
      title: 'Application Cycle',
      type: 'string',
      description: 'e.g. September 2026',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rows',
      title: 'Timeline Rows',
      type: 'array',
      of: [
        defineField({
          name: 'row',
          title: 'Row',
          type: 'object',
          fields: [
            { name: 'date', title: 'Date', type: 'string', validation: Rule => Rule.required() },
            { name: 'description', title: 'Description', type: 'string', validation: Rule => Rule.required() },
            { name: 'fee', title: 'Fee/Note', type: 'string' },
          ],
        })
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'cycle' },
    prepare(selection) {
      return {
        title: selection.title || 'Application Timeline',
      }
    }
  },
})