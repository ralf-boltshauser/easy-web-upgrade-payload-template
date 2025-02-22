import React from 'react'
import DOMPurify from 'isomorphic-dompurify'

type HTMLBlockProps = {
  htmlContent: string
}

export const HTMLBlock: React.FC<HTMLBlockProps> = ({ htmlContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent)

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        <div className="col-span-4 lg:col-span-12">
          <div
            className="prose dark:prose-invert w-full max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          />
        </div>
      </div>
    </div>
  )
}
