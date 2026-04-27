import fs from 'fs'
import nunjucks from 'nunjucks'

export function render_template(name: string, data: object): string {
  nunjucks.configure({ autoescape: false })

  const path = `${process.cwd()}/public/templates/${name}`

  const file = fs.readFileSync(path, 'utf-8')

  return nunjucks.renderString(file, data)
}
