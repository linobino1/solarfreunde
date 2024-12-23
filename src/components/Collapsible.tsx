'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/util/cn'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: number
}

export const Collapsible: React.FC<Props> = ({ maxHeight = 230, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const height = ref.current?.clientHeight
    const collapse = !!height && height > maxHeight
    setIsActive(collapse)
    setIsCollapsed(collapse)
  }, [ref, maxHeight])

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn('relative overflow-hidden', {
          'opacity-80 mb-1': isCollapsed,
        })}
        style={{ maxHeight: isCollapsed ? maxHeight : undefined }}
      >
        <div ref={ref}>{props.children}</div>
        {isCollapsed && (
          <div
            className={cn(
              'absolute inset-0 bottom-0 top-auto h-full max-h-20 bg-gradient-to-t from-white to-transparent',
            )}
          />
        )}
      </div>
      {isCollapsed && (
        <button onClick={() => setIsCollapsed(false)} className="text-green-500">
          Weiterlesen
        </button>
      )}
      {!isCollapsed && isActive && (
        <button onClick={() => setIsCollapsed(true)} className="text-green-500">
          Weniger anzeigen
        </button>
      )}
    </div>
  )
}
