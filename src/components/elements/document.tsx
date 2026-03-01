import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Document({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'space-y-4 text-sm/7 text-mist-700 dark:text-mist-400 [&_a]:font-semibold [&_a]:text-mist-950 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-white [&_h2]:text-base/8 [&_h2]:font-medium [&_h2]:text-mist-950 [&_h2]:not-first:mt-8 dark:[&_h2]:text-white [&_li]:pl-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-mist-950 dark:[&_strong]:text-white [&_ul]:list-[square] [&_ul]:pl-6 [&_ul]:marker:text-mist-400 dark:[&_ul]:marker:text-mist-600 [&_table]:w-full [&_table]:border-collapse [&_table]:text-xs [&_td]:border [&_td]:border-mist-200 [&_td]:p-2 [&_td]:align-top dark:[&_td]:border-mist-700 [&_th]:border [&_th]:border-mist-200 [&_th]:bg-mist-100 [&_th]:p-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-mist-950 dark:[&_th]:border-mist-700 dark:[&_th]:bg-mist-800 dark:[&_th]:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
