import { IProjectStack, ProjectType } from '@/types/project/project.types'

export const stack: IProjectStack = {
  backend: {
    languages: ['nestjs', 'nestjs', 'nestjs'],
    tools: ['nestjs', 'nestjs', 'nestjs'],
    frameworks: ['nestjs', 'nestjs', 'nestjs'],
  },
  frontend: {
    languages: ['react', 'react', 'react'],
    tools: ['react', 'react', 'react'],
    frameworks: ['react', 'react', 'react'],
  },
  infrastructure: {
    virtualization: ['docker', 'docker', 'docker'],
    messaging: ['docker', 'docker', 'docker'],
  },
  persistence: {
    databases: ['postgres', 'postgres', 'postgres'],
    caches: ['redis', 'redis', 'redis'],
    storages: ['aws s3', 'aws s3', 'aws s3'],
  },
  networking: {
    monitoring: ['prometheus', 'prometheus', 'prometheus'],
    logging: ['elasticsearch', 'elasticsearch', 'elasticsearch'],
    tracing: ['jaeger', 'jaeger', 'jaeger'],
  },
}

export const projects: {
  name: string
  type: ProjectType
  status: string
  description: string
  stack: IProjectStack
}[] = [] as const
