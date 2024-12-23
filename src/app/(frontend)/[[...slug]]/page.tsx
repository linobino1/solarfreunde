import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { siteTitle } from '@/util/config'
import { Media } from '@/payload-types'
import { generateTitle } from '@/util/generateTitle'

export async function generateStaticParams() {
  const payload = await getPayload({
    config,
  })
  const pages = await payload.find({
    collection: 'pages',
    depth: 0,
  })
  return pages.docs.map(({ slug }) => ({
    slug: [slug === 'home' ? '' : slug],
  }))
}

const getData = async ({ slug }: { slug?: string }) => {
  const payload = await getPayload({
    config,
  })
  const page = (
    await payload.find({
      collection: 'pages',
      depth: 2,
      where: {
        slug: {
          equals: slug ?? 'home',
        },
      },
    })
  ).docs[0]

  if (!page) {
    return notFound()
  }

  return {
    page,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const slug = ((await params).slug ?? [])[0]

  const { page } = await getData({
    slug,
  })

  const title = generateTitle(
    page?.meta?.title && page.meta.title !== siteTitle ? `${page?.meta?.title}` : page.title,
  )
  const description = page?.meta?.description ?? undefined
  const imageUrl = (page.meta?.image as Media | undefined)?.url

  return {
    title,
    description,
    openGraph: {
      description,
      images: [...(imageUrl ? [{ url: imageUrl }] : [])],
      title,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = ((await params).slug ?? [])[0]

  const { page } = await getData({ slug })
  return (
    <>
      <Hero page={page} />
      <RenderBlocks blocks={page.blocks} />
    </>
  )
}
