import { revalidatePath } from 'next/cache'

export const revalidateSite = () => {
  revalidatePath('/', 'layout')
}
