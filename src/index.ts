import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ name: 'Hello Hono!' })
})

export default app
