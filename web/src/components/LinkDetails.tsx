import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface IdProps {
  id: string
}

export function LinkDetails(props: IdProps) {
  return (
    <div>
      <Link
        href={`/memories/${props.id}`}
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
