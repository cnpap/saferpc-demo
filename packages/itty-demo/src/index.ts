import { createServer } from 'node:http'
import { createServerAdapter } from '@whatwg-node/server'
import { router } from './route'

const port = 996

const ittyServer = createServerAdapter(router.fetch)

const httpServer = createServer(ittyServer)
httpServer.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
