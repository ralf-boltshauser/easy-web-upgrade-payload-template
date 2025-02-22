import type { Block } from 'payload'

export const MarkdownBlock: Block = {
  slug: 'markdownBlock',
  labels: {
    singular: 'Markdown Block',
    plural: 'Markdown Blocks',
  },
  fields: [
    {
      name: 'markdownContent',
      type: 'textarea',
      label: 'Markdown Content',
      required: true,
      admin: {
        description: 'Enter Markdown content. This will be rendered as formatted text.',
      },
    },
  ],
}
