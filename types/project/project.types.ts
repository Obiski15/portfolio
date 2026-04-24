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
    messaging?: string[]
  }
  persistence?: {
    databases?: string[]
    caches?: string[]
    storages?: string[]
  }
  networking?: {
    monitoring?: string[]
    logging?: string[]
    tracing?: string[]
  }
}
