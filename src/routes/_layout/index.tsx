import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_layout/')({
  component: Index,
})

function Index() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <h1 className='text-4xl'>Hello World</h1>
      <Button className='bg-amber-700'>Click me</Button>
    </div>
  )
}
