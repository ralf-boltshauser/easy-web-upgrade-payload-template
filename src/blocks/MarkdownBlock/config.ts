import type { Block } from 'payload'

export const MarkdownBlock: Block = {
  slug: 'markdownBlock',
  interfaceName: 'MarkdownBlock',
  fields: [
    {
      name: 'markdownContent',
      type: 'textarea',
      label: 'Markdown Content',
      required: true,
      admin: {
        description: 'Enter Markdown content. This will be rendered as formatted text.',
        rows: 12,
      },
    },
  ],
}
