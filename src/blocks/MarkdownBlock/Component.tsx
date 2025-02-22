import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownBlockProps = {
  markdownContent: string
}

export const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ markdownContent }) => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        <div className="col-span-4 lg:col-span-12">
          <div className="prose dark:prose-invert w-full max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
