import type { Block } from 'payload'

export const HTMLBlock: Block = {
  slug: 'htmlBlock',
  labels: {
    singular: 'HTML Block',
    plural: 'HTML Blocks',
  },
  fields: [
    {
      name: 'htmlContent',
      type: 'textarea',
      label: 'HTML Content',
      required: true,
      admin: {
        description: 'Enter raw HTML content. This will be sanitized before rendering.',
      },
    },
  ],
}
