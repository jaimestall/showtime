import { EmptyMemories } from '@/components/EmptyMemories'
import { LinkDetails } from '@/components/LinkDetails'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'
import Image from 'next/image'

dayjs.locale(ptBr)

interface MemoryProps {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: MemoryProps[] = response.data

  if (memories.length === 0) {
    ;<EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              className="aspect-video w-full rounded-lg object-cover"
              src={memory.coverUrl}
              alt="Imagem da memória"
              width={592}
              height={280}
            />
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <LinkDetails id={memory.id} />
          </div>
        )
      })}
    </div>
  )
}
