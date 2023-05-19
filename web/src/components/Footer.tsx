import { Github } from 'lucide-react'

export function Footer() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      <p>Vai dar tudo certo.</p>
      <a target="_blank" rel="noreferrer" href="">
        <Github
          className="mt-1 text-green-300 hover:text-green-600"
          height={24}
        />
      </a>
    </div>
  )
}
