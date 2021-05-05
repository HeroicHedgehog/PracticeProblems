const fastify = require('fastify')({
  logger: true
})
const fs = require('fs')

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})
fastify.post('/writefile', function (request, reply) {
try {
  const data = fs.writeFileSync('./output.txt', `${request.body.text}  ${request.body.text2}` )
  return ('You did it!')
  //file written successfully
} catch (err) {
  console.error(err)
  return (err)
}
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})