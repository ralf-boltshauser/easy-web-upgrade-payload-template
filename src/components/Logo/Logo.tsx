import clsx from 'clsx'
import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  logo?: MediaType | string | number
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, logo } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  if (!logo) {
    return (
      /* eslint-disable @next/next/no-img-element */
      <img
        alt="Payload Logo"
        width={193}
        height={34}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
        src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
      />
    )
  }

  // If logo is a Media object from Payload or a relation
  if (typeof logo === 'object' || typeof logo === 'number') {
    return (
      <Media
        resource={logo}
        alt="Site Logo"
        loading={loading}
        priority={priority === 'high'}
        imgClassName={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      />
    )
  }

  // If logo is a string URL
  return (
    <img
      alt="Site Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src={logo}
    />
  )
}
