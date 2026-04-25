export enum ProjectType {
  API = 'api',
  WEB = 'web',
  MOBILE = 'mobile',
}

export interface IProjectStack {
  backend?: {
    languages?: string[]
    tools?: string[]
    frameworks?: string[]
  }

  frontend?: {
    languages?: string[]
    tools?: string[]
    frameworks?: string[]
  }

  infrastructure?: {
    virtualization?: string[]
    discovery?: string[]
    messaging?: string[]
  }
  persistence?: {
    databases?: string[]
    caches?: string[]
    orm?: string[]
    storages?: string[]
  }
  networking?: {
    monitoring?: string[]
    logging?: string[]
    tracing?: string[]
  }
}
