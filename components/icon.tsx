import { LucideProps } from 'lucide-react'

interface IIcon extends LucideProps {
  Icon: React.ElementType
}

function Icon({ Icon, size = 12, ...props }: IIcon) {
  return <Icon size={size} {...props} />
}

export default Icon
