import {defineField, defineType} from 'sanity'

export const applicationFormType = defineType({
  name: 'applicationForm',
  title: 'Application Form',
  type: 'document',
  fields: [
    defineField({
      name: 'pdf',
      title: 'Application Form PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: Rule => Rule.required(),
      description: 'Only one application form is allowed. Edit this record to update the form.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Application Form',
      }
    }
  },
})