import { cn } from '@/util/cn'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export const Gutter: React.FC<Props> = ({ size = 'md', className, ...props }) => {
  return (
    <div
      className={cn(
        {
          'mx-auto w-full px-6': true,
          'max-w-[720px]': size === 'md',
        },
        //  {
        //   'bg-red-500/20': size === 'sm',
        //   'bg-green-500/20': size === 'md',
        //   'bg-blue-500/20': size === 'lg',
        // },
        className,
      )}
    >
      {props.children}
    </div>
  )
}
