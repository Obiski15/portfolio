import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/SocialIcons'
import { Mail } from 'lucide-react'

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Obiski15',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/obiski15',
    icon: LinkedinIcon,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/_obiski',
    icon: XIcon,
  },
  {
    name: 'Email',
    url: 'mailto:obiski15@gmail.com',
    icon: Mail,
  },
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export default function SocialLinks({ className = '', iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.name === 'Email' ? '_self' : '_blank'}
          rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
          aria-label={social.name}
          className="group inline-flex items-center justify-center p-2 text-zinc-500 transition-all duration-300 hover:text-emerald-400 active:scale-95"
        >
          <social.icon size={iconSize} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  )
}
