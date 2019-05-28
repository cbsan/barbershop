import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import nunjucks from 'nunjucks'
import path from 'path'

import env from './config/env'
import routes from './routes'

class App {
  public express: express.Application
  public isDev = false

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
    this.exception()

    this.isDev = env.NODE_ENV !== 'production'
    this.express.set('projectName', env.APP_NAME || 'NONAME')
    this.express.set('port', env.PORT || 3000)
    this.express.set('isDev', this.isDev)
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(helmet())
    this.express.use(express.urlencoded({ extended: false }))
  }

  private database (): void {}

  private viewa (): void {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.set('view engine', 'njk')
  }

  private routes (): void {
    this.express.use(routes)
  }

  private exception () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.express.use((err: any, req: Request, res: Response) => {
      const { errors } = err

      return res
        .status(err.statusCode ? err.statusCode : 500)
        .json({ error: errors || err.message })
    })
  }
}

export default new App().express
