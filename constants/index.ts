import { IProjectStack, ProjectType } from '@/types/project/project.types'

export const coreCompetencies = [
  'Backend Architecture',
  'API Design',
  'Database Management',
  'Functional Frontend',
]

export const stack: IProjectStack = {
  backend: {
    languages: ['TypeScript', 'JavaScript', 'Python'],
    tools: ['Node.js'],
    frameworks: ['NestJS', 'Fastify', 'Express'],
  },
  frontend: {
    languages: ['TypeScript', 'JavaScript'],
    tools: ['Tailwind CSS', 'Shadcn/UI', 'Zustand'],
    frameworks: ['Next.js', 'React'],
  },
  infrastructure: {
    virtualization: ['Docker'],
    // orchestration: ['Kubernetes'],
    messaging: ['RabbitMQ'],
    discovery: ['Consul'],
  },
  persistence: {
    databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    orm: ['Prisma', 'TypeORM'],
    caches: ['Redis'],
    storages: ['AWS S3', 'Cloudinary'],
  },
  networking: {
    monitoring: ['Prometheus', 'Grafana'],
    logging: ['Elasticsearch', 'Logstash', 'Kibana'],
    tracing: ['Jaeger'],
  },
}

export const projects: {
  name: string
  type: ProjectType
  status: string
  description: string
  stack: IProjectStack
}[] = [] as const
