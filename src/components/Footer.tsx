'use client'

import React from 'react'
import { cn } from '@/util/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Gutter } from './Gutter'

export const Footer = () => {
  const pathname = usePathname()
  const items = [
    { href: '/', label: 'Start' },
    { href: '/impressum', label: 'Impressum' },
  ]
  return (
    <Gutter>
      <footer className="text-center mt-12 py-4 text-sm text-gray-500">
        <nav className="flex gap-2 justify-center">
          {items
            .filter((x) => x.href !== pathname)
            .map(({ href, label }, index) => (
              <React.Fragment key={index}>
                <div className={cn({ hidden: index === 0 })}>|</div>
                <Link href={href} className={cn('no-underline')}>
                  {label}
                </Link>
              </React.Fragment>
            ))}
        </nav>
      </footer>
    </Gutter>
  )
}
