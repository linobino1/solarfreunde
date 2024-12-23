import React from 'react'
import { parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { dateFnsLocale, timezone } from '@/util/config'

type Props = {
  iso: string
  format?: string
  className?: string
}

export const Date: React.FC<Props> = ({ iso, className, format }) => {
  const date = parseISO(iso)
  if (!date || isNaN(date.getMilliseconds())) {
    console.log('encountered invalid date', iso)
    return <></>
  }
  const str = formatInTimeZone(date, timezone, format ?? 'PPP', {
    locale: dateFnsLocale,
  })

  return (
    <time suppressHydrationWarning className={className} dateTime={iso}>
      {str}
    </time>
  )
}
