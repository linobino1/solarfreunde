import React from 'react'
import { Gutter } from './Gutter'
import { Image } from './Image'
import { Page } from '@/payload-types'
import { siteTitle } from '@/util/config'
import Link from 'next/link'

type Props = {
  page: Page
}

export const Hero: React.FC<Props> = ({ page: { hero } }) => {
  return hero === 'none' ? null : (
    <header className="mt-12 mb-11 md:my-16">
      <h1 className="sr-only">{siteTitle}</h1>
      <Gutter>
        <Link href="/" className="contents">
          <Image
            src="/logo.png"
            alt="Logo der Solarfreunde Esslingen"
            width={1235}
            height={1156}
            priority
            className="max-w-[180px] md:max-w-[240px] mx-auto"
          />
        </Link>
      </Gutter>
    </header>
  )
}
