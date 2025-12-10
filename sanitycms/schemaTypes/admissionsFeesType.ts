import {defineField, defineType} from 'sanity'

export const admissionsFeesType = defineType({
  name: 'admissionsFees',
  title: 'Admissions Fees',
  type: 'document',
  description: 'Only one admissions fees record is allowed. To update, edit this record instead of creating a new one.',
  fields: [
    defineField({
      name: 'rows',
      title: 'Fees Table Rows',
      type: 'array',
      of: [
        defineField({
          name: 'row',
          title: 'Row',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'value', title: 'Value', type: 'string', validation: Rule => Rule.required() },
          ],
        })
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Admissions Fees',
      }
    }
  },
})