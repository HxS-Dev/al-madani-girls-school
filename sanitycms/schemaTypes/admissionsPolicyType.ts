import {defineField, defineType} from 'sanity'

export const admissionsPolicyType = defineType({
  name: 'admissionsPolicy',
  title: 'Admissions Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'pdf',
      title: 'Admissions Policy PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: Rule => Rule.required(),
      description: 'Only one admissions policy is allowed. Edit this record to update the policy.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Admissions Policy',
      }
    }
  },
})